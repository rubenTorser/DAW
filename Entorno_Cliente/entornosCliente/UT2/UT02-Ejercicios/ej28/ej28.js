/*************************************************************

28. Reescribe la siguiente sentencia utilizando el operador switch:

if (curso == 1) {
    console.log("Estás en primero")
} elseif (curso == 2) {
    console.log("Estás en segundo");
} else {
    console.log("Curso erróneo");
}

 ************************************************************/

"use strict";

// Prueba también con 2 para segundo y con 3 para un curso erróneo.
let curso=1;

// Convertimos el curso a número para aceptar también los textos "1" y "2".
switch(Number(curso)){

    case 1:
        console.log("Estás en primero");
        // break sale del switch para no ejecutar el siguiente caso.
        break;

    case 2:
        console.log("Estás en segundo");
        break;

    default:
        // default se ejecuta cuando no coincide ningún case.
        console.log("Curso erróneo");

}

/**************************RESPUESTAS**************************

El switch compara el curso convertido a número con cada case
y ejecuta el que coincide. El if original usa ==, así que también
acepta los textos "1" y "2". Number permite conservar esas respuestas
al pasar a switch, que compara sin convertir los tipos por sí solo.
Si el curso no es 1 ni 2, se ejecuta default.

El código original escribe elseif, pero en JavaScript se escribe
else if. Al reescribir la sentencia con switch usamos case para
las opciones y default para el resto.

 ************************************************************/
