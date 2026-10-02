/*************************************************************

27. (Sentencias: decisiones) Reescribe las siguientes sentencias
utilizando el operador ternario y simplificando las expresiones
si es posible:

if (edad > 18) {
    mayorEdad = "S";
} else {
    mayorEdad = "N";
}

if (prompt("¿Estás seguro?") == "SI") {
    seguir = "S";
} else {
    seguir = "N";
}

if (prompt("¿Estás seguro?") == "SI") {
    alert("S");
} else {
    alert("N");
}

 ************************************************************/

"use strict";

// Puedes cambiar la edad para probar las dos respuestas.
let edad=18;

// El ternario sigue el orden: condición ? valor si se cumple : valor si no.
// Conservamos edad > 18: con 18 devuelve "N" y con 19 devuelve "S".
let mayorEdad=edad>18 ? "S" : "N";
console.log(mayorEdad); // "N" con la edad de este ejemplo.

// Solo el texto exacto "SI" cumple la condición del enunciado.
let seguir=prompt("¿Estás seguro?") == "SI" ? "S" : "N";
console.log(seguir);

// En la tercera sentencia pasamos el resultado del ternario a un único alert.
alert(prompt("¿Estás seguro?") == "SI" ? "S" : "N");

/**************************RESPUESTAS**************************

El operador ternario permite elegir entre dos valores sin escribir
todo el if...else. En las dos primeras sentencias guardamos el
valor elegido en una variable y en la tercera lo mostramos.

Las dos llamadas a prompt son ejemplos separados, por eso aparecen
dos preguntas. Cada una se hace una sola vez. "SI" produce "S";
"si", otra respuesta, una entrada vacía o cancelar producen "N".

 ************************************************************/
