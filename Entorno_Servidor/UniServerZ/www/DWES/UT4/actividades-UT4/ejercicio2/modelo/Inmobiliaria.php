<?php

class Inmobiliaria {

    CONST PRECIO_BASE = 50000;

    private $superficie;

    private $banos;

    private $orientacion;

    private $habitaciones;

    public function __construct($superficie, $banos, $orientacion, $habitaciones) {
        $this->superficie = $superficie;
        $this->banos = $banos;
        $this->orientacion = $orientacion;
        $this->habitaciones = $habitaciones;
    }

    public function calcularPrecio() : int {
        
        $precio = self::PRECIO_BASE;

        // Ajuste por superficie
        switch ($this->superficie) {
            case 0: // <50 m2
                $precio += 30000; // Superficie base 30000 €
                break;
            case 1: // Entre 50 y 80 m2
                $precio += 20000; // 20000 € adicionales
                break;
            case 2: // Entre 80 y 100 m2
                $precio += 20000; // 20000 € adicionales
                break;
            case 3: // >100 m2
                $precio += 20000; // 20000 € adicionales
                break;
        }

        // Ajuste por número de baños
        $precio += ($this->banos) * 10000; // Cada baño adicional aumenta el precio en 10000

        // Ajuste por orientación
        if ($this->orientacion === 'n') {
            $precio += 10000; // Aumento de 10000 € para orientación Norte
        } elseif ($this->orientacion === 's') {
            $precio += 20000; // Aumento de 20000 € para orientación Sur
        }

        // Ajuste por número de habitaciones
        $precio += ($this->habitaciones) * 20000; // Cada habitación adicional aumenta el precio en 20000

        // Ajuste por número de dormitorios
        if($this->habitaciones == 1){
                $precio -= 3000; // Descuento de 3000 € si hay solo 1 dormitorio
        }

        return $precio;
    }

    public function getSuperficie() {
        return $this->superficie;
    }

    public function getBanos() {
        return $this->banos;
    }

    public function getOrientacion() {
        return $this->orientacion;
    }

    public function getHabitaciones() {
        return $this->habitaciones;
    }


}

?>