<?php

require_once 'AlumnoFFE.php';
require_once 'Primero.php';
require_once 'Segundo.php';


// Pasaremos las calificaciones de los módulos; su media será 6.5.
$alumno1Primero = new Primero("Juan", 20, [6, 7]);
$alumno1Segundo = new Segundo("Juan", 20, 6.5, 7.0, "supera");

$superaCurso = $alumno1Segundo->superaCurso($alumno1Primero);

echo $superaCurso;
?>
