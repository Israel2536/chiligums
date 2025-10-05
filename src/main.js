import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

(function(){
    const SPLASH = document.getElementById('simpleSplash');
    if (!SPLASH) return;

    // ms (coincidir con CSS vars)
    const VISIBLE_MS = 1000; // 1s visible
    const FADE_MS = 500;     // 500ms fade-out (suavizado)
    let hideTimer = null;

    // Mostrar (por si lo llamas desde JS)
    function show() {
        SPLASH.classList.remove('hidden');
        SPLASH.style.pointerEvents = 'all';
        // for accessibility
        const logo = SPLASH.querySelector('img');
        if (logo) logo.setAttribute('aria-hidden', 'false');
    }

    // Ocultar con suavizado y remover del DOM después del fade
    function hide() {
        requestAnimationFrame(() => {
            SPLASH.classList.add('hidden');
            SPLASH.style.pointerEvents = 'none';
        });
        setTimeout(() => {
            if (SPLASH && SPLASH.parentNode) SPLASH.parentNode.removeChild(SPLASH);
        }, FADE_MS + 40);
    }

    show();
    hideTimer = setTimeout(hide, VISIBLE_MS);

    window.__skipSplash = function(){
        clearTimeout(hideTimer);
        hide();
    };

    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq && mq.matches) {
        clearTimeout(hideTimer);
        hideTimer = setTimeout(hide, Math.min(600, VISIBLE_MS));
    }
})();

// KEY para localStorage
const INTRO_STORAGE_KEY = "chiligums_seen_intro_v1";

function showIntroModal({ force = false, message = null } = {}) {
    try {
        if (!force && localStorage.getItem(INTRO_STORAGE_KEY) === "true") return;
    } catch (e) {
        console.warn("localStorage not available:", e);
    }

    if (document.querySelector(".intro-modal")) return;

    const backdrop = document.createElement("div");
    backdrop.className = "intro-modal";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");
    backdrop.innerHTML = `
    <div class="intro-modal__card" role="document">
      <button class="intro-close" aria-label="Cerrar">×</button>
      <h2>Cómo usar los puntos</h2>
      <p>${escapeHtml(message || "Pulsa en cualquier pin del mapa para ver la información del punto de venta.")}</p>
      <div class="intro-actions">
        <button class="intro-ok">Entendido</button>
      </div>
    </div>`;

    document.body.appendChild(backdrop);

    const okBtn = backdrop.querySelector(".intro-ok");
    const closeBtn = backdrop.querySelector(".intro-close");
    const skipCheckbox = backdrop.querySelector(".intro-skip-checkbox");

    okBtn.focus();

    function closeModal() {
        if (!backdrop) return;
        document.body.removeChild(backdrop);
        document.removeEventListener("keydown", onKeyDown);
    }

    function onKeyDown(e) {
        if (e.key === "Escape") closeModal();
    }

    okBtn.addEventListener("click", () => {
        if (skipCheckbox && skipCheckbox.checked) {
            try { localStorage.setItem(INTRO_STORAGE_KEY, "true"); } catch (e) { console.warn(e); }
        }
        closeModal();
    });
    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", (ev) => { if (ev.target === backdrop) closeModal(); });
    document.addEventListener("keydown", onKeyDown);
}

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function showIntroIfNeeded() { showIntroModal({ force: false }); }

// ================= Firebase =================
const firebaseConfig = {
    apiKey: "AIzaSyBtnkqK0cq137PH_mJdaBeK55MPSHAXQ34",
    authDomain: "chiligums-map.firebaseapp.com",
    projectId: "chiligums-map",
    storageBucket: "chiligums-map.appspot.com",
    messagingSenderId: "207156196903",
    appId: "1:207156196903:web:546c8a59be8f7eac360002",
    measurementId: "G-3LVL8XNYBW",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ================= Mapbox =================
mapboxgl.accessToken =
    "pk.eyJ1IjoiYW5kcm8xMTUwIiwiYSI6ImNtZzQ4YjVudjByanUybnFiNXg4dHB4bmoifQ._SZZ_tvydofhnFu1FO_mAA";

const CAYAMBE = [-78.1474059, 0.0429804];

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: CAYAMBE,
    zoom: 14,
});

map.addControl(new mapboxgl.NavigationControl());

