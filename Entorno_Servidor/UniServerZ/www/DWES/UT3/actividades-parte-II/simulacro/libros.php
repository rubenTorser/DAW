<?php

/*************************************************************************

Crea un array para almacenar 4 libros. De cada libro queremos su
título, año de publicación y precio. A partir de este array, diseña
dos funciones:
* Una función para determinar el descuento que se aplicará a cada libro:
    - 10%  si el libro tiene menos de 5 años.
    - 20%  si el libro tiene más de 5 años.
    La función devolverá el array con los precios actualizados.

* Otra función devolverá un listado de los títulos de los libros:
    - Implementar la función utilizando la sentencia 'return' para
        devolver el listado de títulos.
    - Implementar la función utilizando el paso por referencia.

*************************************************************************/

include_once 'funciones.php';

$libros = [
    'El Quijote' => [1605, 20.00],
    'Canción de hielo y fuego' => [1996, 25.00],
    'Sidi' => [2025, 15.00],
    'Harry Potter y la piedra filosofal' => [1997, 30.00]
];

actualizarDescuento($libros);

echo "<h2>Listado de libros con precios actualizados:</h2>";
foreach ($libros as $titulo => $datos) {
    echo "<p>Título: {$titulo}, Año: {$datos[0]}, Precio: {$datos[1]} €</p>";
}


echo "<h2>Listado de títulos de los libros:</h2>";
$titulos = obtenerTitulos($libros);
foreach ($titulos as $titulo) {
    echo "<p>{$titulo}</p>";
}

?>