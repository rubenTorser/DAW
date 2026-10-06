/********************************************************************************

11.	Crea una función numeros( n ) que recibe un número, n, y muestre por consola:
    •	El número con 4 decimales.
    •	El número en binario.
    •	El número en octal.
    •	El número en hexadecimal.
    Ejemplo: si metes 50, deberías obtener: 50.0000 / 00110010 / 62 / 32.

********************************************************************************/

"use strict";

function numeros(n) {

    let decimales = n.toFixed(4);
    let binario = n.toString(2);
    let octal = n.toString(8);
    let hexadecimal = n.toString(16);

    console.log(decimales);
    console.log(binario);
    console.log(octal);
    console.log(hexadecimal);
}

numeros(50);