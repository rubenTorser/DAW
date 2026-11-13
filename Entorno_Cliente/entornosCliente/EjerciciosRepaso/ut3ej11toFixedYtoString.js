/*11. Crea una función numeros( n ) que recibe un número, n, y muestre por consola: 
• El número con 4 decimales. 
• El número en binario. 
• El número en octal. 
• El número en hexadecimal. 
Ejemplo: si metes 50, deberías obtener: 50.0000 / 00110010 / 62 / 32. */


function numeros(n){

    let cuatroDigitos=n.toFixed(4);
    let binario=n.toString(2);
    let octal=n.toString(8);
    let hexadecimal=n.toString(16);

    console.log(`${cuatroDigitos} / ${binario} / ${octal} / ${hexadecimal}`);

}

numeros(50);