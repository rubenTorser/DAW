<?php

//Muestra el número de componentes negativas

function contarNegativos(array &$a, &$numeroDeNegativos): void
{
    $numeroDeNegativos = 0;

    foreach ($a as $numero) {

        if ($numero < 0) {
            $numeroDeNegativos++;
        }

    }

}



//Muestra la media de las componentes

/*

El símbolo ? en el parámetro sirve para indicar que el parámetro puede ser nulo.

Si inicializamos el parámetro en el paréntesis de la función, ese parámetro 
se convierte en OPCIONAL. Si no se pasa ningún valor al llamar a la función, 
el parámetro tomará el valor por defecto que hayamos definido.

*/
function calcularMedia(array &$a, ?int $sumaDeElementos = 0, ?float $mediaDeComponentes = 0): float
{

    $sumaDeElementos = 0;
    $mediaDeComponentes = 0;

    for ($i = 0; $i < count($a); $i++) {

        $sumaDeElementos += $a[$i];

    }

    $mediaDeComponentes = $sumaDeElementos / count($a);

    return $mediaDeComponentes;

}



/*
Visualiza las posiciones del array en las que se almacene 
como valor el cuadrado de su posición. Si no se da esta 
circunstancia en ninguna componente, indícalo con un sencillo mensaje.
*/
function mostrarPosicionesCuadrado(array &$a, ?string &$resultado): void
{

    $hayCoincidencias = false;
    $resultado = "";

    for ($i = 0; $i < count($a); $i++) {

        if ($a[$i] == $i * $i) {

            $resultado .= "<br> En la posición $i se almacena el cuadrado de su posición. <br>";
            $hayCoincidencias = true;

        }

    }

    if (!$hayCoincidencias) {

        $resultado .= "<br> Ningún componente almacena el cuadrado de su posición. <br>";

    }

}
?>