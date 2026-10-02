/*******************************************************************

1.	Escribe una función inicialMay(str) que devuelva el string str 
    con el primer carácter en mayúscula.

*******************************************************************/

"use strict";

let str = "hola mundo";

function inicialMay(str) {

    str = str[0].toUpperCase() + str.slice(1);

    return str;

}

console.log(inicialMay(str));