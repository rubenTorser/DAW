<?php

if(isset($_COOKIE['test-examen'])){

    $datos = explode("-", $_COOKIE["test-examen"], 2);

    $test = $datos[0];
    $examen = $datos[1];


    if($test=='realizado' && $examen=='realizado'){

        header('Location: ./ok.html');

    }
    else if($test!='realizado' && $examen=='realizado'){

        header('Location: ./formulario_test.php');

    }
    else if($test=='realizado' && $examen!='realizado'){

        header('Location: ./formulario_examen.php');

    }

}
else{

        header('Location: ./formulario.php');

}

?>