<?php

/****************************************************************

Diferencias entre pasar un parámetro por valor o por referencia.

*****************************************************************/


//Pasar parámetro por valor

$array1 = array(1, 2, 3, 4, 5);

function invertirArray($array)
{
    $array = array_reverse($array);
    return $array;
}

invertirArray($array1);
var_dump($array1); // Muestra el array original sin cambios


/*************************************************************************/


//Pasar parámetro por referencia

$array = array(1, 2, 3, 4, 5);

function invertirArrayReferencia(&$array)
{
    $array = array_reverse($array);
    return $array;
}

invertirArrayReferencia($array);
var_dump($array); // Muestra el array modificado

?>