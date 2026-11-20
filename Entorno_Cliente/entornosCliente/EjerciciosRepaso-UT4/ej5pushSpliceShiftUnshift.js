/*
5.	Operaciones sobre Arrays
Escribe los comandos necesarios para:
    1.	Crear un array styles con los items “Jazz” y “Blues”.
    2.	Agregar “Rock-n-Roll” al final.
    3.	Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el 
        valor medio debe funcionar con cualquier array de longitud impar.
    4.	Quitar el primer valor del array y mostrarlo.
    5.	Insertar Rap y Reggae al principio del array.

El array durante el proceso:
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

styles.splice(Math.floor(styles.length / 2), 1, "Classics");
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);