/*******************************************************************

4.	Crea una función extraerValorDolares(str) que extraiga el valor 
    numérico de dicho string y lo devuelva. Suponemos que str es una 
    cadena que contiene el importe en este formato: “$120”, es decir: 
    el signo de dólar va primero y luego el número.

*******************************************************************/
"use strict";

function extraerValorDolares(str) {

    return parseFloat(str.substring(1));

}

console.log(extraerValorDolares("$120")); // 120