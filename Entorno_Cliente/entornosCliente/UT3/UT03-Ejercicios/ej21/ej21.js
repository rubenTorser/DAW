/**********************************************************

21.	Crea una función cuantoFalta( fecha ) que devuelva el 
    número de días (número entero) que faltan desde hoy 
    hasta la fecha que se pasa como parámetro.

***********************************************************/

"use strict";

function cuantoFalta(fecha) {

    const fechaActual = new Date();



    if (fecha < fechaActual) {
        return 0;
    }
    else {
        let diferencia = (fecha - fechaActual) / (1000 * 60 * 60 * 24);
        if (diferencia > 0 && diferencia < 1) {
            return 1;
        }
        else {
            return Math.ceil(diferencia);
        }
    }

}

console.log(cuantoFalta(new Date(2024, 11, 25))); // Devuelve 0 ya que la fecha ya pasó
console.log(cuantoFalta(new Date(2026, 9, 18))); // Devuelve el número de días que faltan hasta el 1 de enero de 2027