// ===== Loader helpers =====
function showLoader() { const el = document.getElementById("mapLoader"); if (el) el.style.display = "flex"; }
function hideLoader() { const el = document.getElementById("mapLoader"); if (el) el.style.display = "none"; }

// ===== Botón Reset View (🎯) =====
class ResetViewControl {
    onAdd(map) {
        this._map = map;
        this._btn = document.createElement("button");
        this._btn.className = "mapboxgl-ctrl-icon";
        this._btn.type = "button";
        this._btn.title = "Centrar en Cayambe";
        this._btn.textContent = "🎯";
        this._btn.onclick = () => { map.flyTo({ center: CAYAMBE, zoom: 14, speed: 1.2 }); };
        const container = document.createElement("div");
        container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
        container.appendChild(this._btn);
        return container;
    }
    onRemove() {
        this._btn.parentNode.removeChild(this._btn);
        this._map = undefined;
    }
}
map.addControl(new ResetViewControl(), "top-right");

// ===== Contenedor único para popup custom =====
const customPopup = document.createElement("div");
customPopup.id = "customPopup";
// IMPORTANT: cambio mínimo: evitar translate Y tan grande para posicionar manualmente el top
customPopup.style.position = "absolute";
customPopup.style.transform = "translate(-50%, 0)"; // <- antes era -140% en Y, ahora manejamos top manualmente
customPopup.style.display = "none";
customPopup.style.zIndex = "999";
map.getContainer().appendChild(customPopup);

// ===== Variables globales =====
let firestoreMarkers = [];
let deliveryMarker = null;
let currentPopupLocation = null; // <-- guarda [lng, lat] del popup mostrado (pickup)

// ================== PICKUP ==================
async function cargarPuntos() {
    const snap = await getDocs(collection(db, "puntos_venta"));
    snap.forEach((doc) => {
        const data = doc.data();
        const destino = [data.lng, data.lat];

        const marker = new mapboxgl.Marker({ color: "orange" })
            .setLngLat(destino)
            .addTo(map);

        firestoreMarkers.push(marker);

        marker.getElement().addEventListener("click", async () => {
            let url = `https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lng}`;

            // Clonar template de Pickup
            const template = document
                .querySelector("#pickupTemplate .popup-card")
                .cloneNode(true);

            template.querySelector(".popup-title").textContent =
                data.nombre ?? "Punto de venta";
            template.querySelector(".popup-desc").textContent =
                data.direccion ?? "";
            template.querySelector(".popup-btn").textContent =
                "🚗 Ir con Google Maps";

            template.querySelector(".popup-btn").addEventListener("click", () => {
                window.open(url, "_blank");
            });

            const closeBtn = template.querySelector(".popup-close");
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    customPopup.style.display = "none";
                    currentPopupLocation = null;
                });
            }

            // --- MEDIR popup ---
            const meas = template.cloneNode(true);
            meas.style.position = "absolute";
            meas.style.visibility = "hidden";
            meas.style.display = "block";
            document.body.appendChild(meas);
            const popupHeight = meas.offsetHeight || 200;
            const popupWidth = meas.offsetWidth || template.offsetWidth || 240;
            meas.remove();

            // --- Queremos centrar el MARKER en la pantalla (vertical center) ---
            const mapContainer = map.getContainer();
            const containerWidth = mapContainer.clientWidth || map.getCanvas().clientWidth;
            const containerHeight = mapContainer.clientHeight || map.getCanvas().clientHeight;

            // proyectar la posición actual del marker (antes de mover)
            const pixel = map.project(destino);

            // Deseamos que el marcador quede exactamente en el centro vertical del contenedor
            const desiredMarkerY = containerHeight * 0.5; // <- 50% (marker centrado)
            const deltaY = desiredMarkerY - pixel.y; // px que necesitamos mover el marker hacia abajo

            // Calcular nuevo centro del mapa en píxeles y convertir a coords
            const centerPixel = map.project(map.getCenter());
            const newCenterPixel = { x: centerPixel.x, y: centerPixel.y - deltaY };
            const newCenter = map.unproject([newCenterPixel.x, newCenterPixel.y]);

            // Guardamos referencia para reposicionar si el mapa se mueve
            currentPopupLocation = destino;

            // Mover la cámara suavemente a la nueva posición
            map.easeTo({
                center: newCenter,
                duration: 500,
                easing: (t) => t,
            });

            // Mostrar popup cuando termine el movimiento
            map.once("moveend", () => {
                customPopup.innerHTML = "";
                customPopup.appendChild(template);

                const finalPixel = map.project(destino);

                // Colocar popup **encima** del pin: calcular top como pixel.y - popupHeight - margen
                const margin = 10;
                let top = finalPixel.y - popupHeight - margin;
                // Si top queda por encima del mapa, lo clavamos al margen superior
                if (top < 8) top = 8;

                // centerX será el pixel.x (centro horizontal respecto al pin)
                let centerX = finalPixel.x;
                // clamp horizontal para que no se salga por los lados
                const minCenterX = popupWidth / 2 + 8;
                const maxCenterX = containerWidth - popupWidth / 2 - 8;
                if (centerX < minCenterX) centerX = minCenterX;
                if (centerX > maxCenterX) centerX = maxCenterX;

                customPopup.style.left = centerX + "px";
                customPopup.style.top = top + "px";
                customPopup.style.display = "block";
            });

            // intentar mejorar URL con origen si tenemos geoloc
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    url += `&origin=${pos.coords.latitude},${pos.coords.longitude}`;
                });
            }
        });
    });
}

