<?php

/*****************************************************************

8. Construir una array bidimensional con información sobre, animales. 
De los animales recogerá información sobre los domésticos y los 
salvajes (tres animales domésticos y cuatro salvajes; de cada uno 
de los salvajes, denonimación y hábitat).
- Muestra el array con var_dump().
- Recorre el array y muestra su información lo más legible que sepas.

*****************************************************************/

$animales = [

    'domésticos' => ['Perro', 'Gato', 'Conejo'],

    'salvajes' => [
        'Tigre' => 'Selva',
        'León' => 'Sabana',
        'Oso' => 'Bosque',
        'Lobo' => 'Montaña'
    ]

];

// - Muestra el array con var_dump().

var_dump($animales);


echo "<br><br>";


// - Recorre el array y muestra su información lo más legible que sepas.

foreach ($animales as $tipoAnimal => $animalesDelTipo) {

    echo "<br><h3>Animales $tipoAnimal: </h3>";

    if ($tipoAnimal == 'domésticos') {
        foreach ($animalesDelTipo as $animal) {
            echo "- $animal <br>";
        }
    } else {
        foreach ($animalesDelTipo as $animal => $habitat) {
            echo "- $animal (Hábitat: $habitat) <br>";
        }
    }

}
?>