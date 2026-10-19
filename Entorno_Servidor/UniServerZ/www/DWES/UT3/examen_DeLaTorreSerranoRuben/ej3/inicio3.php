<?php

require_once 'funciones.php';

$script = 'inicio2.php';
$h_Creacion = '11:20:00';
$f_creacion = '1-10-2026'; //1 de octubre de 2026


$tiempoTranscurrido = horasCreacion($h_Creacion, $f_creacion);

echo "Tiempo transcurrido desde la creación del script $script: " . $tiempoTranscurrido . " horas.";
?>