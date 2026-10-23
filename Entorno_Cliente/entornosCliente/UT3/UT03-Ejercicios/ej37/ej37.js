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
    // getItem devuelve una cadena, o null si la clave todavía no existe.
    // Number convierte la cadena en número. Number(null) devuelve 0.
    let visitas = Number(localStorage.getItem("visitas"));
    visitas++;

    // setItem guarda el nuevo número convertido automáticamente en cadena.
    localStorage.setItem("visitas", visitas);
    return visitas;
}

function contarVisitasSesion() {
    // Hacemos lo mismo usando el almacenamiento de esta pestaña.
    let visitas = Number(sessionStorage.getItem("visitasSesion"));
    visitas++;

    sessionStorage.setItem("visitasSesion", visitas);
    return visitas;
}

// Cada función se llama una sola vez cuando se carga este archivo.
console.log(`Esta es tu visita número ${contarVisitas()}`);
console.log(`Esta es tu visita de sesión número ${contarVisitasSesion()}`);

/*
PRUEBAS EN EL NAVEGADOR:
- En Application, consulta Local Storage y Session Storage para ver las claves.
- Recarga la página: aumentan los dos contadores.
- Abre una pestaña nueva y escribe la misma dirección: localStorage comparte
  el contador del mismo origen y sessionStorage empieza una sesión de pestaña.
  Al duplicar una pestaña o abrirla desde otra, puede copiarse su sessionStorage.
- Cierra y vuelve a abrir el navegador: localStorage conserva el contador.
  sessionStorage normalmente empieza de nuevo; si el navegador restaura la
  sesión anterior, también puede recuperar los datos de sus pestañas.
- Llamar a una función manualmente también suma una visita, aunque no recargues.
*/
