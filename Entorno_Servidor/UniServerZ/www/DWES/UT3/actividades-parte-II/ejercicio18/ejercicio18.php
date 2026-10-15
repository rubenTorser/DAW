<?php

/******************************************************************************************
18. Muestra los fármacos que están caducados. Para ello, es necesario crear un array con 5
fármacos; de cada uno se almacena su nombre y la fecha de caducidad. Utiliza una función
que reciba el array y le devuelva sin los fármacos caducados.
*******************************************************************************************/

include_once 'funciones.php';

date_default_timezone_set('Europe/Madrid');

$farmacos = [
    'paracetamol' => '10-12-2023',
    'ibuprofeno' => '15-01-2024',
    'amoxicilina' => '01-11-2026',
    'omeprazol' => '20-05-2027',
    'aspirina' => '10-10-2028'
];


$caducados = farmacosCaducados($farmacos);

foreach ($caducados as $nombre => $fechaCaducidad) {
    echo "El fármaco $nombre ha caducado el $fechaCaducidad.<br>";
}

?>