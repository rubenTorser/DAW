/*************************************************************

22. FIBONACCI. Haz una función fibonacci(n) que devuelva una
cadena con los n primeros números de la serie de Fibonacci
separados por espacios en blanco. Si n es incorrecto (solo se
permiten valores enteros no negativos), devuelve una cadena
vacía. La serie comienza por 0, 1, 1, 2, 3, 5, 8...

 ************************************************************/

"use strict";

function fibonacci(n){

    if(!Number.isInteger(n) || n<0){
        return "";
    }

    let actual=0;
    let siguiente=1;
    let resultado="";

    for(let i=0; i<n; i++){

        // Añadimos un espacio solo entre los números.
        if(i>0){
            resultado+=" ";
        }

        resultado+=actual;

        // Cada término es la suma de los dos anteriores.
        let suma=actual+siguiente;
        actual=siguiente;
        siguiente=suma;

    }

    return resultado;

}

console.log(fibonacci(7)); // "0 1 1 2 3 5 8"
console.log(fibonacci(2)); // "0 1"
console.log(fibonacci(1)); // "0"
console.log(fibonacci(0)); // "" (cadena vacía)
console.log(fibonacci(-1)); // "" (cadena vacía)
console.log(fibonacci(2.5)); // "" (cadena vacía)
console.log(fibonacci("5")); // "" (cadena vacía)
