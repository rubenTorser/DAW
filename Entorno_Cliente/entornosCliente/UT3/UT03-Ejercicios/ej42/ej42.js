/*******************************************************************************

42. Crea una función borrarPorPrefijo(almacen, prefijo) que elimine de almacen
todas las claves que empiecen por prefijo y devuelva cuántas ha eliminado.

Cuidado: al borrar una clave cambian las posiciones de las siguientes.

Ejemplo: si hay las claves usuario_nombre, usuario_edad y tema, entonces
borrarPorPrefijo(localStorage, "usuario_") devuelve 2 y solo queda tema.

*******************************************************************************/

function borrarPorPrefijo(almacen, prefijo) {

    let clavesParaBorrar = [];

    // Primero guardaremos los nombres sin modificar el almacén.
    // Así evitaremos que los cambios de orden del navegador afecten al recorrido al borrar.
    for (let i = 0; i < almacen.length; i++) {

        let clave = almacen.key(i);

        // Con startsWith comprobaremos si el nombre de la clave comienza por el prefijo.
        if (clave.startsWith(prefijo)) {
            clavesParaBorrar.push(clave);
        }

    }

    // Después borraremos por nombre para evitar que los cambios de posición afecten al borrado.
    for (let clave of clavesParaBorrar) {
        almacen.removeItem(clave);
    }

    // Con length devolveremos el número de claves eliminadas.
    return clavesParaBorrar.length;

}

function probarBorrado() {

    // Prepararemos y borraremos el ejemplo solo cuando pulsemos el botón de la página.
    localStorage.setItem("usuario_nombre", "Ana");
    localStorage.setItem("usuario_edad", "19");
    localStorage.setItem("tema", "claro");

    console.log("Antes de borrar:");
    console.log("usuario_nombre =", localStorage.getItem("usuario_nombre"));
    console.log("usuario_edad =", localStorage.getItem("usuario_edad"));
    console.log("tema =", localStorage.getItem("tema"));

    let eliminadas = borrarPorPrefijo(localStorage, "usuario_");
    console.log("Claves eliminadas:", eliminadas);

    // Obtendremos null al consultar las claves eliminadas y conservaremos el valor de la clave tema.
    console.log("Después de borrar:");
    console.log("usuario_nombre =", localStorage.getItem("usuario_nombre"));
    console.log("usuario_edad =", localStorage.getItem("usuario_edad"));
    console.log("tema =", localStorage.getItem("tema"));

}
