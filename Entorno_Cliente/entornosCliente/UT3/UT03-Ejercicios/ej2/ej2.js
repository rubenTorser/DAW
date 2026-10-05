/*******************************************************************

2.	Escribe una función comprobarSpam(str) que devuelva true si str 
    contiene ‘gratis’ o ‘XXX’, de lo contrario false.

*******************************************************************/

"use strict";

function comprobarSpam(str) {

    let boolean = false;

    str = str.toLowerCase();

    if (str.includes("gratis") || str.includes("xxx")) {
        boolean = true;
    }

    return boolean;

}

let palabra = "Este producto es Gratis";

console.log(comprobarSpam(palabra));