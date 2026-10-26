<?php

require_once 'AlumnoFFE.php';
require_once 'Primero.php';
require_once 'Segundo.php';

$notasAlumnoPrimero = [4, 3, 2, 5, 1]; // Calificaciones de los módulos de primero

$alumno1Primero = new Primero("Juan", 20, $notasAlumnoPrimero);
$alumno1Segundo = new Segundo("Juan", 20, 6.5, 7.0, "supera");

$superaCurso1 = $alumno1Primero->superaCurso();
$superaCurso2 = $alumno1Segundo->superaCurso();




echo $superaCurso1 ." el primer curso <br>";
echo $superaCurso2 . " el segundo curso <br>";
?>
