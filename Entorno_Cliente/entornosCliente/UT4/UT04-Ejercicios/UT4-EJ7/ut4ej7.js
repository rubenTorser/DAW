/****************************************************************************

7.  SPLICE. Tenemos el siguiente array:
    [1, "dos", "tres", 4, 5, "seis", "siete"].
    Escribe las sentencias para:

    a) Eliminar los elementos del array que son de tipo cadena.

    b) Después de cada elemento de tipo cadena, añadir el mismo elemento
       en mayúsculas.

    c) Eliminar todos los elementos del array que son de tipo cadena, y en
       esa posición añadir dos elementos: "ELIMINADO" y "INSERTADO".

****************************************************************************/


let arrayOriginal = [1, "dos", "tres", 4, 5, "seis", "siete"];

// Cada apartado parte de una copia del array original.
// slice() sin argumentos copia todos sus elementos sin modificar el original.
let arrayA = arrayOriginal.slice();

// a) Eliminamos las cadenas.
// Recorremos desde el final: al borrar un elemento, los que quedan por revisar
// conservan su posición y no nos saltamos ninguna cadena.
for (let i = arrayA.length - 1; i >= 0; i--) {

    // typeof permite comprobar si el elemento es una cadena de texto.
    if (typeof arrayA[i] == "string") {

        // Desde la posición i, eliminamos un elemento.
        arrayA.splice(i, 1);

    }

}

console.log("a) Array sin cadenas:", arrayA);


// b) Añadimos la versión en mayúsculas después de cada cadena original.
let arrayB = arrayOriginal.slice();

// Al ir hacia atrás, las cadenas añadidas quedan a la derecha de i.
// Así no volvemos a procesarlas ni añadimos elementos indefinidamente.
for (let i = arrayB.length - 1; i >= 0; i--) {

    if (typeof arrayB[i] == "string") {

        // i + 1 es la posición siguiente a la cadena y 0 indica que no borramos.
        // toUpperCase() devuelve el texto convertido a mayúsculas.
        arrayB.splice(i + 1, 0, arrayB[i].toUpperCase());

    }

}

console.log("b) Array con las cadenas en mayúsculas añadidas:", arrayB);


// c) Sustituimos cada cadena por los dos textos indicados.
let arrayC = arrayOriginal.slice();

// Recorremos hacia atrás para no procesar los textos que vamos insertando.
for (let i = arrayC.length - 1; i >= 0; i--) {

    if (typeof arrayC[i] == "string") {

        // Borramos un elemento en i y colocamos allí los dos nuevos elementos.
        arrayC.splice(i, 1, "ELIMINADO", "INSERTADO");

    }

}

console.log("c) Array con las cadenas sustituidas:", arrayC);
