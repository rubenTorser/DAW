<?php

require_once 'funciones.php';

$num1 = 2;
$num2 = 5;

$op = 'suma'; //$op es variable funcional, es decir, el nombre de la función que queremos invocar

echo $op($num1, $num2); //invocamos a la función cuyo nombre está en $op

echo "<br><br>";

echo calcular('producto', $num1, $num2); //invocamos a la función calcular, pasándole como primer argumento el nombre de la función que queremos invocar


?>