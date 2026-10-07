<?php

/******************************************************************

4.  A partir del array indexado de la actividad 4 (UT3_PARTE I) 
    diseña una librería de funciones asociadas a los apartados de 
    la actividad. Invoca a las funciones desde otro script. 

******************************************************************/

require_once "./funciones.php";

$arrayDeNumeros = [5, -1, 3, -9, 7];

//Apartado A: Muestra el número de componentes negativas
$cantidadDeNegativos = 0;
contarNegativos($arrayDeNumeros, $cantidadDeNegativos);
echo "$cantidadDeNegativos <br><br>";


//Apartado B: Muestra la media de las componentes
echo calcularMedia($arrayDeNumeros);


//Apartado C: Visualiza las posiciones del array en las que se almacene como valor el cuadrado de su posición.
$resultado = "";
mostrarPosicionesCuadrado($arrayDeNumeros, $resultado);
echo "<br><br>" . $resultado;


//Apartado D: Visualizar el array en orden invertido
mostrarArrayInvertido($arrayDeNumeros, $resultado);
echo "<br> El array en orden invertido es: " . $resultado . "<br>";


//Apartado E: Crear un nuevo array con el doble de los componentes del primer array
$dobleDeComponentes = [];
crearArrayDoble($arrayDeNumeros, $dobleDeComponentes);

echo "<br> El array con el doble de los componentes es: ";

for ($i = 0; $i < count($dobleDeComponentes); $i++) {

    echo $dobleDeComponentes[$i] . " ";

}

echo "<br>";


//Apartado F: Incrementar en dos los componentes del array original y calcular de nuevo su media
incrementarComponentesEnDos($arrayDeNumeros);
$mediaDeComponentes = calcularMedia($arrayDeNumeros);
echo "<br> La media de los componentes incrementados en dos es de: $mediaDeComponentes <br>";


?>
