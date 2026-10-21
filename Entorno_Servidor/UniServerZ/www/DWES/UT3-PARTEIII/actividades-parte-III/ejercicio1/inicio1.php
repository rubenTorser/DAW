<?php

require_once "Ejercicio1.php";

$ejercicio1 = new Ejercicio1();

$esNulo = $ejercicio1->esNulo(5);
echo "El valor es nulo: " . ($esNulo ? "Sí" : "No") . "<br>";

$menorDeCinco = $ejercicio1->menorDeCinco(3);
echo "El valor es menor de cinco: " . ($menorDeCinco ? "Sí" : "No") . "<br>";

$contarVocales = $ejercicio1->contarVocales("Hola Mundo");
echo "Número de vocales: " . $contarVocales . "<br>";

$obtenerDatos = $ejercicio1->obtenerDatos(5, 3, "Hola Mundo");
echo "Datos obtenidos: " . implode(", ", $obtenerDatos) . "<br>";

?>