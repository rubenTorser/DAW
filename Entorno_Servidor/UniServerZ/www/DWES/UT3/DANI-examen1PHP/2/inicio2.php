<?php
$plataformasWeb = [array('Windows','Apache','Mysql','Php'),
                    array('Windows','ISS','SQL_SERVER','Asp.net'),
                    array('Linux','Apache','Mysql','Php')
];

require_once("./funciones.php");
echo "Los nombres abreviados de las plataformas son: ";
$abreviaciones = abreviar($plataformasWeb);

foreach($abreviaciones as $abreviacion) {
    echo "$abreviacion ";
}
?>