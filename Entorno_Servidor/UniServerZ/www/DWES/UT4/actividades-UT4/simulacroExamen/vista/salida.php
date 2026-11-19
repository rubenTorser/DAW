<?php

$totalGastos = filter_input(INPUT_GET, 'totalGastos', FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 0]
]);
$ahorro = filter_input(INPUT_GET, 'ahorro', FILTER_VALIDATE_FLOAT);

if ($totalGastos === null || $totalGastos === false
    || $ahorro === null || $ahorro === false || !is_finite($ahorro)) {
    header('Location: formulario.php');
    exit;
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado de gastos familiares</title>
</head>
<body>
    <p>El gasto total de la familia es <?= number_format($totalGastos, 2, ',', '.') ?> €.</p>

    <?php if ($ahorro > 0): ?>
        <p>La familia ha ahorrado <?= number_format($ahorro, 2, ',', '.') ?> €.</p>
    <?php elseif ($ahorro < 0): ?>
        <p>La familia tiene un saldo negativo. Saldo: <?= number_format($ahorro, 2, ',', '.') ?> €.</p>
    <?php else: ?>
        <p>La familia no ha ahorrado. Saldo: 0,00 €.</p>
    <?php endif; ?>

    <a href="formulario.php">Volver al formulario</a>
</body>
</html>
