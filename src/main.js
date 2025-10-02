// ================= Firebase =================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

// ===== Reset view control (🎯) =====
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

// ================= Helpers para platform / mapas =================

// Detecta iOS (iPhone / iPad / iPod / iPadOS táctil en Mac)
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

// --- NUEVO: usar esquema maps:// en iOS para abrir la app nativa ---
// Devuelve la URL apropiada para direcciones:
// - iOS: esquema maps:// para abrir App de Apple Maps (usa ubicación real del dispositivo como origen)
// - Otros: Google Maps web con destination + travelmode
function getDirectionsLink(lat, lng /* ambos como números o strings */) {
    const coord = encodeURIComponent(`${lat},${lng}`);
    if (isIOS()) {
        // Abrir directamente la app nativa de Apple Maps. Evitamos pasar origen aquí.
        // Ejemplo: maps://?daddr=LAT,LNG&dirflg=d (dirflg=d fuerza modo coche si se desea)
        return `maps://?daddr=${coord}&dirflg=d`;
    } else {
        // Google Maps Web (funciona en Android / Desktop)
        return `https://www.google.com/maps/dir/?api=1&destination=${coord}&travelmode=driving`;
    }
}

// Añade el origen a la URL solo para Google (iOS: no añadimos origen, dejamos que la app use la ubicación actual)
function addOriginToDirections(url, originLat, originLng) {
    if (!url) return url;
    if (isIOS()) {
        // No añadimos origen para iOS (evitamos saddr/coords que rompen la ruta)
        return url;
    } else {
        // Google Maps web: añadimos origin con coordenadas
        const origin = encodeURIComponent(`${originLat},${originLng}`);
        return `${url}&origin=${origin}`;
    }
}

// Escapar texto simple para insertar en plantillas (básico)
function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ================== PICKUP ==================
async function cargarPuntos() {
    const snap = await getDocs(collection(db, "puntos_venta"));
    snap.forEach((doc) => {
        const data = doc.data();
        // destino como [lng, lat] para Mapbox
        const destino = [data.lng, data.lat];

        const marker = new mapboxgl.Marker({ color: "orange" })
            .setLngLat(destino)
            .addTo(map);

        firestoreMarkers.push(marker);

        marker.getElement().addEventListener("click", async () => {
            // URL inicial según plataforma (Apple app o Google web)
            let url = getDirectionsLink(data.lat, data.lng);

            // Clonar template de Pickup
            const template = document
                .querySelector("#pickupTemplate .popup-card")
                .cloneNode(true);

            template.querySelector(".popup-title").textContent =
                data.nombre ?? "Punto de venta";
            template.querySelector(".popup-desc").textContent =
                data.direccion ?? "";
            template.querySelector(".popup-btn").textContent =
                "🧭 Cómo llegar";

            // botón: guardamos la URL en data-href y redirigimos internamente (misma pestaña)
            const btn = template.querySelector(".popup-btn");
            btn.dataset.href = url;

            btn.addEventListener("click", (ev) => {
                ev.preventDefault();
                const href = btn.dataset.href || url;
                console.log("Abriendo ruta (href):", href);
                // Redirigir en la misma pestaña. En iOS abrirá la app de Apple Maps vía esquema maps://
                window.location.href = href;
            });

            const closeBtn = template.querySelector(".popup-close");
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    customPopup.style.display = "none";
                });
            }

            customPopup.innerHTML = "";
            customPopup.appendChild(template);

            // posicionar customPopup sobre el marker
            const pixel = map.project(destino);
            customPopup.style.left = pixel.x + "px";
            customPopup.style.top = pixel.y + "px";
            customPopup.style.display = "block";

            // Intentamos obtener la posición actual y actualizar la URL con el origen
            // Solo agregamos origen para Google (en iOS NO lo añadimos)
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const originLat = pos.coords.latitude;
                        const originLng = pos.coords.longitude;
                        const updated = addOriginToDirections(url, originLat, originLng);
                        // Actualizamos el data-href del botón (para Google)
                        btn.dataset.href = updated;
                        console.log("URL actualizada con origen (si aplica):", updated);
                    },
                    (err) => {
                        // si falla, no interrumpimos la experiencia (se queda la url base)
                        console.warn("Geoloc error:", err);
                    },
                    {
                        // opciones: intentamos con alta precisión por si acaso
                        enableHighAccuracy: true,
                        timeout: 5000
                    }
                );
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

    // Para mensaje compartido por WhatsApp usamos URLs web (compatibles)
    const mapsShare = isIOS()
        ? `https://maps.apple.com/?q=${encodeURIComponent(lat + ',' + lng)}`
        : `https://maps.google.com/?q=${encodeURIComponent(lat + ',' + lng)}`;

    // Cambia el número por el real: 593XXXXXXXXX
    const whatsappNumber = "593XXXXXXXXX";
    const url = `https://wa.me/${whatsappNumber}?text=${msg}%0AUbicación: ${encodeURIComponent(mapsShare)}`;

    const template = document
        .querySelector("#deliveryTemplate .popup-card")
        .cloneNode(true);

    template.querySelector(".popup-title").textContent = "Tu ubicación";
    template.querySelector(".popup-desc").innerHTML =
        "Haz clic en el botón para pedir por WhatsApp. 👋 <br/>También puedes mover el pin para ajustar tu ubicación.";
    template.querySelector(".popup-btn").textContent = "📲 Pedir por WhatsApp";

    template.querySelector(".popup-btn").addEventListener("click", () => {
        // Abrir WhatsApp / web en nueva ventana/pestaña
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
            },
            { enableHighAccuracy: true, timeout: 8000 }
        );
    });
}

// ================== MAPA ==================
map.on("load", () => {
    cargarPuntos(); // modo pickup por defecto
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
