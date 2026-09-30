<?php

/*************************************************************

6. Construye un array asociativo, donde las componentes son las 
cuatro estaciones del año. Almacena en cada componente los días 
lectivos correspondientes.
- Muestra la estación con menor número de días lectivos.
- Calcula el total de días lectivos.

*************************************************************/

$estaciones = [

    'Invierno' => 50,
    'Primavera' => 56,
    'Verano' => 10,
    'Otoño' => 58

];

$totalDiasLectivos = 0;
$diasLectivosMasCortos = 0;
$estacionConMenosDiasLectivos = '';

foreach ($estaciones as $estacion => $diasLectivos) {

    if ($diasLectivos < $diasLectivosMasCortos || $diasLectivosMasCortos == 0) {

        $diasLectivosMasCortos = $diasLectivos;
        $estacionConMenosDiasLectivos = $estacion;

    }

    $totalDiasLectivos += $diasLectivos;

}

echo "La estación con menor número de días lectivos es $estacionConMenosDiasLectivos con $diasLectivosMasCortos días lectivos. <br>";
echo "El curso 2026-2027 tiene un total de $totalDiasLectivos días lectivos. <br>";

?>