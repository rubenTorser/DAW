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

//a) Pasar el número como parámetro y visualizar la tabla en la función.

function sumaA(int $num)
{
    echo "Tabla de multiplicar del número $num: <br>";

    for ($i = 1; $i <= 10; $i++) {

        echo "$num x $i = " . ($num * $i) . "<br>";

    }

    echo "<br><br>";

}



//b) Pasar el número como parámetro y obtener el resultado a través de un string y la sentencia return.

function sumaB(int $num): string
{
    $resultado = "Tabla de multiplicar del número $num: <br>";

    for ($i = 1; $i <= 10; $i++) {

        $resultado .= "$num x $i = " . ($num * $i) . "<br>";

    }

    return $resultado;

}



//c) Pasar el número como parámetro y obtener el resultado a través de un string y el paso de parámetro por referencia.

function sumaC(int $num, ?string &$resultado): void
{

    $resultado = "Tabla de multiplicar del número $num: <br>";

    for ($i = 1; $i <= 10; $i++) {

        $resultado .= "$num x $i = " . ($num * $i) . "<br>";

    }

}
?>