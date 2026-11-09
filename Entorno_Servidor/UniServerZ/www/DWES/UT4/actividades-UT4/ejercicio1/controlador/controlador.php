<?php
require_once("../modelo/DatosAlumno.php");

    if (!empty($_POST['ciclo']) && !empty($_POST['curso']) && !empty($_POST['otros']))
        {
            $salida= DatosAlumno::visualizar($_POST['ciclo'],
            $_POST['curso'],$_POST['otros']);

            header("location:../vista/salida.php?r=$salida"); 
        } 
    else
        {
            $error='Los datos no son correctos';
            header("location:../vista/salidaError.php?r=$error");
        }

?>