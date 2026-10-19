<?php

function horasCreacion(string &$h_creacion, string &$f_creacion)
{
    $fUnix = time();
    $concatenada = $f_creacion . " " . $h_creacion;
    $fecha = strtotime($concatenada);

    $tiempoTranscurrido = ($fUnix - $fecha) / 60 / 60;

    return $tiempoTranscurrido;
}


?>