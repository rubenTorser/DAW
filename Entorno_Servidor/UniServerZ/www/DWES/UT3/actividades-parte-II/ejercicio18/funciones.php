<?php

function farmacosCaducados($farmacos): array
{

    $caducados = [];

    foreach ($farmacos as $nombre => $fechaCaducidad) {
        $fechaUnix = strtotime($fechaCaducidad);
        if ($fechaUnix < time()) {
            $caducados[$nombre] = $fechaCaducidad;
        }
    }

    return $caducados;

}

unset($farmacos['paracetamol']);

?>