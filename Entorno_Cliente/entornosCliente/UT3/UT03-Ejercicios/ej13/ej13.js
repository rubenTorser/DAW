/************************************************************************

13.	Crea una función bonoloto() que imprima por consola los números 
    ganadores de la bonoloto: son 6 números entre 1 y 49 
    (combinación ganadora), un complementario, también entre 1 y 49, 
    y el reintegro entre el 0 y el 9. Los números de la combinación 
    ganadora y el complementario tienen que ser distintos.
    
    Se mostrarán al usuario en el siguiente orden: 
    combinación ganadora, complementario, reintegro.

    Para comprobar que no se repiten hay que utilizar strings o arrays.

*************************************************************************/

"use strict";

function bonoloto() {

    let combinacionGanadora = [];
    let complementario = 0;
    let reintegro = 0;

    for (let i = 0; i < 6; i++) {

        let rand = 1 + Math.random() * (49);

        while (combinacionGanadora.includes(Math.floor(rand))) {
            rand = 1 + Math.random() * (49);
        }

        combinacionGanadora[i] = Math.floor(rand);

    }

    do {

        let rand = 1 + Math.random() * (49);
        complementario = Math.floor(rand);

    } while (combinacionGanadora.includes(complementario));

    reintegro = Math.floor(Math.random() * 10);

    console.log("Combinación ganadora:", combinacionGanadora);
    console.log("Complementario:", complementario);
    console.log("Reintegro:", reintegro);

}

bonoloto();