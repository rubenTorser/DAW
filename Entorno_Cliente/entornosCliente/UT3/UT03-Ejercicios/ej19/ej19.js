/**************************************************************

19.	Escribe una función getSecondsToday() que devuelva la 
    cantidad de segundos transcurridos desde el comienzo del día.
    Por ejemplo, si en este momento fueran las 10:00 am, sin 
    horario de verano, entonces:
    getSecondsToday() == 36000 /

***************************************************************/

"use strict";

function getSecondsToday() {

    let fechaActual = new Date();
    let fechaInicioDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());

    let segundosTranscurridos = Math.floor((fechaActual - fechaInicioDia) / 1000);

    return segundosTranscurridos;
}

console.log(getSecondsToday()); // Devuelve la cantidad de segundos transcurridos desde el comienzo del día