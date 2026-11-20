/* EJERCICIO 3 · AVISO A LOS DIEZ SEGUNDOS
   Ejecuta node crono.js. Reutilizamos el reloj del ejercicio 2. */
const reloj = require("./hora.js");
const idReloj = reloj.iniciarReloj();

const idAviso = setTimeout(() => {
    clearInterval(idReloj);
    console.log("Han pasado 10 segundos.");
}, 10000);

/* CANCELACIÓN ANTICIPADA CON CTRL+C */
process.once("SIGINT", () => {
    clearInterval(idReloj);
    clearTimeout(idAviso);
    console.log("Cronómetro cancelado.");
});
