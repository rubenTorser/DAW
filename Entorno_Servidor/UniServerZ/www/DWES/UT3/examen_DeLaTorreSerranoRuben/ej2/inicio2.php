<?php

require_once 'funciones.php';

$plataformasWeb = [

    array('Windows', 'Apache', 'MySQL', 'PHP'),
    array('Windows', 'IIS', 'SQL Server', 'ASP.NET'),
    array('Linux', 'Apache', 'MySQL', 'PHP')

];


$abreviados = abreviar($plataformasWeb);

echo "Abreviaturas de las plataformas web: ";

for ($i = 0; $i < count($abreviados); $i++) {
    echo $abreviados[$i] . " ";
}




?>