function limpiarPuntos() {
    firestoreMarkers.forEach((m) => m.remove());
    firestoreMarkers = [];
    if (deliveryMarker) {
        deliveryMarker.remove();
        deliveryMarker = null;
    }
    customPopup.style.display = "none";
    currentPopupLocation = null;
}

// ================== DELIVERY ==================
function mostrarPopupDelivery(lat, lng) {
    const msg = encodeURIComponent(
        "Hola, quiero hacer un pedido desde esta ubicación:"
    );
    const url = `https://wa.me/593964031010?text=${msg}%0AUbicación: https://maps.google.com/?q=${lat},${lng}`;

    const template = document
        .querySelector("#deliveryTemplate .popup-card")
        .cloneNode(true);

    template.querySelector(".popup-title").textContent = "Tu ubicación";
    template.querySelector(".popup-desc").innerHTML =
        "Haz clic en el botón para pedir por WhatsApp. 👋 <br/>También puedes mover el pin para ajustar tu ubicación.";
    template.querySelector(".popup-btn").textContent = "📲 Pedir por WhatsApp";

    template.querySelector(".popup-btn").addEventListener("click", () => {
        window.open(url, "_blank");
    });

    const closeBtn = template.querySelector(".popup-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            customPopup.style.display = "none";
            currentPopupLocation = null;
        });
    }

    customPopup.innerHTML = "";
    customPopup.appendChild(template);

    const pixel = map.project([lng, lat]);

    // posicionar popup sobre pin (mismo cálculo: popup encima del pin)
    const popupHeight = template.offsetHeight || 200;
    const popupWidth = template.offsetWidth || 240;
    const margin = 10;
    const mapContainer = map.getContainer();
    const containerWidth = mapContainer.clientWidth || map.getCanvas().clientWidth;
    const containerHeight = mapContainer.clientHeight || map.getCanvas().clientHeight;

    let top = pixel.y - popupHeight - margin;
    if (top < 8) top = 8;

    let centerX = pixel.x;
    const minCenterX = popupWidth / 2 + 8;
    const maxCenterX = containerWidth - popupWidth / 2 - 8;
    if (centerX < minCenterX) centerX = minCenterX;
    if (centerX > maxCenterX) centerX = maxCenterX;

    customPopup.style.left = centerX + "px";
    customPopup.style.top = top + "px";
    customPopup.style.display = "block";
}

function activarDelivery() {
    return new Promise((resolve) => {
        limpiarPuntos();

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;

                if (deliveryMarker) deliveryMarker.remove();

                deliveryMarker = new mapboxgl.Marker({ color: "red", draggable: true })
                    .setLngLat([lng, lat])
                    .addTo(map);

                map.flyTo({
                    center: [lng, lat],
                    zoom: 15,
                    offset: [0, 10],
                    speed: 1.2,
                });

                mostrarPopupDelivery(lat, lng);

                const tooltip = document.createElement("div");
                tooltip.innerText = "🚩 Arrástrame";
                tooltip.style.position = "absolute";
                tooltip.style.background = "#fff";
                tooltip.style.color = "#111";
                tooltip.style.padding = "4px 8px";
                tooltip.style.borderRadius = "6px";
                tooltip.style.fontSize = "12px";
                tooltip.style.fontWeight = "600";
                tooltip.style.boxShadow = "0 2px 6px rgba(0,0,0,0.25)";
                tooltip.style.transform = "translate(-50%, -160%)";
                tooltip.style.whiteSpace = "nowrap";
                const el = deliveryMarker.getElement();
                el.appendChild(tooltip);
                setTimeout(() => tooltip.remove(), 5000);

                deliveryMarker.on("dragend", () => {
                    const pos = deliveryMarker.getLngLat();
                    mostrarPopupDelivery(pos.lat, pos.lng);

                    map.flyTo({
                        center: [pos.lng, pos.lat],
                        zoom: 15,
                        offset: [0, 10],
                        speed: 0.6,
                    });
                });

                resolve();
            },
            () => {
                alert("No se pudo obtener la ubicación. Activa el GPS.");
                resolve();
            }
        );
    });
}

