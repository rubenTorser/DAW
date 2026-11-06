<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="cache-control" content="no-cache">
	<title> Ejercicio 1</title>
</head>
<body>
<p align="center"><font size="+2" color="blue"><b> CIFP JUAN DE COLONIA <br> DATOS ALUMNO</b> </font></p>
<br>
<form action="../controler/controlador.php" method="POST">
			<table border="1" cellspacing="5" cellpadding="10" align="center">
				<tr>	
					<td align="left">
						Ciclo:
						<select name="ciclo"><br>
							<option>SMR</option>
							<option>ASIR</option>
							<option>DAW</option>
							<option>DAM</option>
						</select>	
												
					</td>
					<td align="left">
						Curso:<br>
						<input type="radio" name="curso" value=1>Primero
						<input type="radio" name="curso" value=2>Segundo<br>
					</td>	
					</tr>
					<tr>
					<td colspan="2"align="left">
					<br><br>Otros:<br>
						<input type="checkbox" name="otros[delegado]" />Delegado<br>
						<input type="checkbox" name="otros[menor]" /> Menor de edad<br>
						<input type="checkbox" name="otros[transporte]" /> Transporte escolar<br>
						<br><br>											
					</td>
				</tr>
				<tr>
					<td colspan="2" align="center" bgcolor="blue">
						<input type="reset" name="borrar" value="Eliminar Datos">
						<input type="submit" name="enviar" value="Seguir">
					</td>	
				</tr>		
			</table>	
		</form>
</body>
</html>		
		