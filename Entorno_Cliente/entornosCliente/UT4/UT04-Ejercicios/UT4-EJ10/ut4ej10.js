/*******************************************************************************

10. Obtener un subarray
Escribe una función filterRange(arr, a, b) que obtenga un array arr, busque
los elementos con valor mayor o igual a a y menor o igual a b y devuelva
un array con los resultados.
La función no debe modificar el array. Debe devolver un nuevo array.

Por ejemplo:
let arr = [5, 3, 8, 1];
let filtrado = filterRange(arr, 1, 4);
console.log(filtrado); // 3,1 (valores dentro del rango)
console.log(arr); // 5,3,8,1 (array original no modificado)

********************************************************************************/


// Devolveremos un nuevo array con los valores comprendidos entre a y b.
function filterRange(arr, a, b) {

    // Utilizaremos filter() para conservar los elementos que cumplan ambas
    // condiciones. Incluiremos los límites y no modificaremos el array original.
    return arr.filter(elemento => elemento >= a && elemento <= b);

}


// Utilizaremos los datos del ejemplo y guardaremos el resultado del filtrado.
let arr = [5, 3, 8, 1];
let filtrado = filterRange(arr, 1, 4);

// Mostraremos el nuevo array y comprobaremos que el original conserva sus valores.
console.log(filtrado); // [3, 1]
console.log(arr); // [5, 3, 8, 1]
