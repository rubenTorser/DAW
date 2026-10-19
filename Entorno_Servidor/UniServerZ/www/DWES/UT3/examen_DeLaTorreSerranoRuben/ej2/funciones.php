<?php

function abreviar(array $plataformasWeb): array
{
    $abreviados = [];

    for ($i = 0; $i < count($plataformasWeb); $i++) {

        $abreviados[$i] = '';

        for ($j = 0; $j < count($plataformasWeb[$i]); $j++) {


            $abreviados[$i] .= $plataformasWeb[$i][$j][0];
        }

    }

    return $abreviados;
}

?>