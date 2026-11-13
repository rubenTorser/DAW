/*
23. Crea una función infoVentana() que muestre por consola el ancho y alto del área de 
contenido (innerWidth e innerHeight), el ancho y alto de la ventana completa 
(outerWidth y outerHeight), la posición de la ventana en la pantalla (screenX y 
screenY) y el desplazamiento horizontal y vertical de la página (scrollX y scrollY). 
Ejemplo de salida: 
Contenido: 1280 x 650 
Ventana: 1296 x 759 
Posición: 0, 0 
Scroll: 0, 0 
Redimensiona la ventana, haz scroll y vuelve a llamar a la función desde la consola. Escribe 
como comentario qué diferencia hay entre los valores de innerWidth y de outerWidth. 

24. Crea una página HTML con mucho contenido (por ejemplo, 30 párrafos) y, al principio, tres 
botones. Escribe una función para cada botón: 
• Subir: desplaza la página suavemente hasta el principio. 
• Bajar 300 px: desplaza la página 300 píxeles hacia abajo desde la posición 
actual. 
• Posición: muestra por consola cuántos píxeles se ha desplazado la página. 
*/

function infoVentana() {

    let contenido = `Contenido: ${window.innerWidth} x ${window.innerHeight}`;
    let ventana = `Ventana: ${window.outerWidth} x ${window.outerHeight}`;
    let posicion = `Posición: ${window.screenX}, ${window.screenY}`;
    let scroll = `Scroll: ${window.scrollX}, ${window.scrollY}`;

    console.log(contenido);
    console.log(ventana);
    console.log(posicion);
    console.log(scroll);

}

infoVentana();


function subir() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function bajar300() {
    window.scrollBy({
        top: 300,
        behavior: 'smooth'
    });
}

function posicion() {
    console.log(`Posición: ${window.scrollY}`);
}