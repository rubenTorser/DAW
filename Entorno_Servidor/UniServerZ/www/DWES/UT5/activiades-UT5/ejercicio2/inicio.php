<?php

session_start();

session_regenerate_id(true);

$numeroAleatorio = rand(0, 4);

$_SESSION['numAlt'] = $numeroAleatorio;

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
    <h1 class="titulo">¡¡JUEGA Y CONSIGUE TU PREMIO!!</h1>
    <form action="nombres.php">
        <input type="submit" name="Seguir" value="Seguir">
    </form>
</div>