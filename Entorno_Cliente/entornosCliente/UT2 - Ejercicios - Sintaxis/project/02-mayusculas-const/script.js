/**
 * Ejercicio 02 — ¿Mayúsculas en constantes?
 * (Variables y constantes)
 * --------------------------------------------------------------------
 *
 * Examina el siguiente código (no hace falta ejecutarlo: someCode no existe,
 * así que daría error).
 *
 * Aquí tenemos dos constantes. ¿Sería correcto utilizar mayúsculas en alguna
 * de ellas, o en las dos?
 *
 * Responde a la pregunta anterior. Después, mira lo que nos explican en esta
 * página: ¿const mayúsculas? (https://es.javascript.info/variables#const-
 * mayusculas).
 *
 * Código a examinar:
 *   const fechaNacimiento = '18.04.1982';
 *   const edad = someCode(fechaNacimiento);
 */

// Este ejercicio es de reflexión: no es necesario ejecutar nada.
// Si quieres, prueba algo aquí.

const BIRTHDATE = '18.04.1982';
const edad = prompt('Introduce tu edad: ');

console.log(`Fecha de nacimiento: ${BIRTHDATE}`);
console.log(`Edad: ${edad}`);
