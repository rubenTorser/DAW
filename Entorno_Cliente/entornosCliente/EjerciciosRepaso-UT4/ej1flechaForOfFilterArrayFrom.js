/*********************************************************************
1.	CONTAR LETRAS. Escribe una función que recibe como parámetro una 
cadena y una letra, y devuelve el número de veces que aparece la letra 
en la cadena. 
Escríbela de tres modos: como función declarada, como expresión de 
función, y como función flecha.
*********************************************************************/


/*******************************************
            FUNCIÓN DECLARADA
*******************************************/
function contarLetras1(cadena, letra){

    let contador=0;


    for (const letr of cadena){

        if(letr == letra){
            contador++;
        }

    }

    return contador;

}

console.log(contarLetras1("hola","a"));



/*******************************************
            EXPRESIÓN FUNCIÓN
*******************************************/
let contarLetras2 = function (cadena, letra){

    let contador = 0;

    for(let i=0; i<cadena.length; i++){

        if(cadena[i]==letra){
            contador++;
        }

    }

    return contador;
}


console.log(contarLetras2("hala","a"));



/*******************************************
            FUNCIÓN FLECHA
*******************************************/
let contarLetras3 = (cadena, letra) => 
    Array.from(cadena).filter(caracter => caracter === letra).length;

    
console.log(contarLetras3("jajajajaja","a"));