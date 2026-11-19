<?php

session_start();

$arrNombres = ['Marcos', 'Ana', 'Silvia', 'Pedro', 'Antonio'];

$_SESSION['nombre']=$arrNombres[$_SESSION['numAlt']];

$_SESSION['usuarios'] = $arrNombres;

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Juego</title>
    <style>
        .caja {
            border: 6px double gray;
            text-align: center;
            padding: 5px;
            width: 620px;
        }

        .titulo {
            font-size: 36px;
            margin: 0 0 30px;
        }
    </style>
</head>
<body>
<div class="caja">
    <h1 class="titulo">¡¡Sigue jugando!!</h1>
    <form action="premio.php">
        <input type="submit" name="Seguir" value="Seguir">
    </form>
</div>