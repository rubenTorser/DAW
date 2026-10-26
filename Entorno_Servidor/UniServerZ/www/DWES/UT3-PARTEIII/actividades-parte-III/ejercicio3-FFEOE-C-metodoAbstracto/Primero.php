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

    /****************************************************
    FUNCIONAMIENTO DE ARRAYITERATOR
    ArrayIterator es una clase de la SPL (Standard PHP
    Library) que permite recorrer un array mediante un
    objeto. Al crearlo con new ArrayIterator($array)
    trabaja sobre una copia del array y usa un puntero
    interno que empieza en el primer elemento.

    Métodos principales:
    - count():   devuelve el número de elementos.
    - current(): devuelve el valor del elemento al que
                 apunta el puntero.
    - key():     devuelve la clave del elemento actual.
    - next():    mueve el puntero al siguiente elemento.
    - valid():   indica si quedan elementos por recorrer
                 (devuelve false al llegar al final).
    - rewind():  vuelve a poner el puntero al principio.

    En este método, el bucle for da tantas vueltas como
    calificaciones hay (count()). En cada vuelta se suma
    la nota actual (current()) y se avanza a la
    siguiente (next()). Al terminar, la suma se divide
    entre el número de notas para obtener la media.

    Como implementa la interfaz Iterator, también se
    puede recorrer directamente con foreach.
    ****************************************************/
    public function calcularMedia(): float
    {
        $media=0;
        $iterador=new ArrayIterator($this->calificaciones);
        for($i=0;$i<$iterador->count();$i++){
            $media+=$iterador->current();
            $iterador->next();
        }

        $media=$media/$iterador->count();
        return $media;
    }

    /****************************************************
    MISMO MÉTODO CON FOREACH (CLAVE => VALOR)
    foreach hace automáticamente el trabajo de rewind(),
    valid(), current(), key() y next(), así que no hace
    falta mover el puntero a mano. En cada vuelta,
    $clave recibe la clave del elemento (0, 1, 2...) y
    $nota su valor.

    public function calcularMedia(): float
    {
        $media=0;
        $iterador=new ArrayIterator($this->calificaciones);
        foreach ($iterador as $clave => $nota) {
            $media+=$nota;
        }

        $media=$media/$iterador->count();
        return $media;
    }
    ****************************************************/

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
