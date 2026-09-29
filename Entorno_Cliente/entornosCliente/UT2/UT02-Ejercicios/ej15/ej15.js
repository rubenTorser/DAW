/*******************************************************

15.	HORAS 30 MINUTOS. Crea una función horas30Minutos(). 
Esta función escribirá por consola un listado de horas 
que vayan desde las 9 hasta las 21:30 de 30 minutos en 
30 minutos. Ej.: 9:00, 9:30, ….

 ******************************************************/

"use strict";

function horas30Minutos(){

    for(let i=9; i<=21; i++){
            
            console.log(`${i}:00`);
            console.log(`${i}:30`);

    }

}

horas30Minutos();