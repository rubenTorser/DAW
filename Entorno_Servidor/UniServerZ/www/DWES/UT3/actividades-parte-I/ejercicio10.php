<?php

/**********************************************************

10. Es preciso llevar un control sobre la edad de los alumnos matriculados en los Ciclos Formativos de la familia
de Informática y Comunicaciones del CIFP Juan de Colonia. Interesa recoger de cada ciclo:
- Nº de alumnos menores de edad.
- Nº de alumnos entre 18 y 22.
- Nº de alumnos mayores de 22.
- ¿En algún ciclo solo hay alumnos entre 18 y 22 años? Indica si de da está situación con un mensaje.

**********************************************************/

// Datos de ejemplo: cada ciclo guarda las edades de sus alumnos.
$ciclos = [

    'SMR' => [16, 17, 18, 19, 20],
    'DAW' => [18, 19, 20, 21, 22],
    'DAM' => [17, 18, 22, 23, 25],
    'ASIR' => [19, 21, 22, 24, 30]

];

$hayCicloSoloEntre18Y22 = false;

/*
    - Nº de alumnos menores de edad.
    - Nº de alumnos entre 18 y 22.
    - Nº de alumnos mayores de 22.
*/

foreach ($ciclos as $ciclo => $edades) {

    // Reiniciamos los contadores para contar solo los alumnos de este ciclo.
    $menoresDeEdad = 0;
    $entre18Y22 = 0;
    $mayoresDe22 = 0;

    foreach ($edades as $edad) {

        if ($edad < 18) {
            $menoresDeEdad++;
        } elseif ($edad <= 22) {
            // Si llegamos aquí, la edad está entre 18 y 22, ambos incluidos.
            $entre18Y22++;
        } else {
            $mayoresDe22++;
        }

    }

    echo "<h3>Ciclo $ciclo:</h3>";
    echo "Nº de alumnos menores de edad: $menoresDeEdad <br>";
    echo "Nº de alumnos entre 18 y 22: $entre18Y22 <br>";
    echo "Nº de alumnos mayores de 22: $mayoresDe22 <br>";

    // Debe haber alumnos entre 18 y 22 y ninguno fuera de ese grupo.
    if ($entre18Y22 > 0 && $menoresDeEdad == 0 && $mayoresDe22 == 0) {
        $hayCicloSoloEntre18Y22 = true;
        echo "En el ciclo $ciclo solo hay alumnos entre 18 y 22 años. <br>";
    }

}

// Si ningún ciclo cumple la condición, también lo indicamos con un mensaje.
if (!$hayCicloSoloEntre18Y22) {
    echo "<br>No hay ningún ciclo con alumnos únicamente entre 18 y 22 años.";
}

?>