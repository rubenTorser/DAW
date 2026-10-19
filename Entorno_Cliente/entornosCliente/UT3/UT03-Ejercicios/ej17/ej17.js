/***********************************************************************************

17.	Crea una función obtenerFechaHace(fecha, días) que devuelva el día del mes que 
    era en esa fecha, descontando el número de días indicados.
    Por ejemplo, si hoy es 20, entonces obtenerFechaHace(new Date(), 1) debería ser 
    19 y obtenerFechaHace(new Date(), 2) debería ser 18.
    Debe funcionar para días=365 o más.
    No se debe modificar la fecha que se pasa como parámetro.

    Ejemplos:
    let date = new Date(2015, 0, 2);
    alert( obtenerFechaHace(date, 1) ); // 1, (1 Jan 2015)
    alert( obtenerFechaHace(date, 2) ); // 31, (31 Dec 2014)
    alert( obtenerFechaHace(date, 365) ); // 2, (2 Jan 2014)


***********************************************************************************/

"use strict";

let date = new Date(2015, 0, 2);

function obtenerFechaHace(fecha, dias) {

    // Crear una nueva fecha para no modificar la original
    const copiaFecha = new Date(fecha);

    copiaFecha.setDate(copiaFecha.getDate() - dias);

    return copiaFecha.getDate();

}

console.log(obtenerFechaHace(date, 1)); // Devuelve 1 (1 Jan 2015)
console.log(obtenerFechaHace(date, 2)); // Devuelve 31 (31 Dec 2014)
console.log(obtenerFechaHace(date, 365)); // Devuelve 2 (2 Jan 2014)
console.log(obtenerFechaHace(date, 2125)); // Devuelve 9 (9 Jan 2009)

console.log(date.toLocaleDateString()); // Devuelve 2/1/2015, la fecha original no se ha modificado