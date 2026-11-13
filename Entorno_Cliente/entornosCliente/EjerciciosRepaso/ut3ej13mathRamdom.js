/*13. Crea una función bonoloto() que imprima por consola los números ganadores de la 
bonoloto: son 6 números entre 1 y 49 (combinación ganadora), un complementario, 
también entre 1 y 49, y el reintegro entre el 0 y el 9. Los números de la combinación 
ganadora y el complementario tienen que ser distintos. 
Se mostrarán al usuario en el siguiente orden: combinación ganadora, complementario, 
reintegro. 
Para comprobar que no se repiten hay que utilizar strings o arrays. */

function bonoloto(){

    let numeros=[];

    // 6 de la combinación ganadora + 1 complementario = 7 números distintos
    while(numeros.length<7){
        let numeroAleatorio=Math.floor(Math.random()*49+1);   // 1..49
        if(!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio);
        }
    }

    let reintegro=Math.floor(Math.random()*10);   // 0..9

    console.log(`Combinación ganadora: ${numeros.slice(0,6).join(', ')}`);
    console.log(`Complementario: ${numeros[6]}`);
    console.log(`Reintegro: ${reintegro}`);
}

bonoloto();


/*
• Math.floor(numero): redondea hacia abajo 
• Math.ceil(numero): redondea hacia arriba 
• Math.round(numero): redondea al entero más próximo 
• Math.trunc(numero): trunca la parte decimal; en el caso de números positivos devuelve el 
  mismo valor que Math.floor().
*/