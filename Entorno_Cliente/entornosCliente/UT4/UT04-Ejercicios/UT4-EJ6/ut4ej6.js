/****************************************************************************

6.  Almacenar entrada.
    Escribe una función almacenarEntrada() que:
    - Pida al usuario valores usando prompt y los almacene en un array.
    - Termine de pedirlos cuando el usuario ingrese un valor no numérico,
      una cadena vacía, o presione "Escape". Un cero 0 es un número válido,
      por favor no detengas los ingresos con el cero.
    - Devuelve el array generado.

****************************************************************************/

function almacenarEntrada() {

    // Creamos un array vacío para guardar los números introducidos.
    let numeros = [];

    // Seguimos pidiendo valores hasta que se cumpla una condición de salida.
    while (true) {

        let entrada = prompt("Introduce un número (vacío o Cancelar para terminar):");

        // Escape y Cancelar devuelven null. Lo comprobamos antes de usar trim().
        // trim() elimina los espacios de los extremos: solo espacios también es vacío.
        if (entrada === null || entrada.trim() === "" || isNaN(Number(entrada))) {
            break;
        }

        // prompt devuelve texto; Number lo convierte para almacenar números.
        const numero = Number(entrada);

        // push añade al final. El 0 también se guarda, porque es un número válido.
        numeros.push(numero);

    }

    // Devolvemos todos los números guardados antes de terminar.
    return numeros;

}

// Ejecutamos la función y mostramos el array devuelto en la consola del navegador.
let entradas = almacenarEntrada();
console.log(entradas);
