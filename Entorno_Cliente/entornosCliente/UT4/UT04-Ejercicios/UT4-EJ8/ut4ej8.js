/*******************************************************************************

8.	IndexOf
Tenemos un array con números y cadenas, con algunas cadenas repetidas.
    1.	Queremos buscar una cadena concreta y cambiarla por la misma cadena 
        en mayúsculas, pero sólo la primera vez que aparece. Si no encuentra 
        la cadena, no hace nada (tener en cuenta que no dé un error en consola).
    2.	Repetir el ejercicio anterior, pero la cadena que queremos cambiar es 
        la última que aparece.
    3.	Repetir el ejercicio anterior, pero cambiar todas las veces que 
        aparece la cadena.

********************************************************************************/


// Utilizaremos un array con números y cadenas, con algunos nombres repetidos.
let bolaDeDrac = [1, "Son Goku", 2, "Vegeta", 3, "Kame-Senin", 4, "Son Goku", 5, "Kame-Senin"];
let cadenaABuscar = "Kame-Senin";

// Crearemos una copia para cada apartado con slice(), conservando el original.
// 1) Cambiaremos únicamente la primera aparición de la cadena.
let arrayPrimera = bolaDeDrac.slice();

// Obtendremos con indexOf() la primera posición de la cadena, o -1 si no aparece.
let posicionPrimera = arrayPrimera.indexOf(cadenaABuscar);

// Comprobaremos que existe antes de acceder a ella y convertirla a mayúsculas.
if (posicionPrimera !== -1) {

    arrayPrimera[posicionPrimera] = arrayPrimera[posicionPrimera].toUpperCase();

}

console.log("1) Primera aparición en mayúsculas:", arrayPrimera);


// 2) Cambiaremos únicamente la última aparición de la cadena.
let arrayUltima = bolaDeDrac.slice();

// Buscaremos desde el final con lastIndexOf() y obtendremos la última posición.
let posicionUltima = arrayUltima.lastIndexOf(cadenaABuscar);

// Si no encontramos la cadena, conservaremos el array sin cambios.
if (posicionUltima !== -1) {

    arrayUltima[posicionUltima] = arrayUltima[posicionUltima].toUpperCase();

}

console.log("2) Última aparición en mayúsculas:", arrayUltima);


// 3) Cambiaremos todas las apariciones de la cadena.
let arrayTodas = bolaDeDrac.slice();
let posicion = arrayTodas.indexOf(cadenaABuscar);

// Repetiremos la sustitución mientras encontremos alguna coincidencia.
while (posicion !== -1) {

    arrayTodas[posicion] = arrayTodas[posicion].toUpperCase();

    // Buscaremos a partir de la siguiente posición para avanzar en cada vuelta,
    // incluso si la cadena que buscamos ya está en mayúsculas.
    posicion = arrayTodas.indexOf(cadenaABuscar, posicion + 1);

}

console.log("3) Todas las apariciones en mayúsculas:", arrayTodas);


