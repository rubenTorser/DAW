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

    // getItem() devuelve null si una clave no existe.
    // Necesitamos las tres partes para reconstruir una fecha completa.
    if (dia === null || mes === null || anno === null) {
        return null;
    }

    // Convertimos las cadenas a números y restamos 1 al mes guardado.
    return new Date(Number(anno), Number(mes) - 1, Number(dia));
}

// Al cargar solo leemos: así la recarga permite comprobar la persistencia.
// almacenarFecha() está definida en el ejercicio 38 y se carga desde el HTML.
console.log("Fecha recuperada:", recuperarFecha());
