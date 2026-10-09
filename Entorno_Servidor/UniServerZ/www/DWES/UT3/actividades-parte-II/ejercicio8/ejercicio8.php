<?php

/*****************************************************************************************

8. Determina si una frase es palíndromo. Utiliza las funciones de string para ello.

*****************************************************************************************/

include_once("funciones.php");

$string = "anita lava la tina";

if (esPalindromo($string)) {
    echo "La frase es un palíndromo.";
} else {
    echo "La frase no es un palíndromo.";
}

?>