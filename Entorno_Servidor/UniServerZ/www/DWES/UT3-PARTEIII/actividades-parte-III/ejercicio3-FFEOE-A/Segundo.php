<?php

class Segundo extends AlumnoFFE
{
    protected float $notaMediaSegundo = 0;

    protected string $calificacionFFEOE= "";

    protected float $calificacionTFG = 0;



    public function __construct($nombre, $edad, float $notaMediaSegundo, float $calificacionTFG, string $calificacionFFEOE)
    {
        parent::__construct($nombre, $edad);
        $this->notaMediaSegundo = $notaMediaSegundo;
        $this->calificacionTFG = $calificacionTFG;
        $this->calificacionFFEOE = $calificacionFFEOE;
    }  

    public function superaCurso(Primero $alumno): string{

        $superaPrimero = $alumno->superaCurso();

        if (($superaPrimero === "supera") && 
        ($this->notaMediaSegundo >= 5) && 
        ($this->calificacionTFG >= 5) &&
        ($this->calificacionFFEOE === "supera")) {
            $texto = "supera";
        } else {
            $texto = "no supera";
        }

        return $texto;

    }

}

?>