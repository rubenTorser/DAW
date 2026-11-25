<?php

if(isset($_POST['enviar'])){

    if(isset($_POST['examen'])) {

        if($_POST['examen']==1){
            setcookie('examen', 'Realizada', time() + 3600);
        }

    }

    die("FIN DE EJECUCIÓN");
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ejercicio 7 - Control de pruebas</h1>
    <h2>¿Qué pruebas has realizado hasta el momento?</h2>
    <form action="" method="POST">
        <table border="1px">
            <tr>
                <td>Examen</td><td>Realizada</td><td><input type="checkbox" name="examen" value="1"></td>
            </tr>
            <tr>
                <td colspan="3" align="center"><input type="submit" name="enviar" value="Enviar"></td>
            </tr>
        </table>
    </form>
</body>
</html>
