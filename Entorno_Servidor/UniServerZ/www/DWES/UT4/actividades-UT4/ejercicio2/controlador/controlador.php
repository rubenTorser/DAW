<?php

require_once('../modelo/Inmobiliaria.php');

if(!empty($_POST['superficie']) && !empty($_POST['orientacion']) && !empty($_POST['banos']) && !empty($_POST['habitaciones']))
    {

    echo 'Los datos son correctos';

    }
else
    {

        $error='Los datos no son correctos';
        header("location: ../vista/salidaError.php?r=$error");

    }

?>