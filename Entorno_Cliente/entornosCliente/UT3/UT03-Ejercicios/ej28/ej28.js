/*****************************************************************
28.	Abre una página externa (por ejemplo, https://www.mozilla.org) 
con window.open() de dos formas: sin características y con 
"noopener,noreferrer". Muestra por consola lo que devuelve 
window.open() en cada caso y escribe como comentario para qué sirve 
noopener.
*****************************************************************/

let ventana = null;

function abrirVentana() {
    ventana = window.open("https://www.mozilla.org");
    console.log("Ventana abierta sin características:", ventana);
}

// noopener es una opción que se puede pasar a window.open() para evitar que la nueva ventana tenga acceso al origen de la ventana que la abrió.
//noreferrer es una opción que se puede pasar a window.open() para evitar que la nueva ventana reciba información sobre el origen de la ventana que la abrió, como la URL de referencia. Esto ayuda a mejorar la privacidad y seguridad al abrir ventanas externas.
function abrirVentanaConCaracteristicas() {
    ventana = window.open("https://www.mozilla.org", "_blank", "noopener,noreferrer");
    console.log("Ventana abierta con características:", ventana);
}