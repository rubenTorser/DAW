<?php

ini_set('display_errors', 0);

const PI=3.1416;

echo PI. "<br>";

try
{
    define ("PI", 25); // Esto generará un error de redefinición de constante
    throw new Error("No puedes redefinir una constante");
} 
catch (Error $e) 
{
    echo "Error: " . $e->getMessage();
}

?>