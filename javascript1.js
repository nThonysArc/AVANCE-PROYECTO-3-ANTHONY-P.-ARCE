// Javascript 1 - Funciones básicas
function saludar() {
    console.log("Hola desde javascript1.js");
}

function sumar(a, b) {
    return a + b;
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', function() {
    saludar();
    console.log("Suma de 5 + 3 =", sumar(5, 3));
});