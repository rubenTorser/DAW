<?php

/*****************************************************************************************

7.  Utiliza la función explode e implode y crea:

    a) un array indexado que almacene los colores a partir del siguiente string: 
       “rojo-verde-azul-amarillo”.

    b) Ejecuta echo $persona, una vez creado el string $persona a partir del siguiente
       array (“Pedro”,”González”,”López”). 

*****************************************************************************************/

echo " <h2> Creación de un array indexado a partir de un string </h2>";

$a = explode("-", "rojo-verde-azul-amarillo");

foreach ($a as $k => $color) {
    echo "El color $color <br>";
}


echo "<br><br>";


echo " <h2> Creación de un string a partir de un array indexado </h2>";

$b = ["Pedro", "González", "López"];
$persona = implode(" ", $b);

echo $persona;

?>