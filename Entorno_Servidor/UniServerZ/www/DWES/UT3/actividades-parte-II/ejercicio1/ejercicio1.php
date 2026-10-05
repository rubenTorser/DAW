<?php

/**********************************************

1.  Crea una función para visualizar la tabla de 
    multiplicar de un número previamente
    inicializado a un valor entero. 
    Casos:
    a) Pasar el número como parámetro y 
        visualizar la tabla en la función.

    b) Pasar el número como parámetro y obtener 
        el resultado a través de un string y la
        sentencia return.

    c) Pasar el número como parámetro y obtener 
        el resultado a través de un string y el
        paso de parámetro por referencia.


**********************************************/

require_once("./funciones.php");

//a) Pasar el número como parámetro y visualizar la tabla en la función.
$n = 5;
sumaA($n);

//b) Pasar el número como parámetro y obtener el resultado a través de un string y la sentencia return.
$n = 7;
$r = sumaB($n);
echo $r;


//c) Pasar el número como parámetro y obtener el resultado a través de un string y el paso de parámetro por referencia.
$num = 3;
sumaC($num, $resul);
echo "<br><br>" . $resul;

?>