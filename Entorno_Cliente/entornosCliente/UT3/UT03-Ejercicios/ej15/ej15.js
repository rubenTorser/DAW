/**********************************************************************
 
15.	Crea una función diaSemana( fecha ) que devuelva una cadena con 
    el día de la semana de la fecha (“lunes”, “martes”, etc.).

**********************************************************************/

"use strict";

function diaSemana(fecha) {

    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    return dias[fecha.getDay()];

}

console.log(diaSemana(new Date(2026, 5, 6))); // Devuelve "jueves"