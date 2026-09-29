/**
 * Ejercicio 12 — INICIOSESION
 * (Sentencias: decisiones)
 * --------------------------------------------------------------------
 *
 * Escribe un código que pregunte por el inicio de sesión con prompt.
 *
 * Si el visitante introduce "Admin", pide una contraseña (con un nuevo
 * prompt). Si la entrada es una línea vacía o se pulsa Esc, muestra
 * "Cancelado.". Si es cualquier otro texto, muestra "No te conozco".
 *
 * La contraseña se comprueba así:
 *
 *   - Si es igual a "TheMaster", muestra "¡Bienvenido!"
 *   - Si es cualquier otro texto, muestra "Contraseña incorrecta"
 *   - Para una cadena vacía o una entrada cancelada, muestra "Cancelado."
 *
 * Usa bloques anidados de if. Piensa en la legibilidad general del código.
 *
 * Pista: si se pasa una entrada vacía a prompt, devuelve una cadena vacía
 * ''. Pulsar Esc durante un prompt devuelve null.
 *
 * Más información: Comprueba el inicio de sesión
 * (https://es.javascript.info/logical-operators#comprueba-el-inicio-de-
 * sesion).
 */

let usuario = prompt("Inicio de sesión:");

