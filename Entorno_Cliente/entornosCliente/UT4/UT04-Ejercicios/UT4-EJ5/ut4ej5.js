/****************************************************************************

5. Operaciones sobre Arrays

Escribe los comandos necesarios para:
Crear un array styles con los items "Jazz" y "Blues".
Agregar "Rock-n-Roll" al final.
Reemplazar el valor en el medio por "Classics". Tu código para encontrar el
valor medio debe funcionar con cualquier array de longitud impar.
Quitar el primer valor del array y mostrarlo.
Insertar Rap y Reggae al principio del array.

El array durante el proceso:
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll

****************************************************************************/

// Creamos el array con sus dos elementos iniciales.
let styles = ["Jazz", "Blues"];
console.log(styles);

// push añade el nuevo elemento al final del mismo array.
styles.push("Rock-n-Roll");
console.log(styles);

// Los índices empiezan en 0. Dividimos la longitud entre 2 y redondeamos
// hacia abajo con Math.floor para obtener el índice central.
// Por ejemplo, si hay 3 elementos, el índice central es 1; si hay 5, es 2.
// Así el cálculo sirve para cualquier array de longitud impar.
let posicionCentral = Math.floor(styles.length / 2);
styles[posicionCentral] = "Classics";
console.log(styles);

// shift elimina el primer elemento y lo devuelve para poder mostrarlo.
let primerEstilo = styles.shift();
console.log(primerEstilo);
console.log(styles);

// unshift añade los elementos al principio, en el orden que indicamos.
styles.unshift("Rap", "Reggae");
console.log(styles);
