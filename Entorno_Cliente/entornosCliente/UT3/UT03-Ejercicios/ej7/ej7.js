/*******************************************************************

7.	Crea una función detectaErrorCritico( cadena ) que recibe una 
    cadena y devuelve true si la cadena empieza por la palabra 
    "ERROR" o termina en la palabra "CRITICO". El código debe ser 
    insensible a mayúsculas y minúsculas. En cualquier otro caso 
    devolverá false.

*******************************************************************/

"use strict";

function detectaErrorCritico(cadena) {

    let cadenaMinusculas = cadena.toLowerCase();

    if (cadenaMinusculas.startsWith("error") || cadenaMinusculas.endsWith("critico")) {
        return true;
    } else {
        return false;
    }

}

console.log(detectaErrorCritico("ERROR: Se ha producido un fallo")); // true
console.log(detectaErrorCritico("Se ha producido un fallo CRITICO")); // true
console.log(detectaErrorCritico("Se ha producido un fallo")); // false