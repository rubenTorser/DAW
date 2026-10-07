<?php

function suma(int $a, int $b): int
{
    return ($a + $b);
}

function producto(int $a, int $b): int
{

    return ($a * $b);
}


function calcular(callable $operacion, int $a, int $b): int
{
    return ($operacion($a, $b));
}
?>