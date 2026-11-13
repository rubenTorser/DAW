/*17. Crea una función obtenerFechaHace(fecha, días) que devuelva el día del mes que 
era en esa fecha, descontando el número de días indicados. 
Por ejemplo, si hoy es 20, entonces obtenerFechaHace(new Date(), 1) debería 
ser 19 y obtenerFechaHace(new Date(), 2) debería ser 18. 
Debe funcionar para días=365 o más. 
No se debe modificar la fecha que se pasa como parámetro. 
Ejemplos: 
let date = new Date(2015, 0, 2); 
alert( obtenerFechaHace(date, 1) ); // 1, (1 Jan 2015) 
alert( obtenerFechaHace(date, 2) ); // 31, (31 Dec 2014) 
alert( obtenerFechaHace(date, 365) ); // 2, (2 Jan 2014)*/


function obtenerFechaHace(fecha, dias){

    let fechaCopia=new Date(fecha);

    let fechaMilis=fechaCopia.getTime();

    let diasMilis=dias*24*60*60*1000;

    let fechaDescontada=new Date(fechaMilis-diasMilis);

    console.log(fechaDescontada.getDate());

}

let date = new Date(2015, 0, 2);

obtenerFechaHace(date, 1);
obtenerFechaHace(date, 2);
obtenerFechaHace(date, 365);