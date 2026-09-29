"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

/*

*****************************RESPUESTAS*****************************

    -6.	¿Cuáles son los resultados de estas expresiones?

    El operador + concatena si uno de los operandos es una cadena de texto.
    Si no hay cadenas, realiza una suma numérica. Los operadores -, * y /
    convierten sus operandos a números. Los + y - consecutivos de estos
    ejemplos se agrupan de izquierda a derecha.

    1. "" + 1 + 0 -> "10"
       Primero, "" + 1 concatena y produce la cadena "1". Después, "1" + 0
       vuelve a concatenar y produce "10", que es texto, no el número 10.

    2. "" - 1 + 0 -> -1
       La resta convierte la cadena vacía "" en 0: 0 - 1 = -1.
       Después se suman dos números: -1 + 0 = -1.

    3. true + false -> 1
       No hay cadenas, así que + convierte los booleanos a números:
       true se convierte en 1 y false en 0. Por tanto, 1 + 0 = 1.

    4. 6 / "3" -> 2
       La división convierte la cadena "3" en el número 3: 6 / 3 = 2.

    5. "2" * "3" -> 6
       La multiplicación convierte ambas cadenas a números: 2 * 3 = 6.

    6. 4 + 5 + "px" -> "9px"
       Primero se suman los números 4 y 5, dando 9. Después, 9 + "px"
       concatena porque uno de los operandos es texto y produce "9px".

    7. "$" + 4 + 5 -> "$45"
       Primero, "$" + 4 produce la cadena "$4". Después, "$4" + 5
       concatena de nuevo y produce "$45". El 4 y el 5 no llegan a sumarse.

    8. "4" - 2 -> 2
       La resta convierte la cadena "4" en el número 4: 4 - 2 = 2.

    9. "4px" - 2 -> NaN
       La cadena completa "4px" no representa un número válido, por lo que
       su conversión numérica da NaN (Not a Number). Restarle 2 sigue dando
       NaN; la resta no extrae el 4 ni elimina las letras automáticamente.

    10. "  -9  " + 5 -> "  -9  5"
        Como hay una cadena, + concatena el 5 al final del texto.
        Se conservan los dos espacios anteriores y los dos posteriores
        a -9; estos últimos quedan entre el 9 y el 5.

    11. "  -9  " - 5 -> -14
        La resta convierte la cadena a número. En esta conversión se
        ignoran los espacios de los extremos, por lo que se obtiene -9.
        Después se calcula -9 - 5 = -14.

    12. null + 1 -> 1
        No hay cadenas, así que la suma convierte null en el número 0.
        Por tanto, 0 + 1 = 1.

    13. undefined + 1 -> NaN
        La conversión numérica de undefined produce NaN, no 0.
        Al sumar 1 a NaN, el resultado sigue siendo NaN.

    14. " \t \n" - 2 -> -2
        La cadena contiene solo espacios, tabulaciones y saltos de línea.
        La conversión numérica de esta cadena da -2.

********************************************************************

*/
