/*************************************************************

25. (Operadores básicos, aritméticos) ¿Cuál será el resultado
de las siguientes expresiones?

4 * "4 j"
2 + 3 + "px"
false + true
null + 1
undefined + 1

 ************************************************************/

"use strict";

console.log(4 * "4 j"); // NaN
console.log(2 + 3 + "px"); // "5px"
console.log(false + true); // 1
console.log(null + 1); // 1
console.log(undefined + 1); // NaN

/*

*****************************RESPUESTAS*****************************

    1. 4 * "4 j" -> NaN
       La multiplicación intenta convertir "4 j" en un número.
       Como la cadena completa no es un número válido, obtiene NaN.
       Al multiplicar 4 por NaN, el resultado sigue siendo NaN.

    2. 2 + 3 + "px" -> "5px"
       Primero se suman 2 y 3, dando 5. Después, como "px" es texto,
       el operador + concatena y produce la cadena "5px".

    3. false + true -> 1
       La suma convierte false en 0 y true en 1.
       Por tanto, 0 + 1 = 1.

    4. null + 1 -> 1
       La suma convierte null en 0, así que 0 + 1 = 1.

    5. undefined + 1 -> NaN
       La conversión numérica de undefined da NaN.
       Al sumarle 1, el resultado sigue siendo NaN.

********************************************************************

*/
