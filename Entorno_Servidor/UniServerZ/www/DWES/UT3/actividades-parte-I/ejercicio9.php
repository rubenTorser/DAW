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

    'notasPrimeroYSegundo' => [
        'DWES001' => [9.2, 9.4],
        'DWES002' => [9.5, 9.6],
        'DWES003' => [9.8, 9.9],
        'DWES004' => [9.8, 9.9],
        'DWES005' => [9.7, 9.8]
    ]
];

/*
    - Muestra los números de matrícula junto a las medias obtenidas
    - Muestra la media más alta junto a su matrícula
*/

$mediaMax = 0;
$matriculasMax = [];

// Recorremos cada matrícula junto con sus dos notas de evaluación.
foreach ($matriculasDeHonor['notasPrimeroYSegundo'] as $matricula => $notas) {

    // La posición 0 contiene la primera nota y la posición 1, la segunda.
    $notaPrimera = $notas[0];
    $notaSegunda = $notas[1];
    // Redondeamos a dos decimales para evitar pequeñas diferencias al comparar las medias.
    $media = round(($notaPrimera + $notaSegunda) / 2, 2);

    echo "Matrícula: $matricula - Media: $media <br>";

    // Si encontramos una media mayor, guardamos su matrícula y descartamos las anteriores.
    if ($media > $mediaMax) {
        $mediaMax = $media;
        $matriculasMax = [$matricula];
    } elseif ($media == $mediaMax) {
        // Si la media coincide con la máxima, añadimos la matrícula a la lista.
        $matriculasMax[] = $matricula;
    }

}

echo "<br>La media más alta es $mediaMax.";
echo "<br>Número de matrículas con la media más alta: " . count($matriculasMax) . "<br>";

// Mostramos todas las matrículas que tienen la media máxima.
foreach ($matriculasMax as $matricula) {
    echo "Matrícula: $matricula <br>";
}
?>