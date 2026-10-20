/**************************************************
34. Crea tres páginas enlazadas entre sí: pag1.html,
pag2.html y pag3.html. Añade en cada una botones para
ir atrás, adelante y dos páginas atrás. Muestra en
consola la longitud del historial al cargar cada página.

Primera fase: recorre pag1 -> pag2 -> pag3 mediante
enlaces y comprueba los botones y la longitud del
historial.

Segunda fase: sustituye el enlace de pag2 a pag3 por
un botón que use location.replace(). Comprueba la
diferencia al volver atrás y consultar el historial.
**************************************************/

/**************************************************
BOM: WINDOW Y HISTORY

window.history permite consultar y recorrer el
historial de la pestaña. Su propiedad length cuenta
todas sus entradas, incluidas las visitas anteriores
al ejercicio y las que quedan por delante.

El script se carga en las tres páginas y muestra
ese número en la consola al cargar cada una.
**************************************************/
console.log("Número total de entradas del historial:", window.history.length);

/**************************************************
ATRÁS: HISTORY.BACK()

Vuelve a la entrada anterior del historial.
Si no hay una entrada anterior, no cambia de página.
**************************************************/
function atras() {
    window.history.back();
}

/**************************************************
ADELANTE: HISTORY.FORWARD()

Avanza a la siguiente entrada del historial.
Si estamos al final del historial, no hace nada.
**************************************************/
function adelante() {
    window.history.forward();
}

/**************************************************
ATRÁS DOS PÁGINAS: HISTORY.GO(-2)

Retrocede dos entradas en el historial.
Si no existen dos entradas anteriores, no navega.
**************************************************/
function atrasDosPaginas() {
    window.history.go(-2);
}

/**************************************************
IR A LA PÁGINA 3: LOCATION.REPLACE()

window.location representa la URL de la página actual.
replace() carga pag3.html sustituyendo la visita actual
a pag2.html, por lo que Atrás se salta esa visita.

En el recorrido pag1 -> pag2 -> pag3, sin entradas
por delante, replace() mantiene el número de entradas
que había al estar en pag2; un enlace añadiría otra.
**************************************************/
function irPagina3() {
    window.location.replace("ej34.3.html");
}
