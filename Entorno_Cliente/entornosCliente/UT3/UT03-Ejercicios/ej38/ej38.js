/*******************************************************************************

38. Crea una función almacenarFecha(fecha) que almacena en localStorage,
de forma separada, el día, el mes (de 1 a 12) y el año de la fecha,
que es un objeto Date. Utiliza las claves "dia", "mes" y "anno".
Comprueba en la pestaña Application que se han guardado las tres claves.

*******************************************************************************/

function almacenarFecha(fecha) {
    // getDate() devuelve el día del mes. getDay() devolvería el día de la semana.
    localStorage.setItem("dia", fecha.getDate());

    // getMonth() va de 0 a 11: sumamos 1 para guardar un mes entre 1 y 12.
    localStorage.setItem("mes", fecha.getMonth() + 1);
    localStorage.setItem("anno", fecha.getFullYear());

    // Aunque enviamos números, localStorage siempre guarda los valores como texto.
}

// Prueba desde el botón del HTML o desde la consola:
// almacenarFecha(new Date());
// En Application > Local Storage deben aparecer "dia", "mes" y "anno".
