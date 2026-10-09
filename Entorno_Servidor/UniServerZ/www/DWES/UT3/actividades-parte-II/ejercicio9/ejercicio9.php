<?php

/*****************************************************************************************

9.  Traduce un texto escrito en castellano a “latín macarrónico”. Para ello se cambia cada
    palabra del texto por otra que se construye a partir de la original poniendo la primera letra
    al final y terminándola en “um”. Ejemplo: “una imagen vale más que mil palabras” ->
    “Nauum magenium alevum asmum uequm ilmum alabraspum”.

*****************************************************************************************/

include_once("funciones.php");

echo traducirALatinMacarronico("una imagen vale más que mil palabras");

?>