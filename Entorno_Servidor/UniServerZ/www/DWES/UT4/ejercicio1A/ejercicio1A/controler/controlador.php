<?php
require_once("../model/clase_DatosAlumno.php");

if (isset($_POST['enviar']))

	if (!empty($_POST['ciclo']) && !empty($_POST['curso']) && !empty($_POST['otros']))
	    {
			$salida= DatosAlumno::visualizar($_POST['ciclo'],
		    $_POST['curso'],$_POST['otros']);

			header("location:../view/salida.php?r=$salida"); 
		} 
	else
	    {
			$error='Los datos no son correctos';
	    	header("location:../view/salidaError.php?r=$error");
		}

?>	