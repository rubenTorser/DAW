<?php

/*****************************************************************************************

10. Encripta una palabra empleando el método César, que consiste en desplazar cada carácter
    tres posiciones en el alfabeto.

*****************************************************************************************/

function encriptarCesar($texto): string
{
    $encriptado = "";
    $desplazamiento = 3;

    for ($i = 0; $i < strlen($texto); $i++) {
        $caracter = $texto[$i];
        if (ctype_alpha($caracter)) {
            if (ctype_lower($caracter)) {
                $encriptado .= chr((ord($caracter) - ord('a') + $desplazamiento) % 26 + ord('a'));
            } else {
                $encriptado .= chr((ord($caracter) - ord('A') + $desplazamiento) % 26 + ord('A'));
            }
        } else {
            $encriptado .= $caracter;
        }
    }

    return $encriptado;
}

?>