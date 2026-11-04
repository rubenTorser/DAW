<?php

require_once 'Texto.php';

/*********************************************************************
CREAREMOS UN OBJETO DE LA CLASE HIJA
Utilizaremos Texto porque implementa los tres métodos de TextoAbstracto.
*********************************************************************/
$texto = new Texto();

/*********************************************************************
PROBAREMOS LA TRADUCCIÓN Y EL CIFRADO
Mostraremos el texto original, su traducción y su cifrado.
Aplicaremos ROT13 otra vez para recuperar el texto original.
*********************************************************************/
$frase = 'Hola mundo';
$cifrado = $texto->textoCifrado($frase);

echo 'Texto original: ' . $frase . '<br>';
echo 'Texto macarrónico: ' . $texto->textoMacarronico($frase) . '<br>';
echo 'Texto cifrado (ROT13): ' . $cifrado . '<br>';
echo 'Texto descifrado: ' . $texto->textoCifrado($cifrado) . '<br>';

/*********************************************************************
PROBAREMOS LOS DOS RESULTADOS DEL PALÍNDROMO
Utilizaremos una frase que se lee igual al revés y otra que no lo hace.
Mostraremos el resultado booleano como "Sí" o "No".
*********************************************************************/
$palindromo = 'Anita lava la tina';

echo '<br>¿"' . $palindromo . '" es palíndromo? '
    . ($texto->esPalindromo($palindromo) ? 'Sí' : 'No') . '<br>';
echo '¿"' . $frase . '" es palíndromo? '
    . ($texto->esPalindromo($frase) ? 'Sí' : 'No') . '<br>';
