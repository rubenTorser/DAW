/**********************************************************

21.	Crea una función cuantoFalta( fecha ) que devuelva el 
    número de días (número entero) que faltan desde hoy 
    hasta la fecha que se pasa como parámetro.

***********************************************************/

"use strict";

function cuantoFalta(fecha) {

    let fechaActual = new Date();

    if (fecha < fechaActual) {
        return 0;
    }
    else {
        let diferencia = fecha - fechaActual;
        return Math.floor(diferencia / (1000 * 60 * 60 * 24));
    }

}

console.log(cuantoFalta(new Date(2024, 11, 25))); // Devuelve 0 ya que la fecha ya pasó
console.log(cuantoFalta(new Date(2027, 0, 1))); // Devuelve el número de días que faltan hasta el 1 de enero de 2027