/*************************************************************

29. ¿Qué hace el siguiente código? Explícalo.

let curso = prompt("Dime tu curso");
switch (curso) {
    case 1:
        console.log("eres de 1º");
        break;
    case 2:
        console.log("eres de 2º");
        break;
    default:
        console.log("Error en el curso");
}

 ************************************************************/

"use strict";

// Conservamos el código del enunciado para comprobar qué ocurre.
let curso=prompt("Dime tu curso");

switch(curso){

    case 1:
        console.log("eres de 1º");
        break;

    case 2:
        console.log("eres de 2º");
        break;

    default:
        console.log("Error en el curso");

}

/**************************RESPUESTAS**************************

El código pide el curso e intenta mostrar si es primero o segundo.
Sin embargo, siempre muestra "Error en el curso".

prompt devuelve una cadena de texto al aceptar. Si escribimos 1,
curso guarda "1", no el número 1. switch compara el valor y el
tipo sin hacer conversiones, así que "1" no coincide con case 1
y "2" tampoco coincide con case 2.

Si cancelamos, prompt devuelve null, que tampoco coincide con
los casos. Por eso todas las respuestas llegan a default.

Para que los cursos escritos funcionasen, podríamos cambiar los
casos a case "1" y case "2", o convertir la entrada con Number.
Aquí mantenemos el ejemplo original para ver y explicar su fallo.

 ************************************************************/
