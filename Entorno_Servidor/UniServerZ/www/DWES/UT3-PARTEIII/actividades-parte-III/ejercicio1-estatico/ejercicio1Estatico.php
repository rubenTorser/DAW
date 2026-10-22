<?php

class Ejercicio1Estatico
{

    /*
    Si el método es estático, se puede llamar sin necesidad de crear una instancia de la clase.
    Los atributos de clase (static) pertenecen a la clase y se acceden con self::$atributo.
    */

    private static $n1 = 5;

    private static $n2 = 3;

    private static $cadena = 'Hola Mundo';


    //Comprobar que un valor entero (n1) no es nulo.
    static function esNulo(): bool
    {

        return self::$n1 === null;

    }

    //Comprobar que un valor entero (n2) sea entero, positivo y menor de 5.
    static function menorDeCinco(): bool
    {

        if ((self::$n2 < 5) && is_int(self::$n2) && (self::$n2 > 0)) {

            return true;

        }

        return false;

    }


    //Calcular el número de vocales de un string (cadena).
    static function contarVocales(): int
    {

        $vocales = 0;

        for ($i = 0; $i < strlen(self::$cadena); $i++) {

            if (in_array(strtolower(self::$cadena[$i]), ['a', 'e', 'i', 'o', 'u'])) {

                $vocales++;

            }

        }

        return $vocales;

    }


    //Obtener un array con los resultados de los métodos anteriores.
    static function obtenerDatos(): array
    {

        return [self::esNulo(), self::menorDeCinco(), self::contarVocales()];

    }


}

?>
