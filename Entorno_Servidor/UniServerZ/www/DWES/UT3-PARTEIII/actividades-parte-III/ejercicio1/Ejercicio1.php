<?php

class Ejercicio1
{

    /*
    Si el método es estático, se puede llamar sin necesidad de crear una instancia de la clase.
    */

    //Comprobar que un valor entero (n) no es nulo.
    function esNulo($valor): bool
    {

        return $valor === null;

    }

    //Comprobar que un valor entero (n2) sea entero, positivo y menor de 5.
    function menorDeCinco(int $valor): bool
    {

        if (($valor < 5) && is_int($valor) && ($valor > 0)) {

            return true;

        }

        return false;

    }


    //Calcular el número de vocales de un string (c1).
    function contarVocales(string $cadena): int
    {

        $vocales = 0;

        for ($i = 0; $i < strlen($cadena); $i++) {

            if (in_array(strtolower($cadena[$i]), ['a', 'e', 'i', 'o', 'u'])) {

                $vocales++;

            }

        }

        return $vocales;

    }


    //Obtener un array con los resultados de los métodos anteriores.
    function obtenerDatos(int $n1, int $n2, string $cadena): array
    {

        return [$n1, $n2, $cadena];

    }


}

?>