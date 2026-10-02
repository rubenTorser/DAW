<?php

/****************************************************************

9. Supongamos que hay 5 alumnos en DWES que obtienen de nota 
final un sobresaliente. Crear un array bidimensional que 
almacene de los 5 alumnos su número de matrícula y la 
calificación obtenida en la 1ª y en la 2ª evaluación. 
A continuación:
 - Muestra los números de matrícula junto a las medias obtenidas
 - Muestra la media más alta junto a su matrícula

****************************************************************/

$matriculasDeHonor = [

    '1' => [
        'DWES001' => 9.2,
        'DWES002' => 9.5,
        'DWES003' => 9.8,
        'DWES004' => 9.1,
        'DWES005' => 9.7
    ],

    '2' => [
        'DWES001' => 9.4,
        'DWES002' => 9.6,
        'DWES003' => 9.9,
        'DWES004' => 9.3,
        'DWES005' => 9.8
    ]
];

/*
    - Muestra los números de matrícula junto a las medias obtenidas
    - Muestra la media más alta junto a su matrícula
*/

$mediaMax = 0;
$matriculaMax = '';

// Recorremos las notas de la primera evaluación, alumno por alumno.
foreach ($matriculasDeHonor[1] as $matricula => $notaPrimera) {

    // Usamos la misma matrícula para buscar su nota de la segunda evaluación.
    $notaSegunda = $matriculasDeHonor[2][$matricula];
    $media = ($notaPrimera + $notaSegunda) / 2;

    echo "Matrícula: $matricula - Media: $media <br>";

    // Si encontramos una media mayor, guardamos la media y su matrícula.
    if ($media > $mediaMax) {
        $mediaMax = $media;
        $matriculaMax = $matricula;
    }

}

echo "<br>La media más alta es $mediaMax y corresponde a la matrícula $matriculaMax.";
?>