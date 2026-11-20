<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Probar Galleta</h1>
    <?php

        if(isset($_COOKIE["prueba"])){
            echo "Estoy activa";
            echo "Valor de la galleta: " . $_COOKIE["prueba"];
        }
        else{
            echo "No estoy activa";
        }

    ?>
</body>
</html>