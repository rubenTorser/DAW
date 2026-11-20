/* EJERCICIO 2 · HORA ACTUAL
   Ejecuta node hora.js. Detén el reloj con Ctrl+C. */
function calcularHora(fecha = new Date()) {
    const partes = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()];
    return partes.map(parte => String(parte).padStart(2, "0")).join(":");
}

function iniciarReloj() {
    console.log(calcularHora());
    return setInterval(() => console.log(calcularHora()), 1000);
}

/* Al ejecutar este archivo arrancamos el reloj. El ejercicio 3 puede
   importar la función y decidir cuándo arrancarlo y detenerlo. */
if (require.main === module) iniciarReloj();
module.exports = { calcularHora, iniciarReloj };
