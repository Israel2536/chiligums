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
        // aplicar clase que inicia la transición
        // usamos requestAnimationFrame para asegurarnos que el browser reconozca el cambio
        requestAnimationFrame(() => {
            SPLASH.classList.add('hidden');
            SPLASH.style.pointerEvents = 'none';
        });
        // remover del DOM después del tiempo de fade
        setTimeout(() => {
            if (SPLASH && SPLASH.parentNode) SPLASH.parentNode.removeChild(SPLASH);
        }, FADE_MS + 40);
    }

    // iniciar: mostrar y programar hide
    show();
    hideTimer = setTimeout(hide, VISIBLE_MS);

    // expose helper to skip during dev
    window.__skipSplash = function(){
        clearTimeout(hideTimer);
        hide();
    };

    // soporte reduced motion: si prefieren reducir movimiento, acortar todo
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq && mq.matches) {
        clearTimeout(hideTimer);
        // hide rápido
        hideTimer = setTimeout(hide, Math.min(600, VISIBLE_MS));
    }
})();

// KEY para localStorage
const INTRO_STORAGE_KEY = "chiligums_seen_intro_v1";

/**
 * Crea y muestra el modal introductorio (si no está desactivado).
 * Opciones:
 *  - force: true -> ignora localStorage y muestra
 *  - message: texto adicional (opcional)
 */
function showIntroModal({ force = false, message = null } = {}) {
    try {
        if (!force && localStorage.getItem(INTRO_STORAGE_KEY) === "true") return;
    } catch (e) {
        // si localStorage falla seguimos mostrando
        console.warn("localStorage not available:", e);
    }

    // Si ya existe, no lo recreamos
    if (document.querySelector(".intro-modal")) {
        return;
    }

    // Crear DOM del modal
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

    // Enfocar en el botón OK
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

    // Eventos
    okBtn.addEventListener("click", () => {
        // si marcó "No mostrar de nuevo" guardamos
        if (skipCheckbox && skipCheckbox.checked) {
            try {
                localStorage.setItem(INTRO_STORAGE_KEY, "true");
            } catch (e) { console.warn("localStorage fail", e); }
        }
        closeModal();
    });

    closeBtn.addEventListener("click", () => {
        closeModal();
    });

    // Cerrar si hace click fuera de la tarjeta
    backdrop.addEventListener("click", (ev) => {
        if (ev.target === backdrop) closeModal();
    });

    document.addEventListener("keydown", onKeyDown);
}

// escape simple para insertar en innerHTML
function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Llamada de utilidad: muestra la intro si no se ocultó
function showIntroIfNeeded() {
    showIntroModal({ force: false });
}


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
function showLoader() {
    document.getElementById("mapLoader").style.display = "flex";
}
function hideLoader() {
    document.getElementById("mapLoader").style.display = "none";
}

// ===== Botón Reset View (🎯) =====
class ResetViewControl {
    onAdd(map) {
        this._map = map;
        this._btn = document.createElement("button");
        this._btn.className = "mapboxgl-ctrl-icon";
        this._btn.type = "button";
        this._btn.title = "Centrar en Cayambe";
        this._btn.textContent = "🎯";
        this._btn.onclick = () => {
            map.flyTo({ center: CAYAMBE, zoom: 14, speed: 1.2 });
        };
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
customPopup.style.position = "absolute";
customPopup.style.transform = "translate(-50%, -140%)";
customPopup.style.display = "none";
customPopup.style.zIndex = "999";
map.getContainer().appendChild(customPopup);

// ===== Variables globales =====
let firestoreMarkers = [];
let deliveryMarker = null;

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
                });
            }

            customPopup.innerHTML = "";
            customPopup.appendChild(template);

            const pixel = map.project(destino);
            customPopup.style.left = pixel.x + "px";
            customPopup.style.top = pixel.y + "px";
            customPopup.style.display = "block";

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
}

// ================== DELIVERY ==================
function mostrarPopupDelivery(lat, lng) {
    const msg = encodeURIComponent(
        "Hola, quiero hacer un pedido desde esta ubicación:"
    );
    const url = `https://wa.me/593XXXXXXXXX?text=${msg}%0AUbicación: https://maps.google.com/?q=${lat},${lng}`;

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
        });
    }

    customPopup.innerHTML = "";
    customPopup.appendChild(template);

    const pixel = map.project([lng, lat]);
    customPopup.style.left = pixel.x + "px";
    customPopup.style.top = pixel.y + "px";
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

                // Tooltip estilizado en cada entrada a delivery
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

                // Actualizar popup inmediatamente al mover pin
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
    if (customPopup.style.display === "block") {
        const card = customPopup.querySelector(".popup-card");
        if (card && deliveryMarker) {
            const pos = deliveryMarker.getLngLat();
            const pixel = map.project([pos.lng, pos.lat]);
            customPopup.style.left = pixel.x + "px";
            customPopup.style.top = pixel.y + "px";
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

}
