/*************************************************************

31. Rescribe el código anterior utilizando un while.

Código anterior:
for (n = 1; n < 100; n++) {
    if (n % 3 == 0) continue;
    console.log(n);
}

 ************************************************************/

"use strict";

let n=1;

while(n<100){

    if(n % 3 == 0){

        // continue salta el n++ del final, así que aumentamos n aquí.
        // Si no lo hiciéramos, el bucle se quedaría siempre en el 3.
        n++;
        continue;

    }

    console.log(n);
    n++;

}

/*

*****************************RESPUESTAS*****************************

    El resultado es el mismo que con el for: los números del 1 al 99,
    excepto los múltiplos de 3. Se muestran 66 números y el último es 98.

    En un while tenemos que aumentar n nosotros mismos. Lo hacemos
    antes de continue cuando es múltiplo de 3 y después de mostrarlo
    en los demás casos. Así avanzamos una vez en cada vuelta.

********************************************************************

*/
