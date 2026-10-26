<?php

class Segundo extends AlumnoFFE
{
    protected float $notaMediaSegundo = 0;

    protected string $calificacionFFEOE= "";

    protected float $calificacionTFG = 0;

    protected $notasAlumnoPrimero = [4, 3, 2, 5, 1];

    public function __construct($nombre, $edad, float $notaMediaSegundo, float $calificacionTFG, string $calificacionFFEOE)
    {
        parent::__construct($nombre, $edad);
        $this->notaMediaSegundo = $notaMediaSegundo;
        $this->calificacionTFG = $calificacionTFG;
        $this->calificacionFFEOE = $calificacionFFEOE;
    }  

    public function superaCurso(): string{

        $al1=new Primero("Juan", 20, $this->notasAlumnoPrimero); // Crear un objeto de la clase Primero con las calificaciones de los módulos de primero

        $superaPrimero = $al1->superaCurso();

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