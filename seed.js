// seed.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// ⚡ Configuración de Firebase (reemplaza con la tuya del panel Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyBtnkqK0cq137PH_mJdaBeK55MPSHAXQ34",
    authDomain: "chiligums-map.firebaseapp.com",
    projectId: "chiligums-map",
    storageBucket: "chiligums-map.firebasestorage.app",
    messagingSenderId: "207156196903",
    appId: "1:207156196903:web:546c8a59be8f7eac360002",
    measurementId: "G-3LVL8XNYBW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📍 Tus 11 puntos de venta
const puntos = [
    {
        lat: 0.0429804,
        lng: -78.1474059,
        nombre: "Liderpro Cayambe"
    },
    {
        lat: 0.0387328,
        lng: -78.1431958,
        nombre: "Rianxeira Bazar"
    },
    {
        lat: 0.0510451,
        lng: -78.1417856,
        nombre: "Av. Luis Cordero"
    },
    {
        lat: 0.0465377,
        lng: -78.1398662,
        nombre: "ALA Menestra"
    },
    {
        lat: 0.047,
        lng: -78.145,
        nombre: "Frigorífico La Floresta" // aprox del screenshot
    },
    {
        lat: 0.049,
        lng: -78.144,
        nombre: "Víveres Sur" // aprox Chile y Cayambe
    },
    {
        lat: 0.052,
        lng: -78.142,
        nombre: "Víveres Sanchez"
    },
    {
        lat: 0.039,
        lng: -78.140,
        nombre: "Víveres Day’ita"
    },
    {
        lat: 0.053,
        lng: -78.146,
        nombre: "Mercado Central Cayambe"
    },
    {
        lat: 0.041,
        lng: -78.148,
        nombre: "Farmacia San José"
    },
    {
        lat: 0.044,
        lng: -78.143,
        nombre: "Mini Market La 10"
    }
];

// 🚀 Función para subir todos los puntos
async function seed() {
    for (let i = 0; i < puntos.length; i++) {
        const punto = puntos[i];
        await setDoc(doc(db, "puntos_venta", `punto${i + 1}`), punto);
        console.log(`✅ Punto ${i + 1} insertado: ${punto.nombre}`);
    }
    console.log("🎉 Todos los puntos insertados en Firestore");
    process.exit();
}

seed();
