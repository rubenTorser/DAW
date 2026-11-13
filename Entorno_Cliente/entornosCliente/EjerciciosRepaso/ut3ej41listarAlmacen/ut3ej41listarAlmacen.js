/*******************************************************************************

41. Crea una función listarAlmacen(almacen) que reciba localStorage o sessionStorage
y muestre por consola el número de elementos y todas las claves con sus valores.
Utiliza length y key(n).

Ejemplo de salida:
Elementos: 3
bgcolor = red
font = Helvetica
image = myCat.png

Pruébala con ambos objetos.

*******************************************************************************/

function listarAlmacen(almacen) {

    // Con length obtendremos el número de claves del almacén recibido.
    console.log(`Elementos: ${almacen.length}`);

    for (let i = 0; i < almacen.length; i++) {

        // Con key(i) obtendremos el nombre de la clave que ocupa esa posición.
        let clave = almacen.key(i);

        // Con la clave recuperaremos el valor que tiene guardado.
        console.log(`${clave} = ${almacen.getItem(clave)}`);

    }

}

console.log("localStorage:");
listarAlmacen(localStorage);

console.log("sessionStorage:");
listarAlmacen(sessionStorage);
