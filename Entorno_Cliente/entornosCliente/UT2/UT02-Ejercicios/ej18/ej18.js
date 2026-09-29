/*************************************************************

18. TRIÁNGULO. Crea una función triangulo(lineas) que recibe
un parámetro lineas. Si lineas es un número entero mayor que 0,
la función mostrará por consola varias líneas que formen un
triángulo como este (para lineas = 7):

#
##
###
####
#####
######
#######

Si el valor es incorrecto (sólo se admiten enteros mayores
que 0), no mostrará nada por consola.

*************************************************************/

"use strict";

function triangulo(lineas){

    // Number.isInteger comprueba que el valor sea un número entero.
    if(!Number.isInteger(lineas) || lineas <= 0){
        return;
    }

    let fila = "";

    for(let i=1; i<=lineas; i++){

        // Cada fila conserva los símbolos anteriores y añade uno más.
        fila += "#";
        console.log(fila);

    }

}

triangulo(7); // Muestra el triángulo del enunciado.
triangulo(3); // Muestra tres filas: #, ## y ###.
triangulo(1); // Muestra una sola fila: #.
triangulo(0); // No muestra nada.
triangulo(-2); // No muestra nada.
triangulo(2.5); // No muestra nada.
triangulo("3"); // No muestra nada: es texto, no un número.
