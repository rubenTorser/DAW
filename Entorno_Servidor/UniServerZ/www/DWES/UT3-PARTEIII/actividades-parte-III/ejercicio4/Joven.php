<?php

require_once __DIR__ . '/Abstracta.php';

class Joven extends Abstracta
{
    private int $identificador;
    private int $edad;

    public function __construct(int $identificador, int $edad)
    {
        $this->identificador = $identificador;
        $this->edad = $edad;
    }

    /*******
    COMPROBAREMOS LA AYUDA DEL JOVEN
    Devolveremos la ayuda únicamente para los jóvenes de 18 años.
    Devolveremos una cadena vacía para las demás edades.
    *******/
    public function ayudas(): string
    {
        if ($this->edad === 18) {
            return '400 euros';
        }

        return '';
    }

    public function mensaje(): string
    {
        return 'Estás en la mejor edad. Disfruta';
    }
}
