<?php
require_once __DIR__ . '/datosModulos.php';

// Si el navegador ya guardó un ciclo válido, iremos directamente a sus módulos.
$cicloGuardado = $_COOKIE['ciclo'] ?? '';
if (in_array($cicloGuardado, $ciclos, true)) {
    header('Location: verModulos.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selección de ciclo</title>
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
        <h1 class="titulo">Selecciona el ciclo en el que estás matriculado</h1>
        <table>
            <tr><th scope="col">Ciclo de grado superior</th></tr>
            <?php foreach ($ciclos as $codigo): ?>
                <tr>
                    <td><a href="seleccionarModulos.php?ciclo=<?= $codigo ?>"><?= strtoupper($codigo) ?></a></td>
                </tr>
            <?php endforeach; ?>
        </table>
    </main>
</body>
</html>
