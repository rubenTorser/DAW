/*******************************************************************************

37. Crea una función contarVisitas() que cuente las veces que se ha cargado la
página y devuelva ese número. Utiliza localStorage y recuerda que los valores se
guardan como cadenas. Llámala al cargar la página y muestra por consola
«Esta es tu visita número N».

Crea una función contarVisitasSesion() equivalente que utilice sessionStorage.
Comprueba qué ocurre con cada contador al recargar la página, al abrirla en otra
pestaña y al cerrar y volver a abrir el navegador. Observa los valores en la
pestaña Application.

*******************************************************************************/

function contarVisitas() {
    // Con getItem obtendremos una cadena, o null para una clave inexistente.
    // Convertiremos el resultado con Number y partiremos de 0 si recibimos null.
    let visitas = Number(localStorage.getItem("visitas"));
    visitas++;

    // Guardaremos el nuevo número como cadena mediante setItem.
    localStorage.setItem("visitas", visitas);
    return visitas;
}

function contarVisitasSesion() {
    // Haremos lo mismo usando el almacenamiento de esta pestaña.
    let visitas = Number(sessionStorage.getItem("visitasSesion"));
    visitas++;

    sessionStorage.setItem("visitasSesion", visitas);
    return visitas;
}

// Llamaremos a cada función una sola vez al cargar este archivo.
console.log(`Esta es tu visita número ${contarVisitas()}`);
console.log(`Esta es tu visita de sesión número ${contarVisitasSesion()}`);

/*
PRUEBAS EN EL NAVEGADOR:
- Consultaremos Local Storage y Session Storage en Application para ver las claves.
- Recargaremos la página y comprobaremos el incremento de los dos contadores.
- Abriremos una pestaña nueva y escribiremos la misma dirección: compartiremos
  el contador de localStorage del mismo origen y empezaremos una sesión de pestaña.
  Al duplicar una pestaña o abrirla desde otra, podremos recibir una copia de su sessionStorage.
- Cerraremos y volveremos a abrir el navegador: conservaremos el contador local
  y normalmente empezaremos de nuevo el de sesión. Si el navegador restaura
  la sesión anterior, también podremos recuperar los datos de sus pestañas.
- También sumaremos una visita al llamar a una función manualmente, sin recargar.
*/
