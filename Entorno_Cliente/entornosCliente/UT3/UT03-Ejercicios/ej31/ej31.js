/**************************************************

31. Crea una función obtenerParametro(nombre) que
devuelva el valor del parámetro nombre de la dirección
de la página actual (utiliza location.search), o null
si no existe.

Ejemplo: si la página se abre como
pagina.html?id=5&nombre=Ana:
obtenerParametro("nombre") // "Ana"
obtenerParametro("id")     // "5"
obtenerParametro("edad")   // null

Utiliza métodos de tipo String, no URLSearchParams.
Si la página no tiene parámetros, devolverá null.
Suponemos que no hay caracteres especiales.

**************************************************/

/**************************************************
BOM: WINDOW Y LOCATION.SEARCH

window representa la ventana o pestaña del navegador.
window.location contiene información sobre la URL
de la página actual.

window.location.search devuelve una cadena con los
parámetros de la URL, incluido el signo ? inicial.
Si no hay parámetros, devuelve una cadena vacía.

slice(1) elimina el signo ? y split("&") separa los
parámetros en un array. indexOf("=") localiza dónde
termina el nombre de cada parámetro.

substring() permite extraer el nombre y su valor.
Si el nombre coincide exactamente con el solicitado,
se devuelve su valor como cadena. Si no se encuentra
o no hay parámetros, se devuelve null.
**************************************************/
function obtenerParametro(nombre) {
    let busqueda = window.location.search;

    if (busqueda === "") {
        return null;
    }

    let parametros = busqueda.slice(1).split("&");

    for (let i = 0; i < parametros.length; i++) {
        let posicionIgual = parametros[i].indexOf("=");

        if (posicionIgual !== -1 &&
            parametros[i].substring(0, posicionIgual) === nombre) {
            // Extrae todo lo que aparece después del signo =.
            return parametros[i].substring(posicionIgual + 1);
        }
    }

    return null;
}
