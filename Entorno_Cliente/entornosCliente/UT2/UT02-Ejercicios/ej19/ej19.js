/*************************************************************

19. TABLERO. Crea una función tablero(numColumnas, numFilas)
que recibe como parámetros numColumnas y numFilas. La función
mostrará por consola un tablero de ajedrez con ese número de
filas y columnas, similar a este (7 columnas y 4 filas):

# # # #
 # # #
# # # #
 # # #

Si alguno de los valores es incorrecto (sólo se admiten enteros
mayores que 0), no mostrará nada por consola.

 ************************************************************/

"use strict";

function tablero(numColumnas, numFilas){

    if(!Number.isInteger(numColumnas) || numColumnas <= 0 ||
       !Number.isInteger(numFilas) || numFilas <= 0){
        return;
    }

    for(let i=0; i<numFilas; i++){

        let fila = "";

        for(let j=0; j<numColumnas; j++){

            // La suma de fila y columna alterna entre par e impar.
            // Así cambiamos el símbolo también al comenzar otra fila.
            if((i + j) % 2 === 0){
                fila += "#";
            }
            else{
                fila += " ";
            }

        }

        console.log(fila);

    }

}

tablero(7, 4); // Muestra el tablero del enunciado.
tablero(4, 3); // Muestra un tablero con un número par de columnas.
tablero(1, 1); // Muestra una única casilla: #.
tablero(0, 4); // No muestra nada.
tablero(4, -2); // No muestra nada.
tablero(2.5, 4); // No muestra nada.
tablero(4, 1.5); // No muestra nada.
tablero("7", 4); // No muestra nada: las columnas son texto.
tablero(7, "4"); // No muestra nada: las filas son texto.
