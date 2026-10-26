<?php

require_once 'AlumnoFFE.php';
require_once 'Primero.php';
require_once 'Segundo.php';

$notasAlumnoPrimero = [4, 3, 2, 5, 1]; // Calificaciones de los módulos de primero

// Pasaremos las calificaciones de los módulos; su media será 6.5.
$alumno1Primero = new Primero("Juan", 20, $notasAlumnoPrimero);
$alumno1Segundo = new Segundo("Juan", 20, 6.5, 7.0, "supera");

$superaCurso = $alumno1Segundo->superaCurso($alumno1Primero);

echo $superaCurso;
?>
