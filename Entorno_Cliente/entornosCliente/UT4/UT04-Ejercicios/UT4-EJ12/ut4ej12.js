/*******************************************************************************

12. Devolver una copia de un array, pero ordenado con orden alfabético

Escribe una función copiaOrdenada(arr) que devuelva una copia del array
ordenada con orden alfabético.
El array original no se tiene que modificar.

Ejemplo:
let arr = ["HTML", "CSS", "JavaScript"];
let arrOrdenado = copiaOrdenada(arr);
console.log(arr); // HTML,CSS,JavaScript
console.log(arrOrdenado); // CSS,HTML,JavaScript

********************************************************************************/


// Devolveremos una copia ordenada y conservaremos el array recibido.
function copiaOrdenada(arr) {

    // Copiaremos todos los elementos con slice() sin modificar el original.
    let copia = arr.slice();

    // Ordenaremos alfabéticamente las cadenas de la copia con sort().
    copia.sort(

        function (a, b) {
        return a.localeCompare(b);
        }

    );

    return copia;

}


// Probaremos la función con las cadenas del enunciado.
let arr = ["hTML", "CSS", "JavaScript"];
let arrOrdenado = copiaOrdenada(arr);

// Mostraremos el original: ["HTML", "CSS", "JavaScript"].
console.log(arr);

// Mostraremos la copia ordenada: ["CSS", "HTML", "JavaScript"].
console.log(arrOrdenado);
