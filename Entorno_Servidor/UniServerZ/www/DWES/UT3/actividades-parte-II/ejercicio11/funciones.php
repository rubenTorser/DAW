<?php

/*****************************************************************************************

11. Visualiza una palabra y sus rotaciones. Ejemplo: si la palabra es Hola, las 
    rotaciones serán: aHol, laHo, olaH, Hola.

*****************************************************************************************/

function visualizarRotaciones($palabra): void
{
    $longitud = strlen($palabra);
    for ($i = 0; $i < $longitud; $i++) {
        $rotacion = substr($palabra, -$i) . substr($palabra, 0, -$i);
        echo $rotacion . "<br>";
    }
}

?>