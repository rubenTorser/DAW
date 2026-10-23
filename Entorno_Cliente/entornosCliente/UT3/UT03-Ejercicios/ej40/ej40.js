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

    // Como en localStorage solo podremos guardar cadenas, convertiremos el objeto en texto JSON con JSON.stringify.
    localStorage.setItem("alumno", JSON.stringify(alumno));

}

function leerAlumno() {

    let datosAlumno = localStorage.getItem("alumno");

    // Si no encontramos la clave, devolveremos null para indicar que no tendremos ningún alumno guardado.
    if (datosAlumno === null) {
        return null;
    }

    // Con JSON.parse reconstruiremos el objeto y también su array de aficiones.
    return JSON.parse(datosAlumno);

}

function probarAlumnoSinJSON() {

    // Usaremos otra clave para conservar el alumno guardado correctamente.
    // Sin JSON.stringify, guardaremos el objeto convertido en la cadena "[object Object]".
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
