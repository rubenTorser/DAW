<?php

require_once 'ClaseHerencia1.php';
require_once 'ClaseHerencia2.php';

$alumno1 = new Alumno("Juan", 20);

$becado1 = new Becado("María", 22, 1500.50);

echo $alumno1->visualizar();
echo "<br><br>";
echo $becado1->visualizar();
?>