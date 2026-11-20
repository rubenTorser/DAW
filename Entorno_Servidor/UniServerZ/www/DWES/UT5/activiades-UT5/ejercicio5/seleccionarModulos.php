<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Selecciona el Módulo en el que deseas inscribirte</h1>
    <table>
        <tr>
            <td><h3>DAM</h3></td>
            <td><input type="button" value="Inscribirse" <?php
             setcookie("dam", "DAM", time() + 3600, "/");
            ?>>
            
            </td>
        </tr>
    </table>
</body>
</html>

