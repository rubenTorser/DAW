<?php

/*****************************************************************************************

8. Determina si una frase es palíndromo. Utiliza las funciones de string para ello.

*****************************************************************************************/

function esPalindromo($frase)
{

    // Eliminar espacios y convertir a minúsculas
    $frase = strtolower(str_replace(' ', '', $frase));

    // Comparar la frase con su reverso
    return $frase === strrev($frase);

}

?>