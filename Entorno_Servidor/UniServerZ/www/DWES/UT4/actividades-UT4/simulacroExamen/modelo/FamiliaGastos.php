<?php

require_once __DIR__ . '/Familia.php';

class FamiliaGastos extends Familia
{
    private $anio;
    private $mes;
    private $gasto;

    public function __construct($ingresos, $miembros, $anio, $mes, array $gasto)
    {
        parent::__construct($ingresos, $miembros);
        $this->anio = $anio;
        $this->mes = $mes;
        $this->gasto = $gasto;
    }

    public function calcularTotalGastos(): int
    {
        return array_sum($this->gasto) * $this->miembros;
    }

    public function calcularAhorro(&$ahorro): void
    {
        $ahorro = round($this->ingresos - $this->calcularTotalGastos(), 2);
    }
}
