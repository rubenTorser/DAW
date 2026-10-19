/**************************************************

30.	Crea una función cambioPagina(url, reemplazar)
que recibe una url y cambia la página web del 
navegador. Si url es una cadena vacía, null o 
undefined, no habrá cambio de página.
El parámetro reemplazar es opcional (por defecto, 
false). Si vale true, la página actual no debe 
quedar en el historial (el botón Atrás no volverá 
a ella); en caso contrario, sí.
Pruébala desde botones con dos páginas tuyas y 
comprueba con el botón Atrás la diferencia entre 
los dos modos.

**************************************************/

/**************************************************
    BOM: WINDOW Y LOCATION

    window es el objeto global que representa la ventana
    o pestaña del navegador donde se ejecuta el código.

    window.location contiene información sobre la URL
    de la página actual y permite navegar a otra página.
    Como window es el objeto global, también podemos
    escribir simplemente location.

    window.location.assign(url) carga la URL indicada
    y conserva la entrada actual en el historial, por
    lo que el botón Atrás permite volver a esta página.
    Se utiliza cuando reemplazar es false (por defecto).

    window.location.replace(url) carga la URL indicada
    sustituyendo la entrada actual del historial. El
    botón Atrás no vuelve a esa visita, aunque pueden
    seguir existiendo visitas anteriores a la misma URL.
    Se utiliza cuando reemplazar es true.
**************************************************/
function cambioPagina(url, reemplazar = false) {
    if (url === "" || url === null || url === undefined) {
        return;
    }

    if (reemplazar === true) {
        // Sustituye la entrada actual del historial.
        window.location.replace(url);
    } else {
        // Conserva la entrada actual para poder volver con Atrás.
        window.location.assign(url);
    }
}
