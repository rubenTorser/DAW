/*************************************************************

14.	MÚLTIPLOS. Crea una función multiplos(). Esta función escribirá 
en la consola una línea con el texto “LISTADO DE NÚMEROS DEL 1 AL 100” y, 
a continuación, una fila para cada número del 1 al 100. Junto a cada número, 
escribirá el mensaje “es múltiplo de 2” y “es múltiplo de 3” SOLO junto a 
aquellos números en que se cumpla esta condición. En el caso de los números 
que sean múltiplos de ambos, se mostrarán “es múltiplo de 2 y es múltiplo de 3”.

LISTADO DE NÚMEROS DEL 1 AL 100 
1
2 es múltiplo de 2
3 es múltiplo de 3
4 es múltiplo de 2
5
6 es múltiplo de 2 y es múltiplo de 3
7
8 es múltiplo de 2
9 es múltiplo de 3
10 es múltiplo de 2

 ************************************************************/

"use strict";

function multiplos(){

    console.log("LISTADO DE NÚMEROS DEL 1 AL 100");

    for(let i=1; i<=100; i++){

        if ((i % 2 == 0) && (i % 3 == 0)){
            console.log(i + " es multiplo de 2 y es múltiplo de 3");
        }
        else if(i % 2 == 0){
            console.log(i + " es multiplo de 2");
        }
        else if (i % 3 == 0){
            console.log(i + " es multiplo de 3");
        }
        else{
            console.log(i);
        }

    }

}

multiplos();