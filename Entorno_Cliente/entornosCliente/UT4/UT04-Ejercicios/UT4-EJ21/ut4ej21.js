/*******************************************************************************

21. Crea una función multiplyNumeric(obj).

Multiplicará por dos todas las propiedades numéricas de obj.
multiplyNumeric(obj) no devuelve nada, modifica el valor de las propiedades de obj.

Idea: puedes utilizar typeof para verificar si el valor de una propiedad es
de tipo number.

Ejemplo de funcionamiento:
// Antes de la llamada
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

multiplyNumeric(menu);

// Después de la llamada
menu = {
    width: 400,
    height: 600,
    title: "Mi menú"
};

********************************************************************************/


// Modificaremos directamente las propiedades numéricas del objeto recibido.
function multiplyNumeric(obj) {

    // Recorreremos los nombres de todas las propiedades con for...in.
    for (let propiedad in obj) {

        // Comprobaremos el tipo del valor para multiplicar solamente los números.
        if (typeof obj[propiedad] === "number") {
            obj[propiedad] *= 2;
        }

    }

    // No devolveremos ningún valor: habremos modificado el mismo objeto.

}


// Crearemos el objeto del ejemplo con dos números y un texto.
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

multiplyNumeric(menu);

// Mostraremos width: 400, height: 600 y title: "Mi menú".
console.log(menu);
