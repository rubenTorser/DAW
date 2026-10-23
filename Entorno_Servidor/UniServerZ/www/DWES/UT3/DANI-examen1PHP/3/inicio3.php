<?php
$fichero = 'script1.php';
$h_creacion = '11:20:00'; // A las 11 y 20 minutos
$f_creacion = '10-01-2026'; //El 1 de octubre de 2026

$horas = "0"; // recoge el nº. de horas desde su creación

require_once("./funciones.php");
echo "El fichero $fichero lleva creado ";
horasCreado($h_creacion, $f_creacion, $horas);
echo "$horas horas";
?>