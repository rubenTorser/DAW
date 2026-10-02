/*******************************************************************

9.	Crea una función palindromo(cadena) que devuelva true si la 
    cadena de texto es un palíndromo, es decir, si se lee de la misma 
    forma desde la izquierda y desde la derecha. 
    Ejemplos de palíndromos: “Yo hago yoga hoy”, “Ana lava lana”, “reconocer”.
    Tener en cuenta: varios espacios en blanco se consideran como uno sólo; 
    las mayúsculas y minúsculas se consideran iguales.

*******************************************************************/

"use strict";

function palindromo(cadena) {

    let cadenaInvertida = "";

    cadena = cadena.toLowerCase();

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " ") {
            cadena = cadena.replace(cadena[i], "");
        }
    }

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }

    return console.log(cadena === cadenaInvertida);

}

palindromo("Yo hago yoga hoy"); // true
palindromo("Ana lava lana"); // true
palindromo("recono  cerse"); // true