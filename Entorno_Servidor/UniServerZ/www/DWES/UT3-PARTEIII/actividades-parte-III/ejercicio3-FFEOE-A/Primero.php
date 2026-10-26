<?php

class Primero extends AlumnoFFE {

    protected float $notaMediaPrimero = 0;

    public function __construct(string $nombre, int $edad, float $notaMediaPrimero)
    {
        parent::__construct($nombre, $edad);
        $this->notaMediaPrimero = $notaMediaPrimero;
    }

    function superaCurso(): string
    {
        $texto="no supera";

        if ($this->notaMediaPrimero >= 5) {
            $texto = "supera";
        }
        return $texto;
    }
    

}

?>