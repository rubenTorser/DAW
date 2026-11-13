/*******************************************************************************

39. Crea una función recuperarFecha() que lee del localStorage la fecha
almacenada por almacenarFecha() y devuelve un objeto Date con esa fecha.
Si no hay ninguna fecha almacenada, devolverá null.

Cuidado: los valores se guardan como cadenas y los meses de Date van de 0 a 11.

almacenarFecha(new Date(2026, 11, 25));
console.log(recuperarFecha()); // 25 de diciembre de 2026

Recarga la página y vuelve a llamar a recuperarFecha() para comprobar
que la fecha sigue guardada.

*******************************************************************************/

function recuperarFecha() {
    let dia = localStorage.getItem("dia");
    let mes = localStorage.getItem("mes");
    let anno = localStorage.getItem("anno");

    // Con getItem() obtendremos null para las claves inexistentes.
    // Comprobaremos las tres partes antes de reconstruir una fecha completa.
    if (dia === null || mes === null || anno === null) {
        return null;
    }

    // Convertiremos las cadenas a números y restaremos 1 al mes guardado.
    return new Date(Number(anno), Number(mes) - 1, Number(dia));
}

// Al cargar solo leeremos: así comprobaremos la persistencia tras la recarga.
// Reutilizaremos almacenarFecha() del ejercicio 38 mediante su script en el HTML.
console.log("Fecha recuperada:", recuperarFecha());
