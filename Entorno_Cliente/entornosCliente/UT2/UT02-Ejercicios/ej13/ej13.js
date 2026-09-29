/***********************************************
 
13.	TABLA MULTIPLICAR. Crea una función 
tablaMultiplicar(n) que recibe un parámetro, n. 
La función escribirá en la consola la tabla de 
multiplicar de n de 1 a 10. Si n no es un número, 
escribirá un texto indicando el error.

 **********************************************/

let resultado;

function tablaMultiplicar(n){

    for(let i=0; i <= 10; i++ ){

        resultado = i * n;

        console.log( n + " * " + i + " = " + resultado);

    }

}


let numero = Number(prompt("Introduzca un número: ", 0));

if(typeof numero !== "number" || Number.isNaN(numero)){

    console.log("El valor introducido no es un número.");

}
else{
    tablaMultiplicar(numero);
}