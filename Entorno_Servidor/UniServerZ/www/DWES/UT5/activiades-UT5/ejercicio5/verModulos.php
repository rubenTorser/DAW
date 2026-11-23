<?php
require_once __DIR__ . '/datosModulos.php';

// En la primera visita recibiremos el ciclo del enlace. Al volver por inicio.php, leeremos la cookie.
$ciclo = $_GET['ciclo'] ?? $_COOKIE['ciclo'] ?? '';
if (!in_array($ciclo, $ciclos, true)) {
    header('Location: inicio.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Módulos de segundo curso</title>
    <style>
        .caja {
            box-sizing: border-box;
            width: 620px;
            max-width: 100%;
            border: 6px double gray;
            padding: 5px;
            text-align: center;
        }

        .titulo {
            font-size: 36px;
            margin: 0 0 30px;
        }

        .caja table {
            margin: 0 auto;
        }

        .caja ul {
            display: inline-block;
            text-align: left;
        }
    </style>
</head>
<body>
    <main class="caja">
        <h1 class="titulo">Módulos de 2º de <?= strtoupper($ciclo) ?></h1>
        <ul>
            <?php foreach (array_merge($modulosPorCiclo[$ciclo], $modulosComunes) as $modulo): ?>
                <li><?= $modulo ?></li>
            <?php endforeach; ?>
        </ul>
    </main>
</body>
</html>
