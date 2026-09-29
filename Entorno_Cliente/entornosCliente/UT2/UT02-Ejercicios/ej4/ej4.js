let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?


/*

*****************************RESPUESTAS*****************************

    -4.	¿Cuáles son los valores finales de todas las variables a, 
        b, c y d después del código a continuación?
        a = 2, b = 2, c = 2, d = 1
        'd' es 1 porque el operador de incremento postfijo devuelve 
        el valor original de la variable antes de incrementarla.

********************************************************************

*/

console.log(a, b, c, d);