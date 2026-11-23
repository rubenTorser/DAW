/*
30.	Función que devuelve resultados
Crea una función que recibe cualquier número de parámetros numéricos.
Esta función debe devolver un objeto con dos propiedades: el valor
máximo y el mínimo de los parámetros recibidos. Para ello, utilizará 
las funciones Math.max() y Math.min().
*/

// Rest (...numeros): agrupa todos los parámetros recibidos en un array,
// así la función admite cualquier cantidad de números.
function maximoMinimo(...numeros) {

    // Spread (...numeros): expande el array en valores sueltos, porque
    // Math.max() y Math.min() no aceptan un array directamente.
    return {
        maximo: Math.max(...numeros),
        minimo: Math.min(...numeros)
    };

}


// 1. Llamada con parámetros sueltos
console.log(maximoMinimo(5, 12, -3, 8, 0)); // { maximo: 12, minimo: -3 }

// 2. Asignación desestructurante: extraemos las dos propiedades del objeto a la vez
let { maximo, minimo } = maximoMinimo(7, 2, 19, 4);
console.log(`Máximo: ${maximo}, mínimo: ${minimo}`); // Máximo: 19, mínimo: 2

// 3. Spread en la llamada: pasamos un array como parámetros sueltos
//    y desestructuramos renombrando las variables
let notas = [6.5, 9, 4.25, 7, 10, 3];
let { maximo: notaMax, minimo: notaMin } = maximoMinimo(...notas);
console.log(`Nota más alta: ${notaMax}, nota más baja: ${notaMin}`); // Nota más alta: 10, nota más baja: 3