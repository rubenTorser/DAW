<?php

require_once "ejercicio1Estatico.php";

// Los métodos estáticos se llaman con Clase::metodo(), sin crear un objeto con new.
$esNulo = Ejercicio1Estatico::esNulo();
echo "El valor es nulo: " . ($esNulo ? "Sí" : "No") . "<br>";

$menorDeCinco = Ejercicio1Estatico::menorDeCinco();
echo "El valor es menor de cinco: " . ($menorDeCinco ? "Sí" : "No") . "<br>";

$contarVocales = Ejercicio1Estatico::contarVocales();
echo "Número de vocales: " . $contarVocales . "<br>";

$obtenerDatos = Ejercicio1Estatico::obtenerDatos();
echo "Datos obtenidos: ";
var_dump($obtenerDatos);

?>
