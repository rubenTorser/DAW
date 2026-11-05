<?php

echo $_POST['usuario'] . " Has llegado a la página<br>";

if ($_POST["contrasena"] == "12345") {
    echo "Acceso permitido. El turno seleccionado es: " . $_POST["turno"];
    var_dump($_POST["modulos"]);
    var_dump($_POST["ciclo"]);
} else {
    echo "Acceso denegado";
}

?>