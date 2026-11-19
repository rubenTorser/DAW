<?php

header('Refresh: 4; url=formulario.php');

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error en los datos</title>
</head>
<body>
    <p role="alert">Los datos no son correctos. Comprueba que el año esté entre 2000 y 2024,
        los ingresos sean mayores que cero y las opciones seleccionadas sean válidas.</p>
    <p>Volverás al formulario en 4 segundos.</p>
    <a href="formulario.php">Volver al formulario</a>
</body>
</html>
