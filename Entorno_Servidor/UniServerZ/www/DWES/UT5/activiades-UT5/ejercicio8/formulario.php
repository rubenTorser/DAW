<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8 - Login</title>
</head>
<body>
    <h1 align="center">Iniciar sesión: Usuario y Contraseña</h1>
    <form action="./inicio.php" method="POST">
        <table border="1px" align="center">
            <tr>
                <td>
                <label for="username">Usuario:</label>
                <input type="text" name="usuario" required>
                </td>
            </tr>
            <tr>
                <td>
                <label for="password">Contraseña:</label>
                <input type="password" name="contrasena" required>
                </td>
            </tr>
            <tr>
                <td align="center">
                <input type="submit" name="enviar" value="Iniciar sesión">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>