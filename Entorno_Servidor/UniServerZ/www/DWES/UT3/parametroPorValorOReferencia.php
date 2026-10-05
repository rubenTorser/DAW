<?php

/****************************************************************

Diferencias entre pasar un parámetro por valor o por referencia.

*****************************************************************/


//Pasar parámetro por valor

$array1 = array(1, 2, 3, 4, 5);

function invertirArrayValor($array)
{

    $array = array_reverse($array);

    echo "Array pasado cómo parámetro por valor: <br>";

}

invertirArrayValor($array1);

for ($i = 0; $i < count($array1); $i++) {
    echo $array1[$i] . " <br> ";
}

echo "<br><br>";

//var_dump($array1); // Muestra el array original sin cambios


/*************************************************************************/


//Pasar parámetro por referencia

$array2 = array(1, 2, 3, 4, 5);

function invertirArrayReferencia(&$array)
{
    $array = array_reverse($array);

    echo "Array pasado cómo parámetro por referencia: <br>";

}

invertirArrayReferencia($array2);

for ($i = 0; $i < count($array2); $i++) {
    echo $array2[$i] . " <br> ";
}

echo "<br><br>";

//var_dump($array2); // Muestra el array modificado

?>