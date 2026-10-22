<?php

require_once "Ejercicio1.php";

$n1 = 5;

$n2 = 3;

$cadena = 'Hola Mundo';

$ejercicio1 = new Ejercicio1();

$esNulo = $ejercicio1->esNulo($n1);
echo "El valor es nulo: " . ($esNulo ? "Sí" : "No") . "<br>";

$menorDeCinco = $ejercicio1->menorDeCinco($n2);
echo "El valor es menor de cinco: " . ($menorDeCinco ? "Sí" : "No") . "<br>";

$contarVocales = $ejercicio1->contarVocales($cadena);
echo "Número de vocales: " . $contarVocales . "<br>";

$obtenerDatos = $ejercicio1->obtenerDatos($n1, $n2, $cadena);
echo "Datos obtenidos: ";
var_dump($obtenerDatos);

?>