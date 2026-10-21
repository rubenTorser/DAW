<?php

require_once 'Alumno.php';

$alumno1 = new Alumno("Rubén", 25);

//$alumno1 = new Alumno();
//$alumno1->constructAlumno("Rubén", 25);

echo $alumno1;


$alumno1->nombre = "Rubén Torser";
$alumno1->edad = 26;

$edadDelAlumno = $alumno1->edad;

echo "<p>El alumno se llama $alumno1->nombre, tiene $edadDelAlumno años. " .
    "Matrícula: $alumno1->matricula y tiene un precio de " .
    $alumno1->importeMatricula() . "€</p>";



$alumno2 = new Alumno("Ana", 17);

echo $alumno2;

echo "<p>El alumno se llama $alumno2->nombre, tiene $alumno2->edad años. " .
    "Matrícula: $alumno2->matricula y tiene un precio de " .
    $alumno2->importeMatricula() . "€</p>";

?>