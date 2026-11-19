<?php

require_once('../modelo/Inmobiliaria.php');

if (isset($_POST['enviar'])){

    if(isset($_POST['superficie'], $_POST['orientacion'], $_POST['banos'], $_POST['habitaciones'])
        && $_POST['superficie'] !== '' && $_POST['orientacion'] !== '')
        {

            $casa= new Inmobiliaria($_POST['superficie'], $_POST['banos'], $_POST['orientacion'], $_POST['habitaciones']);
            $precio= $casa->calcularPrecio();
            header("location:../vista/salida.php?r=$precio"); 
        }
    else
        {

            $error='Los datos no son correctos';
            header("location: ../vista/salidaError.php?r=$error");

        }

}
?>