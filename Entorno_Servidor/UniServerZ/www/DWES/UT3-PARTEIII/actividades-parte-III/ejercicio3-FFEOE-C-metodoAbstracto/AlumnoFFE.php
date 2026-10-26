<?php

abstract class AlumnoFFE

{

    const CICLO='DAW'; //static $ciclo='DAW';

    protected string $nombre;
    protected int $edad;

    public function __construct(string $nombre, int $edad)
    {
        $this->nombre = $nombre;

        $this->edad = $edad;
    }


    function visualizar(): string
    {

        return "Nombre: " . $this->nombre . "<br>Edad: " . $this->edad . "<br>";

    }

    abstract function superaCurso(): string;
}

?>