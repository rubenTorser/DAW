/*************************************************************

20. PRIMOS. Crea una función primos(n) que muestra todos los
números primos entre 1 y n. Suponemos que n es un número entero
mayor que 1 (no hay que comprobarlo).
Un número entero mayor que 1 es llamado primo si sólo puede
dividirse sin resto entre 1 y él mismo.
Ej. Para n = 10 el resultado será 2, 3, 5, 7.

 ************************************************************/

"use strict";

function primos(n){

    // El 1 no es primo, por eso empezamos en el 2.
    for(let i=2; i<=n; i++){

        let esPrimo=true;

        for(let j=2; j<i && esPrimo; j++){

            if(i % j == 0){

                esPrimo=false;
                
            }

        }

        if(esPrimo){
            console.log(i);
        }

    }

}

primos(10); // 2, 3, 5, 7
primos(2); // 2
primos(13); // 2, 3, 5, 7, 11, 13
