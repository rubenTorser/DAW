/*******************************************************************************

11. Ordenar un array con orden decreciente matemático

Escribe una función ordenaDecreciente(arr) que recibe un array como parámetro
y lo ordena en orden decreciente matemático.
Suponemos que todos los elementos del array son números.
La función modifica el array.

Ejemplo:
let arr = [5, 2, 1, -10, 8];
ordenaDecreciente(arr);
console.log(arr);

********************************************************************************/


// Ordenaremos los números del mismo array de mayor a menor.
function ordenaDecreciente(arr) {

    // Utilizaremos una función de comparación para ordenar por valor numérico.
    // Con b - a, colocaremos los valores mayores antes que los menores.
    arr.sort((a, b) => b - a);

}


// Probaremos la función con el array del enunciado.
let arr = [5, 2, 1, -10, 8];

ordenaDecreciente(arr);

// Mostraremos el array original modificado: [8, 5, 2, 1, -10].
console.log(arr);
