/*************************************************************

26. (Operadores: comparaciones) ¿Cuál será el resultado de las
siguientes expresiones?

null == undefined
"4" > "12"
12 < "2"
"12" < "2"
"12" > 4
"carpintero" > "pescador"
null == ""

 ************************************************************/

"use strict";

console.log(null == undefined); // true
console.log("4" > "12"); // true
console.log(12 < "2"); // false
console.log("12" < "2"); // true
console.log("12" > 4); // true
console.log("carpintero" > "pescador"); // false
console.log(null == ""); // false

/*

*****************************RESPUESTAS*****************************

    1. null == undefined -> true
       El operador == tiene una regla especial: considera iguales
       null y undefined. Por eso esta comparación da true.

    2. "4" > "12" -> true
       Como los dos valores son cadenas, se comparan carácter a
       carácter. El primer carácter "4" es mayor que "1", así que
       el resultado es true. No se comparan como números.

    3. 12 < "2" -> false
       Como uno de los valores es un número, "2" se convierte en 2.
       La comparación 12 < 2 es falsa.

    4. "12" < "2" -> true
       Los dos valores son cadenas. Al comparar sus primeros
       caracteres, "1" es menor que "2", por eso da true.

    5. "12" > 4 -> true
       Como uno de los valores es un número, "12" se convierte en 12.
       La comparación 12 > 4 es verdadera.

    6. "carpintero" > "pescador" -> false
       Se comparan las cadenas carácter a carácter. Como "c" es
       menor que "p", "carpintero" no es mayor que "pescador".

    7. null == "" -> false
       Con ==, null solo es igual a null o undefined.
       La cadena vacía no es ninguno de esos valores, por eso da false.

********************************************************************

*/
