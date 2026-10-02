/*******************************************************************

2.	Escribe una función comprobarSpam(str) que devuelva true si str 
    contiene ‘gratis’ o ‘XXX’, de lo contrario false.

*******************************************************************/

"use strict";

function comprobarSpam(str) {

    let boolean = false;

    if (str.includes("gratis") || str.includes("XXX")) {
        boolean = true;
    }

    return boolean;

}


let str = "Este producto es gratis";

console.log(comprobarSpam(str));