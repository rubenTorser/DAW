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
