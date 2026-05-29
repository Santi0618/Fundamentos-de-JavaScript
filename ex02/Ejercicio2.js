/*
var se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.

let se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.

const se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización.
*/ 

var nombre; // declara una variable con
nombre = "Juan"; // asigna un valor a la variable

var apellido = "Pérez"; // declara y asigna un valor a la variable

console.log(nombre); // imprime "Juan"
console.log(apellido); // imprime "Pérez"

edad = 30; // declarar y asignar una variable con let 
console.log(edad); // imprime 30 

edad = 31; // reasignar el valor de la variable edad
console.log(edad); // imprime 31

const PI = 3.14159; // declarar una constante
console.log(PI); // imprime 3.14159