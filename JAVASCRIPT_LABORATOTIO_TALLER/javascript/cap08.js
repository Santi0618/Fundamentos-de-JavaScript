function saludar () {
    console.log("Hola");
}

saludar();

// Saludar con parámetros
function saludo(nomnbre) {
    console.log(`Hola ${nombre}`);
}

saludo("Carlos");

// Función con retorno
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 8);

console.log(resultado);