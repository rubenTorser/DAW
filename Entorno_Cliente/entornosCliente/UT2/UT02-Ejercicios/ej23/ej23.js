/*************************************************************

23. BINARIO. Haz una función binario(n) que devuelva una cadena
con el número en binario. Si n es incorrecto (solo se permiten
valores enteros no negativos), devuelve una cadena vacía.
Realiza divisiones sucesivas entre 2, anotando los restos y
escribiéndolos en orden inverso. Para n igual a 0, devuelve "0".

 ************************************************************/

"use strict";

function binario(n){

    if(!Number.isInteger(n) || n<0){
        return "";
    }

    if(n==0){
        return "0";
    }

    let resultado="";

    while(n>0){

        let resto=n%2;

        // Colocamos cada resto delante de los anteriores.
        resultado=resto+resultado;
        n=Math.floor(n/2);

    }

    return resultado;

}

console.log(binario(10)); // "1010"
console.log(binario(25)); // "11001"
console.log(binario(1)); // "1"
console.log(binario(0)); // "0"
console.log(binario(-1)); // "" (cadena vacía)
console.log(binario(2.5)); // "" (cadena vacía)
console.log(binario("10")); // "" (cadena vacía)
