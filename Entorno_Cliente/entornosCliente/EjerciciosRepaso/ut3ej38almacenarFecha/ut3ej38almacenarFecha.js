/*******************************************************************************

38. Crea una función almacenarFecha(fecha) que almacena en localStorage,
de forma separada, el día, el mes (de 1 a 12) y el año de la fecha,
que es un objeto Date. Utiliza las claves "dia", "mes" y "anno".
Comprueba en la pestaña Application que se han guardado las tres claves.

*******************************************************************************/

function almacenarFecha(fecha) {
    // Obtendremos el día del mes con getDate(); reservaremos getDay() para el día de la semana.
    localStorage.setItem("dia", fecha.getDate());

    // Sumaremos 1 al resultado de getMonth() para guardar un mes entre 1 y 12.
    localStorage.setItem("mes", fecha.getMonth() + 1);
    localStorage.setItem("anno", fecha.getFullYear());

    // Guardaremos estos números como texto en localStorage.
}

// Probaremos la función desde el botón del HTML o desde la consola:
// almacenarFecha(new Date());
// Comprobaremos las claves "dia", "mes" y "anno" en Application > Local Storage.
