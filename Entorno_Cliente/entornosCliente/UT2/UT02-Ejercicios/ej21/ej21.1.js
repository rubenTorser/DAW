/*************************************************************

21. FACTORIAL. Crea una función factorial(n) que devuelva el
factorial de n. Suponemos que n es un número entero mayor o
igual a 0 (no hay que comprobarlo).
El factorial es el producto de los enteros positivos desde
1 hasta n. Por ejemplo, 5! = 120 y 0! = 1.

 ************************************************************/

"use strict";

function factorial(n){

    // Empezamos en 1 para que el factorial de 0 también sea 1.
    let resultado=1;

    for(let i=1; i<=n; i++){
        resultado*=i;
    }

    return resultado;

}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(7)); // 5040