// ================== MAPA ==================
map.on("load", () => {
    cargarPuntos(); // modo pickup por defecto
    showIntroIfNeeded();
});

map.on("move", () => {
    // si hay popup visible y está vinculado a un punto lo reposicionamos (popup siempre encima del pin)
    if (customPopup.style.display === "block") {
        const card = customPopup.querySelector(".popup-card");
        if (!card) return;

        const popupHeight = card.offsetHeight || 200;
        const popupWidth = card.offsetWidth || 240;
        const mapContainer = map.getContainer();
        const containerWidth = mapContainer.clientWidth || map.getCanvas().clientWidth;
        const containerHeight = mapContainer.clientHeight || map.getCanvas().clientHeight;

        if (deliveryMarker) {
            const pos = deliveryMarker.getLngLat();
            const pixel = map.project([pos.lng, pos.lat]);

            const margin = 10;
            let top = pixel.y - popupHeight - margin;
            if (top < 8) top = 8;

            let centerX = pixel.x;
            const minCenterX = popupWidth / 2 + 8;
            const maxCenterX = containerWidth - popupWidth / 2 - 8;
            if (centerX < minCenterX) centerX = minCenterX;
            if (centerX > maxCenterX) centerX = maxCenterX;

            customPopup.style.left = centerX + "px";
            customPopup.style.top = top + "px";
        } else if (currentPopupLocation) {
            const pixel = map.project(currentPopupLocation);
            const margin = 10;
            let top = pixel.y - popupHeight - margin;
            if (top < 8) top = 8;

            let centerX = pixel.x;
            const minCenterX = popupWidth / 2 + 8;
            const maxCenterX = containerWidth - popupWidth / 2 - 8;
            if (centerX < minCenterX) centerX = minCenterX;
            if (centerX > maxCenterX) centerX = maxCenterX;

            customPopup.style.left = centerX + "px";
            customPopup.style.top = top + "px";
        }
    }
});

// ================== TOGGLES ==================
const pickupBtn = document.getElementById("pickupBtn");
const deliveryBtn = document.getElementById("deliveryBtn");

if (pickupBtn && deliveryBtn) {
    pickupBtn.addEventListener("click", () => {
        pickupBtn.classList.add("active");
        deliveryBtn.classList.remove("active");

        showLoader();
        setTimeout(() => {
            limpiarPuntos();
            map.flyTo({ center: CAYAMBE, zoom: 14, speed: 1.2 });
            cargarPuntos();
            hideLoader();
        }, 1500);
    });

    deliveryBtn.addEventListener("click", () => {
        deliveryBtn.classList.add("active");
        pickupBtn.classList.remove("active");

        showLoader();
        activarDelivery().finally(() => hideLoader());
    });

    // Mostrar banner solo una vez después de "Entendido"
    document.addEventListener("DOMContentLoaded", () => {
        const banner = document.getElementById("installBanner");

        // Escucha el botón "Entendido" del popup del mapa
        const understoodBtn = document.querySelector("#popupEntendido, .btn-entendido, #understoodBtn");

        if (understoodBtn) {
            understoodBtn.addEventListener("click", () => {
                // Solo si no lo ha visto antes
                if (!localStorage.getItem("bannerShown")) {
                    setTimeout(() => {
                        banner.classList.remove("hidden");
                        banner.classList.add("show");

                        // Ocultar después de 2s (igual que animación)
                        setTimeout(() => {
                            banner.classList.remove("show");
                            localStorage.setItem("bannerShown", "true");
                        }, 2000);
                    }, 500); // medio segundo después de "Entendido"
                }
            });
        }
    });


}
