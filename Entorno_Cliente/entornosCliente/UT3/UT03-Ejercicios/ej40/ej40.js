/*******************************************************************************

40. Crea una función guardarAlumno(alumno) que guarde en localStorage un objeto
con los datos de un alumno, por ejemplo:
{ nombre: "Ana", edad: 19, aficiones: ["cine", "música"] }.

Crea una función leerAlumno() que lo recupere y devuelva un objeto con esos datos
(o null si no hay datos). Utiliza JSON.stringify y JSON.parse.

Comprueba que leerAlumno().aficiones es un array (con length). Después, prueba a
guardar el objeto sin JSON.stringify y observa qué se almacena realmente.

*******************************************************************************/

function guardarAlumno(alumno) {

    // localStorage solo guarda cadenas. JSON.stringify convierte el objeto en texto JSON.
    localStorage.setItem("alumno", JSON.stringify(alumno));

}

function leerAlumno() {

    let datosAlumno = localStorage.getItem("alumno");

    // Si la clave no existe, getItem devuelve null y no hay ningún alumno guardado.
    if (datosAlumno === null) {
        return null;
    }

    // JSON.parse reconstruye el objeto y también su array de aficiones.
    return JSON.parse(datosAlumno);

}

function probarAlumnoSinJSON() {

    // Usamos otra clave para conservar el alumno guardado correctamente.
    // Sin JSON.stringify, el objeto se convierte en la cadena "[object Object]".
    localStorage.setItem("alumnoSinJSON", alumnoEjemplo);
    console.log("Alumno guardado sin JSON.stringify:");
    console.log(localStorage.getItem("alumnoSinJSON"));

}

let alumnoEjemplo = {
    nombre: "Ana",
    edad: 19,
    aficiones: ["cine", "música"]
};

guardarAlumno(alumnoEjemplo);

let alumnoRecuperado = leerAlumno();
console.log("Alumno recuperado:", alumnoRecuperado);
console.log("Número de aficiones:", alumnoRecuperado.aficiones.length);
console.log("¿Aficiones es un array?", Array.isArray(alumnoRecuperado.aficiones));
