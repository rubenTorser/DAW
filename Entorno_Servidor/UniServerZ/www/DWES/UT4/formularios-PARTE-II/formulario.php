<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FORMULARIO PARTE II</title>
</head>
<body>
    <h1>FORMULARIO PARTE II</h1>
    <?php
    echo $_GET['aula'] . " Has llegado a la página<br><br>";
    ?>
    <form action="./seguir.php" method="POST">
        Usuario: <input type="text" name="usuario" required><br><br>
        Contraseña: <input type="password" name="contrasena" required><br><br>
        Turno:
        <input type="radio" name="turno" value="mañana" required> Mañana
        <input type="radio" name="turno" value="tarde" required> Tarde
        <input type="radio" name="turno" value="noche" required> Noche<br><br>
        
        Módulos:
        <input type="checkbox" name="modulos[DWES]" value="DWES"> DWES
        <input type="checkbox" name="modulos[DWEC]" value="DWEC"> DWEC
        <input type="checkbox" name="modulos[DAW]" value="DAW"> DAW
        <br><br>

        Ciclos:
        <select name="ciclo" required>
            <option value="">Seleccione un ciclo</option>
            <option value="DAW">DAW</option>
            <option value="DAM">DAM</option>
            <option value="ASIR">ASIR</option>
            <br><br>
        </select>
        
        <input type="submit" value="Enviar">
    </form>
</body>
</html>