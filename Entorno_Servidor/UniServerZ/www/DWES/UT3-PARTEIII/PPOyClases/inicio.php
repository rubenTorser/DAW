<?php

require_once 'Alumno.php';

//$alumno1 = new Alumno("Rubén", 25);

$alumno1 = new Alumno();
$alumno1->constructAlumno("Rubén", 25);

echo $alumno1;


$alumno1->nombre = "Rubén Torser";
$alumno1->edad = 26;

$edadDelAlumno = $alumno1->edad;

echo "<p>El alumno se llama $alumno1->nombre y tiene $edadDelAlumno años.</p>";


?>