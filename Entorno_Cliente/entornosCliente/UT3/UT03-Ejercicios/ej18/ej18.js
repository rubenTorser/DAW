/***********************************************************************************

18.	Escribe una función ultimoDiaMes(anno, mes) que devuelva el último día del 
mes dado. A veces es 30, 31 o incluso 28/29 para febrero.

Parámetros:
anno– el año en formato de cuatro dígitos, por ejemplo 2012.
mes – el mes, de 0 a 11.

Por ejemplo, ultimoDiaDelMes(2012, 1) = 29 (febrero, año bisiesto).

***********************************************************************************/

"use strict";

function ultimoDiaMes(anno, mes) {

    // Crear una nueva fecha con el año y mes proporcionados, y establecer el día en 1
    // Esto nos dará el último día del mes anterior, que es el último día del mes deseado
    let fecha = new Date(anno, mes + 1, 0);

    return fecha.getDate();

}

console.log(ultimoDiaMes(2026, 9)); // Devuelve 31 (octubre)
console.log(ultimoDiaMes(2012, 1)); // Devuelve 29 (febrero, año bisiesto)