<?php
require_once __DIR__ . '/datosModulos.php';

$cicloElegido = $_GET['ciclo'] ?? '';
if (!in_array($cicloElegido, $ciclos, true)) {
    header('Location: inicio.php');
    exit;
}

// Guardaremos el ciclo durante una hora para recordarlo en las próximas visitas.
setcookie('ciclo', $cicloElegido, time() + 3600);

// Pasaremos la elección a la página de módulos para que también funcione en la primera visita.
header('Location: verModulos.php?ciclo=' . $cicloElegido);
exit;
