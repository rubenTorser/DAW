/******************************************************************

12.	Crea una función binario( n ) que recibe un número, n, y 
    devuelve una cadena con el número en binario.

******************************************************************/

"use strict";

function binario(n) {

    let binario = n.toString(2);

    return binario;

}


console.log(binario(50)); // 110010