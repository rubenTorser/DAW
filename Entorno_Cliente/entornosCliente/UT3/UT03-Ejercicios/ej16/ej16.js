/****************************************************************************
 
16.	En España se cuentan los días de la semana a partir del lunes 
    (número 1), seguido del martes (número 2), hasta el domingo (número 7).

    Escribe una función diaSemanaLocal( fecha) que devuelva un número 
    que indica el día de la semana de la fecha teniendo en cuenta el 
    párrafo anterior.

****************************************************************************/

"use strict";

function diaSemanaLocal(fecha) {

    let dia = fecha.getDay();

    if (dia === 0) {
        return 7; // Domingo es el día 7 en España
    } else {
        return dia; // Lunes es 1, Martes es 2, ..., Sábado es 6
    }

}


console.log(diaSemanaLocal(new Date(2026, 5, 10))); // Devuelve 4 (jueves)