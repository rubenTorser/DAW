/**************************************************************

24.	Crea una página HTML con mucho contenido (por ejemplo, 30 
párrafos) y, al principio, tres botones. Escribe una función 
para cada botón:
•	Subir: desplaza la página suavemente hasta el principio.
•	Bajar 300 px: desplaza la página 300 píxeles hacia abajo 
    desde la posición actual.
•	Posición: muestra por consola cuántos píxeles se ha 
    desplazado la página.

 **************************************************************/

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