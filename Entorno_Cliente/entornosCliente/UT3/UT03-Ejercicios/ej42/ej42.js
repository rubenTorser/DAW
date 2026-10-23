/*******************************************************************************

42. Crea una función borrarPorPrefijo(almacen, prefijo) que elimine de almacen
todas las claves que empiecen por prefijo y devuelva cuántas ha eliminado.

Cuidado: al borrar una clave cambian las posiciones de las siguientes.

Ejemplo: si hay las claves usuario_nombre, usuario_edad y tema, entonces
borrarPorPrefijo(localStorage, "usuario_") devuelve 2 y solo queda tema.

*******************************************************************************/

function borrarPorPrefijo(almacen, prefijo) {

    let eliminadas = 0;

    // Recorremos desde la última clave hasta la primera. Así, al borrar una,
    // las claves que todavía tenemos que revisar no cambian de posición.
    for (let i = almacen.length - 1; i >= 0; i--) {

        let clave = almacen.key(i);

        // startsWith comprueba si el nombre de la clave comienza por el prefijo.
        if (clave.startsWith(prefijo)) {
            almacen.removeItem(clave);
            eliminadas++;
        }

    }

    return eliminadas;

}

function probarBorrado() {

    // El ejemplo solo se prepara y se borra cuando pulsamos el botón de la página.
    localStorage.setItem("usuario_nombre", "Ana");
    localStorage.setItem("usuario_edad", "19");
    localStorage.setItem("tema", "claro");

    console.log("Antes de borrar:");
    console.log("usuario_nombre =", localStorage.getItem("usuario_nombre"));
    console.log("usuario_edad =", localStorage.getItem("usuario_edad"));
    console.log("tema =", localStorage.getItem("tema"));

    let eliminadas = borrarPorPrefijo(localStorage, "usuario_");
    console.log("Claves eliminadas:", eliminadas);

    // Las claves eliminadas devuelven null. La clave tema conserva su valor.
    console.log("Después de borrar:");
    console.log("usuario_nombre =", localStorage.getItem("usuario_nombre"));
    console.log("usuario_edad =", localStorage.getItem("usuario_edad"));
    console.log("tema =", localStorage.getItem("tema"));

}
