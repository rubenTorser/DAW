/*******************************************************************

6.	Crea una función contarLetra(cad, letra) que devuelva el número 
    de veces que aparece la letra en la cadena cad. Devolvera 0 si 
    no aparece ninguna vez.

*******************************************************************/

"use strict";

function contarLetra(cad, letra) {

    let contador = 0;

    for (let i = 0; i < cad.length; i++) {

        if (cad[i] === letra) {
            contador++;
        }
    }

    return console.log(contador);
}


contarLetra("Hola mundo", "o"); // 2