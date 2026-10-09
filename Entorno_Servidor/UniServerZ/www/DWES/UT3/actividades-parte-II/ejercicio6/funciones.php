<?php

function deMenorAMayorAsort($modulos): array
{
    asort($modulos);

    return $modulos;

}

function deMenorAMayorKsort($modulos): array
{
    ksort($modulos);

    return $modulos;

}

?>