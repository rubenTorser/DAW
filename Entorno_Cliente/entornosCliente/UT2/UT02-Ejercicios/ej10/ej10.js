/**********************************************
 
10.	EDAD1. Crea una función edad1(edad) que 
recibe un parámetro edad. La función devolverá 
true si la edad está entre 14 y 90 (ambos inclusive). 
Se puede suponer que edad es un número entero 
positivo, la función no tiene que comprobarlo.

**********************************************/

let edad1 = 18;
let edad2 = 13;
let edad3 = 91;

function edadTrueOrFalse(edad) {
    return edad >= 14 && edad <= 90;
}

console.log(edad1 + ": " + edadTrueOrFalse(edad1)); // Muestra true, porque 18 está entre 14 y 90.
console.log(edad2 + ": " + edadTrueOrFalse(edad2) );
console.log(edad3 + ": " + edadTrueOrFalse(edad3) );