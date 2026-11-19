
<?php
include '../libreria/datos.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Ejercicio 3: PIEDRA, PAPEL, TIJERA</title>
</head>
<body>
    <form action="../controlador/controlador.php" method="POST">
	<table border="1" cellspacing="5" cellpadding="10" align="center">
                <tr>
                <td colspan="2" align="center">  
                    <b>¡¡¡JUGUEMOS!!! PIEDRA, PAPEL O TIJERA</b>
                </td></tr>    
				<tr>	
					<td align="left">
                        Nickname:<br>
						<input  type="text" name="usuario" required>
					</td>				           										
					<td align="left">
					    Elige una jugada:
						<select name="jugada">
						<?php
							$jugadas=obtenerJugadas();
							for($i= 0; $i<count($jugadas); $i++){
								echo '<option value='.$i.' > '.htmlspecialchars($jugadas[$i]).'</option>';
							}
						?>
						</select>
                    </td>
				</tr>
				<tr>
					<td colspan="2" align="center" bgcolor="f5b017">
						<input type="reset" name="borrar" value="Eliminar Datos">
						<input type="submit" name="enviar" value="Seguir">
					</td>	
				</tr>		
			</table>	
		</form>
    </body>
</html>