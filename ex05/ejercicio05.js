// operadores matemáticos

let a, b;
let c, d;

let suma, resta, multi, div, residuo, potencia;

//Obtener los datos a traves de los usuarios
a = prompt('Ingrese un número: ');
b = prompt('Ingrese otro número: ');  

// Resultados de las operaciones +
suma = a + b; // Aqui las operacion da un error debido a que se concantenan los datos
document.write("La suma es: ", suma, "<br>");
console.log("La suma es: ", suma);

resta = a -b; 
document.write("La resta es: ", resta, "<br>");
console.log("La resta es: ", resta);  

multi = a * b;
document.write("La multiplicación es: ", multi, "<br>");
console.log("La multiplicación es: ", multi);

div = a / b;
document.write("La división es: ", div, "<br>");
console.log("La división es: ", div); 

residuo = a % b;
document.write("El residuo es: ", residuo, "<br>");
console.log("El residuo es: ", residuo);

potencia = a ** b;
document.write("La potencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);

//Obtener los datos a traves del usuario
c = parseInt(prompt('Ingrese un número: '));
d = parseInt(prompt('Ingrese otro numero:'))

suma = c + d
resta = c - d
multi = c * d
dib = c / d
residuo = c % d
potencia = c ** d

document.writeln("Los resultados de las operaciones son: ",
    "suma: ", suma, "<br>",
    "resta: ", resta, "<br>",
    "multi: ", multi, "<br>",
    "div: ", div, "<br>",
    "residuo: ", residuo, "<br>",
    "potencia: ", potencia, "<br>"
);

console.log("Los resultados de las operciones resueltas son: ",
    "suma: ", suma,
    "resta: ", resta,
    "multi: ", multi,
    "div: ", div,
    "residuo: ", residuo,
    "potencia: ", potencia
);