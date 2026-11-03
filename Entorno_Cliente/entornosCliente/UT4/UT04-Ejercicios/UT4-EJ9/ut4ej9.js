/*******************************************************************************

9.  Transformar border-left-width en borderLeftWidth
Escribe la función camelize(str) que convierta palabras separadas por guión
como "mi-cadena-corta" en palabras con mayúscula "miCadenaCorta".
Es decir, eliminar todos los guiones y que cada palabra después de un guión
comience con mayúscula.

Ejemplo:
camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";

********************************************************************************/


// Convertiremos una cadena con guiones al formato camelCase.
function camelize(str) {

    // Separaremos la cadena por los guiones para obtener un array de palabras.
    let palabras = str.split("-");

    // Crearemos un nuevo array con map(), transformando cada palabra.
    let palabrasCamel = palabras.map((palabra, indice) => {

        // Conservaremos la primera palabra tal como la recibimos.
        if (indice === 0) {

            return palabra;

        }

        // Pondremos en mayúscula la primera letra de las demás palabras
        // y conservaremos el resto con slice(1).
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);

    });

    // Uniremos las palabras sin separador, eliminando así todos los guiones.
    return palabrasCamel.join("");

}


// Mostraremos los tres ejemplos del enunciado.
console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage

// Con un guión inicial, conservaremos la primera palabra vacía y
// convertiremos la siguiente en "Webkit".
console.log(camelize("-webkit-transition")); // WebkitTransition
