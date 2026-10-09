<?php

/*****************************************************************************************

6.  A partir del array asociativo que almacenaba las lectivas de los módulos de 
    2º de DAW utiliza las funciones de ordenación de arrays asociativos (asort y ksort).

*****************************************************************************************/

//Mostrar cuántas horas lectivas tenemos de cada módulo



include_once("./funciones.php");

$modulos = [

    'Entorno Cliente' => 7,
    'Entorno Servidor' => 8,
    'Diseño de Interfaces Web' => 5,
    'Despliegue de Aplicaciones Web' => 3,
    'Sostenibilidad' => 1,
    'Digitalización' => 1,
    'Servicios y Procesos' => 3,
    'Itinerario para la empleabilidad II' => 2

];


$horasAsort = deMenorAMayorAsort($modulos);

$horasKsort = deMenorAMayorKsort($modulos);


echo "<h2>Ordenado por horas lectivas (asort)</h2>";

foreach ($horasAsort as $modulo => $horas) {

    echo "El módulo $modulo tiene $horas horas lectivas.<br>";

}

echo "<br><br>";

echo "<h2>Ordenado por nombre de módulo (ksort)</h2>";

foreach ($horasKsort as $modulo => $horas) {

    echo "El módulo $modulo tiene $horas horas lectivas.<br>";

}
?>