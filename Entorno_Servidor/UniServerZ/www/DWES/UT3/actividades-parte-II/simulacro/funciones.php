<?php

function actualizarDescuento(array &$libros): void
{

    $anioActual = date('Y');
    foreach ($libros as &$libro) {

        $anioPublicacion = $libro[0];
        $edadLibro = $anioActual - $anioPublicacion;

        if ($edadLibro <= 5) {
            $libro[1] = $libro[1] - ($libro[1] * 0.1); // Aplicar descuento del 10%
        } else {
            $libro[1] = $libro[1] - ($libro[1] * 0.2); // Aplicar descuento del 20%
        }

    }

}

function obtenerTitulos(array &$libros): array
{

    $titulos = [];

    foreach ($libros as $titulo => $datos) {
        $titulos[] = $titulo;
    }

    return $titulos;

}

?>