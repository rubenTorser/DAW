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

    $domesticos = ['Perro', 'Gato', 'Conejo'],

    'salvajes' => [
        'Tigre' => 'Selva',
        'León' => 'Sabana',
        'Oso' => 'Bosque',
        'Lobo' => 'Montaña'
    ]

];


var_dump($animales);
?>