/*******************************************************************************
 
35.	Crea una función infoNavegador() que muestre por consola el idioma del navegador,
si hay conexión a internet («Conectado» o «Sin conexión»), la resolución de la 
pantalla y el tamaño disponible de la pantalla (sin la barra de tareas). 

Ejemplo de salida:
    Idioma: es-ES
    Conexión: Conectado
    Pantalla: 1920 x 1080
    Disponible: 1920 x 1040

*******************************************************************************/

function infoNavegador() {

    console.log(`Idioma: ${navigator.language}`);
    console.log(`Conexión: ${navigator.onLine ? 'Conectado' : 'Desconectado'}`);
    console.log(`Pantalla: ${screen.width} x ${screen.height}`);
    console.log(`Disponible: ${screen.availWidth} x ${screen.availHeight}`);

}

infoNavegador();