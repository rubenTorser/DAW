<?php

class Becado extends Alumno
{

    private float $importeBeca;

    public function __construct(string $nombre, int $edad, float $importeBeca)
    {
        parent::__construct($nombre, $edad);
        $this->importeBeca = $importeBeca;
    }

    function visualizar(): string
    {
        $textoDelPadre=parent::visualizar();
        return $textoDelPadre . "Importe de la beca: " . $this->importeBeca . "<br>";

    }

}

?>