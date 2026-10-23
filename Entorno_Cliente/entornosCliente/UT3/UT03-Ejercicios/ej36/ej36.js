/*************************************************************
 * 36.	Crea una función saludo( idioma ) que devuelva «¡Hola!»
 *  si el idioma empieza por es, «Bonjour !» si empieza por fr
 * y «Hello!» en cualquier otro caso. El parámetro es opcional:
 *  si no se indica, se utiliza el idioma del navegador.
    saludo("es-ES")   // "¡Hola!"
    saludo("fr-FR")   // "Bonjour !"
    saludo("de-DE")   // "Hello!"
    saludo()          // el saludo correspondiente al idioma de tu navegador

**************************************************************/

// Utilizaremos el idioma del navegador como valor por defecto del parámetro.
function saludo(idioma = navigator.language) {
    // Comprobaremos con startsWith si la cadena comienza por el texto indicado.
    if (idioma.startsWith("es")) {
        return "¡Hola!";
    }

    if (idioma.startsWith("fr")) {
        return "Bonjour !";
    }

    // Devolveremos este saludo para cualquier idioma que no empiece por es o fr.
    return "Hello!";
}

console.log(saludo("es-ES")); // Mostraremos "¡Hola!".
console.log(saludo("fr-FR")); // Mostraremos "Bonjour !".
console.log(saludo("de-DE")); // Mostraremos "Hello!".
console.log(saludo()); // Utilizaremos navigator.language.
