<?php

/*********************************************************************
DEFINIREMOS EL CONTRATO COMÚN
Compartiremos la constante y el valor estático entre las clases hijas.
Exigiremos la implementación de los métodos ayudas() y mensaje().
**********************************************************************/
abstract class Abstracta
{
    public const CONSTANTE = 'Todos';

    public static int $valor = 1;

    abstract public function ayudas(): string;

    abstract public function mensaje(): string;

    /*********************************************************************
    INCREMENTAREMOS EL VALOR COMPARTIDO
    Sumaremos una unidad al mismo valor desde la clase padre o sus hijas.
    *********************************************************************/
    public static function modificar_static(): void
    {
        self::$valor++;
    }

    public function otros(): string
    {
        return 'Todos sois buena gente';
    }
}
