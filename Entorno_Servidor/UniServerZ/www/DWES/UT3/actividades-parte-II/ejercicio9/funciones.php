<?php

/*****************************************************************************************

9.  Traduce un texto escrito en castellano a “latín macarrónico”. Para ello se cambia cada
    palabra del texto por otra que se construye a partir de la original poniendo la primera letra
    al final y terminándola en “um”. Ejemplo: “una imagen vale más que mil palabras” ->
    “Nauum magenium alevum asmum uequm ilmum alabraspum”.

*****************************************************************************************/

function traducirALatinMacarronico($texto): string
{
    // Dividir el texto en palabras
    $palabras = explode(" ", $texto);
    $palabrasTraducidas = array();

    // Traducir cada palabra
    foreach ($palabras as $palabra) {
        if (strlen($palabra) > 0) {
            $primeraLetra = substr($palabra, 0, 1);
            $restoPalabra = substr($palabra, 1);
            $palabraTraducida = $restoPalabra . $primeraLetra . "um";
            $palabrasTraducidas[] = $palabraTraducida;
        }
    }

    // Unir las palabras traducidas en un solo string
    return implode(" ", $palabrasTraducidas);
}

?>