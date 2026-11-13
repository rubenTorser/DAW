/********************************************************************

26.	Crea dos páginas del mismo origen, ut3ej26comunicacionVentanasPrincipal.html e ut3ej26comunicacionVentanasHija.html, 
que se comuniquen entre sí:

    •	ut3ej26comunicacionVentanasPrincipal.html tiene dos botones: «Abrir hija», que abre 
        ut3ej26comunicacionVentanasHija.html con window.open(), y «Enviar mensaje», que pide  
        un texto con prompt() y lo muestra con alert() en la 
        ventana hija, llamando a una función de esa ventana.
    •	ut3ej26comunicacionVentanasHija.html tiene un botón «Responder», que pide un texto 
        con prompt() y lo muestra con alert() en la ventana que 
        la abrió (utiliza window.opener).

Comprueba qué ocurre si pulsas «Enviar mensaje» sin haber abierto 
la hija, o después de cerrarla, y evita el error en tu código.

*********************************************************************/

let ventana = null;

function abrirHija() {

    ventana = window.open("ut3ej26comunicacionVentanasHija.html", "ventanaHija", "width=400,height=400");

}

function enviarMensaje() {

    if (ventana && !ventana.closed) {
        let mensaje = prompt("Introduce un mensaje para la ventana hija:");
        ventana.mostrarMensaje(mensaje);
    } else {
        alert("La ventana hija no está abierta.");
    }

}

function mostrarMensaje(mensaje) {
    alert("Mensaje recibido en la ventana principal: " + mensaje);
}

//Window.opener se utiliza para acceder a la ventana que abrió la ventana hija.

function responder() {

    if (window.opener && !window.opener.closed) {
        let mensaje = prompt("Introduce un mensaje para la ventana principal:");
        window.opener.mostrarMensaje(mensaje);
    } else {
        alert("La ventana principal no está abierta.");
    }

}