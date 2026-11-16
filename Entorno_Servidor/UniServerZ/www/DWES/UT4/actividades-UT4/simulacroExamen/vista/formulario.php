<?php

require_once __DIR__ . '/../libreria/funciones.php';

$meses = obtenerMeses();
$gasto = obtenerGastos();
$nombresGastos = [
    'alimentacion' => 'Alimentación',
    'higienePersonal' => 'Higiene personal',
    'recibos' => 'Recibos',
    'ocio' => 'Ocio'
];
$nombresMiembros = [1 => 'Uno', 2 => 'Dos', 3 => 'Tres', 4 => 'Cuatro'];

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gastos familiares</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>GASTOS FAMILIARES</h1>

    <form action="../controlador/controlador.php" method="POST">
        <table>
            <tr>
                <td>
                    <div class="datosFamilia">
                        <label for="ingresos">Ingresos:
                            <input type="number" id="ingresos" name="ingresos" min="0.01" step="0.01" required>
                        </label>
                        <label for="anio">Año:
                            <input type="number" id="anio" name="anio" min="2000" max="2024" required>
                        </label>
                        <label for="mes">Mes:
                            <select id="mes" name="mes" required>
                                <?php foreach ($meses as $numero => $nombre): ?>
                                    <option value="<?= $numero ?>"><?= htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8') ?></option>
                                <?php endforeach; ?>
                            </select>
                        </label>
                    </div>
                </td>
                <td rowspan="2" class="miembros">
                    <fieldset>
                        <legend>Miembros familiares:</legend>
                        <?php foreach ($nombresMiembros as $numero => $nombre): ?>
                            <label class="opcion">
                                <input type="radio" name="miembros" value="<?= $numero ?>" required>
                                <?= htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8') ?>
                            </label>
                        <?php endforeach; ?>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td class="gastos">
                    <fieldset>
                        <legend>Gastos:</legend>
                        <?php foreach ($gasto as $concepto => $importe): ?>
                            <label class="opcion">
                                <input type="checkbox" name="gasto[<?= htmlspecialchars($concepto, ENT_QUOTES, 'UTF-8') ?>]" value="<?= $importe ?>">
                                <?= htmlspecialchars($nombresGastos[$concepto], ENT_QUOTES, 'UTF-8') ?>
                            </label>
                        <?php endforeach; ?>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="acciones">
                    <input type="reset" value="Eliminar Datos">
                    <input type="submit" name="enviar" value="Seguir">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
