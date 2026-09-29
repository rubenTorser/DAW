/**************************************************************
 
17.	PEDIR NÚMERO MAYOR QUE 100. Crea una función 
pedirNumeroMayor100(). Esta función  solicita un número mayor 
que 100. Si el usuario ingresa otro número – pídele que ingrese 
un valor de nuevo.

El bucle debe pedir un número hasta que el usuario ingrese un 
número mayor que 100 o bien cancele la entrada/ingrese una línea vacía. 
La función devolverá el número introducido por el usuario o null si ha 
cancelado la entrada/introducido una línea vacía.

Aquí podemos asumir que el usuario sólo ingresará números. 
No hay necesidad de implementar un manejo especial para entradas 
no numéricas en esta tarea.
Esta función hay que probarla en el navegador, ya que utilizaremos 
la sentencia prompt().

 *************************************************************/

"use strict";

function pedirNumeroMayor100(){

    let numero;

    // do...while pide el número al menos una vez.
    do{

        numero = prompt("Introduce un número mayor que 100: ", "");

        // Comprobamos la cancelación antes de convertir el texto a número.
        // null es el valor que devuelve prompt al cancelar, no el texto "null".
        if(numero === null || numero === ""){
            return null;
        }

        numero = Number(numero);

    }while(numero <= 100);

    return numero;

}

// Prueba 100 y después 101: debe volver a pedir el número y devolver 101.
// Al recargar, prueba a cancelar o aceptar sin escribir: debe devolver null.
let numeroIntroducido = pedirNumeroMayor100();

console.log(numeroIntroducido);

if(numeroIntroducido === null){
    alert("Cancelado.");
}
else{
    alert(`El número introducido es: ${numeroIntroducido}`);

}
