/*************************************************************

30. (Sentencias: bucles) ¿Qué escribirá en consola el siguiente
código? Explícalo.

for (n = 1; n < 100; n++) {
    if (n % 3 == 0) continue;
    console.log(n);
}

 ************************************************************/

"use strict";

// Declaramos n con let para que sea una variable del bucle.
for(let n=1; n<100; n++){

    // Si el resto al dividir entre 3 es 0, n es múltiplo de 3.
    if(n % 3 == 0){
        continue;
    }

    console.log(n);

}

/*

*****************************RESPUESTAS*****************************

    Se muestran los números del 1 al 99, excepto los múltiplos de 3.
    Cada número aparece en una línea: 1, 2, 4, 5, 7, 8, ... 97, 98.
    En total se muestran 66 números y el último es 98.

    El operador % devuelve el resto de una división. Si n % 3 es 0,
    el número es múltiplo de 3 y se ejecuta continue.

    continue salta el resto de esa vuelta, así que no se ejecuta
    console.log(n). El for sí hace n++ antes de la siguiente vuelta.

    En esta solución declaramos n con let. En el código original,
    si n no se había declarado, n = 1 crearía una variable global
    al ejecutarlo sin modo estricto. Con "use strict" daría un error.

********************************************************************

*/
