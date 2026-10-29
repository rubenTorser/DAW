<?php

require_once __DIR__ . '/Abstracta.php';

class Adulto extends Abstracta
{
    private string $nombre;
    private string $profesion;
    private string $empresa;

    public function __construct(string $nombre, string $profesion, string $empresa)
    {
        $this->nombre = $nombre;
        $this->profesion = $profesion;
        $this->empresa = $empresa;
    }

    /*******
    COMPROBAREMOS LA AYUDA DEL ADULTO
    Devolveremos 0 euros para los profesores.
    Devolveremos una cadena vacía para las demás profesiones.
    *******/
    public function ayudas(): string
    {
        if ($this->profesion === 'profesor') {
            return '0 euros';
        }

        return '';
    }

    /*******
    COMPROBAREMOS LA PROFESIÓN Y LA EMPRESA
    Devolveremos el mensaje al cumplir las dos condiciones.
    Devolveremos una cadena vacía en los demás casos.
    *******/
    public function mensaje(): string
    {
        if ($this->profesion === 'profesor' && $this->empresa === 'CIFP Juan de Colonia') {
            return 'es una buena opción';
        }

        return '';
    }
}
