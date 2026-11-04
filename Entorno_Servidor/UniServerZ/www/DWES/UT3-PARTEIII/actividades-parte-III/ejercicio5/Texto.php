<?php

require_once 'TextoAbstracto.php';

class Texto extends TextoAbstracto
{
    /*********************************************************************
    TRADUCIREMOS EL TEXTO A LATÍN MACARRÓNICO
    Adaptaremos la función del ejercicio 9 de la parte II.
    Moveremos la primera letra de cada palabra al final y añadiremos "um".
    Utilizaremos palabras sin tildes ni ñ, pues substr() trabaja con bytes.
    *********************************************************************/
    public function textoMacarronico(string $texto): string
    {
        $palabras = explode(' ', $texto);
        $palabrasTraducidas = [];

        foreach ($palabras as $palabra) {
            if ($palabra !== '') {
                $primeraLetra = substr($palabra, 0, 1);
                $restoPalabra = substr($palabra, 1);
                $palabrasTraducidas[] = $restoPalabra . $primeraLetra . 'um';
            }
        }

        return implode(' ', $palabrasTraducidas);
    }

    /*********************************************************************
    CIFRAREMOS EL TEXTO CON ROT13
    Desplazaremos 13 posiciones las letras A-Z y a-z del alfabeto inglés.
    Recuperaremos el texto original al aplicar este método dos veces.
    *********************************************************************/
    public function textoCifrado(string $texto): string
    {
        return str_rot13($texto);
    }

    /*********************************************************************
    COMPROBAREMOS SI EL TEXTO ES UN PALÍNDROMO
    Adaptaremos la función del ejercicio 8 de la parte II.
    Quitaremos los espacios y convertiremos las letras a minúsculas.
    Compararemos la cadena con su inversa mediante strrev().
    Utilizaremos frases sin tildes, ñ ni signos de puntuación.
    *********************************************************************/
    public function esPalindromo(string $texto): bool
    {
        $texto = strtolower(str_replace(' ', '', $texto));

        return $texto === strrev($texto);
    }
}
