<?php

session_start();

/* REGENERAR EL IDENTIFICADOR DE SESIÓN */
session_regenerate_id(true);

echo "Nuevo ID de sesión: " . session_id() . "<br>";

$_SESSION["alumno"]="Ruben";
$_SESSION["aula"]= 13;

?>

<a href="accesoAula.php">Acceder a la página de aula</a>