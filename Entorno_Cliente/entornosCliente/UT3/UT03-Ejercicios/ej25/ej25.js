/**************************************************************

25.	Crea una función abrirVentana( url, ancho, alto ) que abra 
url en una ventana emergente con el tamaño indicado, centrada 
en la pantalla (utiliza screen.width y screen.height), y 
devuelva la referencia a la ventana. Si el navegador bloquea 
la ventana, debe mostrar un mensaje por consola y devolver null.
Prueba la función desde un botón. Después, comprueba qué ocurre
 si la llamas directamente al cargar la página, sin que el 
usuario haga clic.
Añade un botón «Cerrar» que cierre la ventana abierta. 
Antes de cerrarla, comprueba que existe y que no está cerrada 
ya (closed).

**************************************************************/

let ventana;

function abrirVentana(url, ancho, alto) {
    const left = (screen.width - ancho) / 2;
    const top = (screen.height - alto) / 2;
    ventana = window.open(url, '_blank', `width=${ancho},height=${alto},left=${left},top=${top}`);
    if (!ventana) {
        console.log("No se ha podido abrir la ventana.");
        return null;
    }
    return ventana;
}

function cerrarVentana(ventana) {
    if (ventana && !ventana.closed) {
        ventana.close();
    } else {
        console.log("La ventana no existe o ya está cerrada.");
    }
}