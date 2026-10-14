<?php

/**********************************************************************************
 * Ejercicio 12
 * 12. Determina si a partir de una fecha para realizar una solicitud, 
 * se ha terminado el plazo.
 *********************************************************************************/

date_default_timezone_set('Europe/Madrid');

$fechaTope = '31-12-2026';

/*

OPCIÓN A

$f = strtotime($fechaTope);

$datosFechaTope = getdate($f);

$fechaUnix = mktime(
    0,
    0,
    0,
    $datosFechaTope['mon'],
    $datosFechaTope['mday'],
    $datosFechaTope['year']
);
*/

/*

OPCIÓN B

*/

// Convertimos la fecha a un timestamp para poder usar idate().
$f = strtotime($fechaTope);

$dia = idate('d', $f);
$mes = idate('m', $f);
$anio = idate('Y', $f);

echo $dia . "-" . $mes . "-" . $anio . "<br><br>";

$fechaUnix = mktime(0, 0, 0, $mes, $dia, $anio);

$diasDeDiferencia = (time() - $fechaUnix) / (60 * 60 * 24);

if ($diasDeDiferencia > 0) {
    echo "La fecha tope ha pasado hace " . $diasDeDiferencia . " días.";
} else {
    echo "Faltan " . abs($diasDeDiferencia) . " días para la fecha tope.";
}

?>