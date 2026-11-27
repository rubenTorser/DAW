<?php
include('./Usuario.php');

if(isset($_COOKIE["login"])){

    $login = unserialize($_COOKIE["login"]);

    echo 'Usuario correcto '. $login->usuario. ' Usted ya se logeó exitósamente en otro momento';

}
else if(isset($_POST['enviar'])){

    $usuario = $_POST['usuario'];

    $contrasena = $_POST['contrasena'];

    if($usuario == "admin" && $contrasena == "mjuan"){

        $login = new Usuario($usuario, $contrasena);

        setcookie("login", serialize($login), time() + 3600);

        echo 'Bienvenido ' . $login->usuario. ' Usted se logeó exitósamente';
    
    }
    else{
        echo 'Acceso denegado, usuario o contraseña incorrectos';
    }

}
else{
    header("Location: formulario.php");
}

?>