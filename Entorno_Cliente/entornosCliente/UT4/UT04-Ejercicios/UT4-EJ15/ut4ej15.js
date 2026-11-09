/******************************************************************************
15.	Iterables. Crea una función que reciba como parámetro una cadena y devuelva 
otra cadena formada por las letras de la cadena inicial ordenadas alfabéticamente.
Hay que utilizar los métodos Array.from, el método sort de los arrays y el método 
join de los arrays.
*******************************************************************************/

function ordenarLetras(cadena) {

    let cadenaSinMayus = cadena.toLowerCase();

    let arrayCadena = Array.from(cadenaSinMayus);

    let arrayOrdenado = arrayCadena.sort(
        function (a, b) {
        return a.localeCompare(b);
        }
    );

    let arraySinEspacios = arrayOrdenado.filter(letra => letra !== " ");

    let cadenaOrdenada = arraySinEspacios.join("");

    return cadenaOrdenada;

}

console.log(ordenarLetras("Hola soy Rubén"));