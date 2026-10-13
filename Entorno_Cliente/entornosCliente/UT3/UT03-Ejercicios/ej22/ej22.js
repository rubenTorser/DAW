/**********************************************************

22.	Crea una función faltaCumple( dia, mes) que recibe el 
    día y mes de tu cumpleaños y muestra por pantalla el 
    tiempo que falta para tu cumpleaños, expresado con días
    y horas.
    Además, que muestre todos los años en que tu cumpleaños
    va a caer en domingo, desde el próximo cumpleaños hasta
    el 2100.

**********************************************************/

"use strict";

function faltaCumple(dia, mes) {

    let fechaActual = new Date();
    let annoActual = fechaActual.getFullYear();
    let fechaCumple = new Date(annoActual, mes - 1, dia);

    if (fechaCumple < fechaActual) {
        fechaCumple.setFullYear(annoActual + 1);
    }

    let diferencia = fechaCumple - fechaActual;
    let dias = Math.floor((((diferencia / 1000) / 60) / 60) / 24);
    let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    console.log(`Faltan ${dias} días y ${horas} horas para tu cumpleaños.`);

    console.log(`Los años en que tu cumpleaños caerá en domingo desde ${fechaCumple.getFullYear()} hasta 2100 son:`);
    for (let i = fechaCumple.getFullYear(); i <= 2100; i++) {
        let fechaAnno = new Date(i, mes - 1, dia);
        if (fechaAnno.getDay() === 0) {
            console.log(i);
        }
    }
}

faltaCumple(10, 2); // Cambia los valores a tu día y mes de cumpleaños