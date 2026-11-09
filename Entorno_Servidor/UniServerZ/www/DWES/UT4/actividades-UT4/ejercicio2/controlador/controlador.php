<?php

require_once('../modelo/Inmobiliaria.php');

if(!empty($_POST['superficie']) && $_POST['orientacion'] && $_POST['banos'] && $_POST['habitaciones'])
    {



    }
else
    {

        $error='Los datos no son correctos';
        header("location: ../vista/salidaError.php?r=$error");

    }

?>