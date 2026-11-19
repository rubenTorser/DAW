<?php

require_once __DIR__ . '/../modelo/FamiliaGastos.php';
require_once __DIR__ . '/../libreria/funciones.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../vista/formulario.php');
    exit;
}

$anio = filter_var($_POST['anio'] ?? '', FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 2000, 'max_range' => 2024]
]);
$ingresos = filter_var($_POST['ingresos'] ?? '', FILTER_VALIDATE_FLOAT);
$mes = filter_var($_POST['mes'] ?? '', FILTER_VALIDATE_INT);
$miembros = filter_var($_POST['miembros'] ?? '', FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 1, 'max_range' => 4]
]);

$meses = obtenerMeses();
$gastosPermitidos = obtenerGastos();
$gastoRecibido = $_POST['gasto'] ?? [];
$gasto = [];

$datosCorrectos = $anio !== false
    && $ingresos !== false && is_finite($ingresos) && $ingresos > 0
    && $mes !== false && isset($meses[$mes])
    && $miembros !== false
    && is_array($gastoRecibido);

if (is_array($gastoRecibido)) {
    foreach ($gastoRecibido as $concepto => $importe) {
        if (!array_key_exists($concepto, $gastosPermitidos)
            || !is_string($importe)
            || $importe !== (string) $gastosPermitidos[$concepto]) {
            $datosCorrectos = false;
            break;
        }

        // Los importes utilizados proceden del catálogo del servidor.
        $gasto[$concepto] = $gastosPermitidos[$concepto];
    }
}

if (!$datosCorrectos) {
    header('Location: ../vista/salidaError.php');
    exit;
}

$familia = new FamiliaGastos($ingresos, $miembros, $anio, $mes, $gasto);
$totalGastos = $familia->calcularTotalGastos();
$ahorro = 0;
$familia->calcularAhorro($ahorro);

$resultado = http_build_query([
    'totalGastos' => $totalGastos,
    'ahorro' => $ahorro
]);

header('Location: ../vista/salida.php?' . $resultado);
exit;
