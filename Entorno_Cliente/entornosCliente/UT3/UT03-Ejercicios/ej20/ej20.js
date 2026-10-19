/**************************************************************

20.	Crea una función getSecondsToTomorrow() que devuelva la cantidad de segundos que faltan para el día de mañana.
Por ejemplo, si ahora son las 23:00, entonces:
getSecondsToTomorrow() == 3600

***************************************************************/

"use strict";

function getSecondsToTomorrow() {

    const fechaActual = new Date();

    let fechaMannana = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + 1);

    let segundosRestantes = Math.floor((fechaMannana - fechaActual) / 1000);

    return segundosRestantes;
}

console.log(getSecondsToTomorrow()); // Devuelve la cantidad de segundos que faltan para el día de mañana