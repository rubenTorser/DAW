<?php

class Primero extends AlumnoFFE {

    protected float $notaMediaPrimero = 0;

    // Guardaremos en un array las calificaciones de los módulos de primero.
    protected array $calificaciones = [];

    public function __construct(string $nombre, int $edad, array $calificaciones)
    {
        parent::__construct($nombre, $edad);
        $this->calificaciones = $calificaciones;
        $this->notaMediaPrimero = $this->calcularMedia();
    }

    public function calcularMedia(): float
    {
        // Si no tenemos calificaciones, devolveremos 0 para evitar dividir entre cero.
        if (count($this->calificaciones) === 0) {
            return 0;
        }

        // Sumaremos las notas y dividiremos el resultado entre el número de módulos.
        return array_sum($this->calificaciones) / count($this->calificaciones);
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
