/*******************************************************************************

13. Ordenar por edad

Escribe la función ordenarPorEdad(users) que recibe como parámetro un array
de objetos con la propiedad edad y los ordena según edad.

Ejemplo:
let juan = { nombre: "Juan", edad: 25 };
let pedro = { nombre: "Pedro", edad: 30 };
let marta = { nombre: "Marta", edad: 28 };

let arr = [juan, pedro, marta];

ordenarPorEdad(arr);
// ahora: [juan, marta, pedro]

console.log(arr[0].nombre); // Juan
console.log(arr[1].nombre); // Marta
console.log(arr[2].nombre); // Pedro

********************************************************************************/


// Ordenaremos el mismo array de usuarios de menor a mayor edad.
function ordenarPorEdad(users) {

    // Compararemos las edades de dos usuarios con sort().
    // Al restarlas en este orden, colocaremos primero al usuario más joven.
    users.sort((usuarioA, usuarioB) => usuarioA.edad - usuarioB.edad);

}


// Crearemos los tres objetos del ejemplo y los guardaremos en un array.
let juan = { nombre: "Juan", edad: 25 };
let pedro = { nombre: "Pedro", edad: 30 };
let marta = { nombre: "Marta", edad: 28 };

let arr = [juan, pedro, marta];

ordenarPorEdad(arr);

// Mostraremos los nombres en el nuevo orden: Juan, Marta y Pedro.
console.log(arr[0].nombre);
console.log(arr[1].nombre);
console.log(arr[2].nombre);


/******************************************************************************
FIND:
La función find() devuelve el primer elemento de un array que cumple con la condición dada.

**************
La función cómo parámetro puede ser una función flecha o una función normal.
**************

FINDINDEX:
La función findIndex() devuelve el índice del primer elemento de un array que cumple con la condición dada.


FILTER:
La función filter() devuelve un array con todos los elementos que cumplen con la condición dada.


MAP:
La función map() devuelve un array con los resultados de aplicar la función dada a cada elemento del array original.

*******************************************************************************/

//FUNCIÓN FLECHA
let pedroEncontrado = arr.find((usuario) => usuario.nombre === "Pedro");

//FUNCIÓN NORMAL
let pedroEncontrado2 = arr.find(
    function (usuario) {
        return usuario.nombre === "Pedro";
    }
);

//FUNCIÓN FLECHA
let pedroEncontradoIndex = arr.findIndex((usuario) => usuario.nombre === "Pedro");

//FUNCIÓN NORMAL
let pedroEncontradoIndex2 = arr.findIndex(
    function (usuario) {
        return usuario.nombre === "Pedro";
    }
);

let usuariosFiltrados = arr.filter((usuario) => usuario.edad >= 28);

let usuariosMapeados = arr.map((usuario) => usuario.nombre);

//Mostramos los resultados de las búsquedas.
console.log("Resultados de las búsquedas:");

console.log(pedroEncontrado);
console.log(pedroEncontrado2);
console.log(pedroEncontradoIndex);
console.log(pedroEncontradoIndex2);
console.log(usuariosFiltrados);
console.log(usuariosMapeados);