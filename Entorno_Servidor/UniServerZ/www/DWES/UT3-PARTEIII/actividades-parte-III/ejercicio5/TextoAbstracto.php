<?php

/*********************************************************************
5. Diseña una clase abstracta para incluir como métodos dos o tres
funciones con string (por ejemplo, texto macarrónico, texto cifrado
y palíndromo).

DEFINIREMOS EL CONTRATO PARA TRABAJAR CON CADENAS
Declararemos tres métodos sin cuerpo y los implementaremos en la hija.
No podremos crear objetos directamente de esta clase abstracta.
*********************************************************************/
abstract class TextoAbstracto
{
    abstract public function textoMacarronico(string $texto): string;

    abstract public function textoCifrado(string $texto): string;

    abstract public function esPalindromo(string $texto): bool;
}
