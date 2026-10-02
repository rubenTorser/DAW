<?php

/***************************************************************

10. Es preciso llevar un control sobre la edad de los alumnos 
matriculados en los Ciclos Formativos de la familia de 
Informática y Comunicaciones del CIFP Juan de Colonia. 
Interesa recoger de cada ciclo:
- Nº de alumnos menores de edad.
- Nº de alumnos entre 18 y 22.
- Nº de alumnos mayores de 22.
- ¿En algún ciclo solo hay alumnos entre 18 y 22 años? 
Indica si de da está situación con un mensaje.

**************************************************************/

function solo18_22(array $al, ?string &$r): bool
{
    $r = "";
    $situacion = false;//variable para determinar si hay o no ciclos con alumnos sólo entre 18 y 22
    foreach ($al as $ciclo => $numal)
        if ($numal[1] <> 0 && $numal[0] == 0 && $numal[2] == 0) {
            $r .= $ciclo . " ";
            $situacion = true;
        }
    return $situacion;
}
//PRINCIPAL
$alumnos = array(
    'FP BÁSICA' => array(10, 0, 0),
    'SMR' => array(2, 40, 15),
    'ASIR' => array(0, 40, 0),
    'DAW' => array(0, 30, 0),
    'DAM' => array(0, 35, 5)
);
//$resul="";	Al incluir ? en la definición de la función no es necesario inicializar a $resul					
if (solo18_22($alumnos, $resul))
    echo "Los ciclos que solo tienes alumnos entre 18 y 22 son: " . $resul . "<br>";
else
    echo "No hay ciclos que solo tengan alumnos entre 18 y 22 años.";

?>