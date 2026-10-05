<?php

/****************************************************************

Diferencias entre pasar un parámetro por valor o por referencia.

*****************************************************************/


//Pasar parámetro por valor

$array1 = array(1, 2, 3, 4, 5);

function invertirArrayValor($array)
{
    $array = array_reverse($array);

    for ($i = 0; $i < count($array); $i++) {
        echo $array[$i] . " <br> ";
    }
}

invertirArrayValor($array1);
//var_dump($array1); // Muestra el array original sin cambios


/*************************************************************************/


//Pasar parámetro por referencia

$array2 = array(1, 2, 3, 4, 5);

function invertirArrayReferencia(&$array)
{
    $array = array_reverse($array);
    for ($i = 0; $i < count($array); $i++) {
        echo $array[$i] . " <br> ";
    }
}

invertirArrayReferencia($array2);
//var_dump($array2); // Muestra el array modificado

?>