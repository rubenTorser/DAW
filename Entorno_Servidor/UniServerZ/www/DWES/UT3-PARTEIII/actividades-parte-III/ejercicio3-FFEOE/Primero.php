<?php

class Primero extends AlumnoFFE {

    protected float $notaMediaPrimero = 0;

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