/*************************************************************
 
16.	HORAS 5 MINUTOS. Crea una función horas5Minutos(). Esta 
función hace lo mismo que el ejercicio anterior, pero en este 
caso el intervalo será de 5 minutos. Los minutos se deben escribir 
siempre con 2 cifras. Ej.: 9:00, 9:05, 9:10, …

 ************************************************************/

"use strict";

function horas5minutos(){

    for(let i=9; i<22; i++){

        for(let j=0; j<60; j+=5){

            if(j<10){
                console.log(`${i}:0${j}`);
            }
            else{
                console.log(`${i}:${j}`);
            }

        }

    }

}



function horas5minutos2(){

    let minutos=0;

    for(let i=9; i<22; i++){

        for(let j=0; j<60; j+=5){

            minutos=String(j).padStart(2,0);
            console.log(`${i}:${minutos}`);

        }

    }

}

horas5minutos2();