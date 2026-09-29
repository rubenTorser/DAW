/**
 * Ejercicio 09 — Resultados con operadores lógicos
 * (Operadores lógicos)
 * --------------------------------------------------------------------
 *
 * ¿Cuáles son los resultados de estas expresiones? Piénsalo y anota tus
 * respuestas antes de ejecutar el script.
 *
 * Más información: Operadores lógicos — primeras cinco tareas
 * (https://es.javascript.info/logical-operators#tasks).
 */

alert( null || 2 || undefined );
alert( alert(1) || 2 || alert(3) );
alert( 1 && null && 2 );
alert( alert(1) && alert(2) );
alert( null || 2 && 3 || 4 );
