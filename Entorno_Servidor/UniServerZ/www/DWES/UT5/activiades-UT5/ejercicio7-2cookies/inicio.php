<?php

if(isset($_COOKIE['test']) && isset($_COOKIE['examen'])){

    header('Location: ./ok.html');

}
else{

    if(!isset($_COOKIE['test']) && isset($_COOKIE['examen'])){

        header('Location: ./formulario_test.php');

    }
    else if(isset($_COOKIE['test']) && !isset($_COOKIE['examen'])){

        header('Location: ./formulario_examen.php');

    }
    else if(!isset($_COOKIE['test']) && !isset($_COOKIE['examen'])){

        header('Location: ./formulario.php');

    }

}

?>