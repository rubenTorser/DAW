<?php
include '../libreria/obtenerDatos.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <form action="../controlador/controlador.php" method="POST">
        <table border="1" cellspacing="5" cellpadding="10" align="center" bgcolor="yellow">
            <tr>
                <td allign="left">
                    Superficie (m2):<br>
    <?php
    $superficies=obtenerSuperficies();
    foreach ($superficies as $key => $value) {
        echo '<input type="radio" name="superficie" value='.$key.'> '.htmlspecialchars($value).'<br>';
    }
    ?>

                        <!--<input type="radio" name="superficie"> &lt;50 m2<br>
                        <input type="radio" name="superficie"> Entre 50 y 80 m2<br>
                        <input type="radio" name="superficie"> Entre 80 y 100 m2<br>
                        <input type="radio" name="superficie"> &gt;100 m2 -->
                </td>
                <td allign="left">
                    Orientación:<br>
    <?php
    $orientaciones=obtenerOrientaciones();
    foreach ($orientaciones as $key => $value) {
        echo '<input type="radio" name="orientacion" value='.strtolower(substr($value, 0, 1)).'> '.htmlspecialchars($value).'<br>';
    }
    ?>
                        <!--<input type="radio" name="orientacion"> Norte<br>
                        <input type="radio" name="orientacion"> Sur<br>-->
                </td>
            </tr>
            <tr>
                <td allign="left">
                    Nº de baños:
                    <select name="banos">
                        <?php
                            $banos=obtenerBanos();
                            
                            for($i= 1; $i<=$banos; $i++){
                                echo '<option value="'.$i.'">'.$i.'</option>';
                            }
                        ?>
                    </select>
                        <!--<select name="banos">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>-->
                </td>
                <td allign="right">
                    Nº de habitaciones:
                       <select name="habitaciones">
                        <?php
                            $habitaciones=obtenerHabitaciones();
                            
                            for($i= 1; $i<=$habitaciones; $i++){
                                echo '<option value="'.$i.'">'.$i.'</option>';
                            }
                        ?>
                        </select> 
                    
                        <!--<select name="habitaciones">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>-->
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" name="enviar" value="Seguir">
                </td>
        </table>
    </form>
</body>
</html>
