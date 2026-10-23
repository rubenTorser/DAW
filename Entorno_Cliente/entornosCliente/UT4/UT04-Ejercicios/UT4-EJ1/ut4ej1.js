/****************************************************************************

1.	CONTAR LETRAS. Escribe una función que recibe como parámetro una cadena 
    y una letra, y devuelve el número de veces que aparece la letra en la cadena. 
    Escríbela de tres modos: como función declarada, como expresión de función, 
    y como función flecha.

****************************************************************************/


function contarLetras(cadena, letra) {

    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {

        let cadenaMinuscula = cadena.toLowerCase();

        if (cadenaMinuscula[i] == letra) {
            contador++;
        }

    }

    return contador;

}

let contadorDeA = contarLetras("Hola Ana", "a");

console.log(contadorDeA);


let contarLetras2 = function (cadena, letra) {

    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {

        let cadenaMinuscula = cadena.toLowerCase();

        if (cadenaMinuscula[i] == letra) {
            contador++;
        }

    }

    return contador;

}

console.log(contarLetras2("JEJEJEJEJE", "e"));


let contarLetras3 = (cadena, letra) => {

    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {

        let cadenaMinuscula = cadena.toLowerCase();

        if (cadenaMinuscula[i] == letra) {
            contador++;
        }

    }

    return contador;

}


console.log(contarLetras3("JAJAJAJAJAJAJAJAJAJ", "J"));

