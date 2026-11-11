/*******************************************************************************

19. Escribe la función isEmpty(obj).

Devuelve el valor true si el objeto no tiene propiedades, en caso contrario false.

Ejemplo de funcionamiento:
let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "Hora de levantarse";
alert(isEmpty(schedule)); // false

********************************************************************************/


// Comprobaremos si el objeto recibido tiene alguna propiedad.
function isEmpty(obj) {

    // Recorreremos las propiedades del objeto con un bucle for...in.
    for (let propiedad in obj) {

        // Al encontrar la primera propiedad, devolveremos false y saldremos.
        return false;

    }

    // Si no hemos encontrado ninguna propiedad, devolveremos true.
    return true;

}


// Crearemos un objeto vacío y comprobaremos que obtendremos true.
let schedule = {};
alert(isEmpty(schedule));

// Añadiremos una propiedad y comprobaremos que obtendremos false.
schedule["8:30"] = "Hora de levantarse";
alert(isEmpty(schedule));
