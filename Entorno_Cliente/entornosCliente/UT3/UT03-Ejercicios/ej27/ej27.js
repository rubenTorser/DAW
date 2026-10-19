/********************************************************************

27.	(Ampliación) Repite el ejercicio anterior utilizando postMessage. 
La ventana principal envía el texto con ventana.postMessage( texto, 
window.location.origin ). Para recibir el mensaje en la hija utiliza 
este código (los eventos se verán en la UT6):

window.addEventListener("message", function (evento) {
  // ignorar mensajes de otros orígenes
  if (evento.origin !== window.location.origin) return;
  alert("Mensaje recibido: " + evento.data);
});

Haz que la hija responda a la principal con 
evento.source.postMessage( ... ); la principal necesitará un código 
parecido para recibir la respuesta. ¿Por qué es importante comprobar 
evento.origin?

*********************************************************************/

let ventana = null;

function abrirHija() {

    ventana = window.open("hija.html", "ventanaHija", "width=400,height=400");

}

function enviarMensaje() {

    if (ventana && !ventana.closed) {
        let mensaje = prompt("Introduce un mensaje para la ventana hija:");
        ventana.postMessage(mensaje, window.location.origin);
    } else {
        alert("La ventana hija no está abierta.");
    }

}



function responder() {

    if (window.opener && !window.opener.closed) {
        let mensaje = prompt("Introduce un mensaje para la ventana principal:");
        window.opener.postMessage(mensaje, window.location.origin);
    } else {
        alert("La ventana principal no está abierta.");
    }

}