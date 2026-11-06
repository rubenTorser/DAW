<?php

class DatosAlumno {
	
static public function visualizar(string $ci,int $cu, array $array ):string
{
	$mensaje="Ciclo: ".$ci." Curso: ".$cu." Servicios: ";

	foreach ($array as $key =>$valor)
	{
		if($valor)
		{
			$mensaje.=$key.", ";
		}
	}
	
	return $mensaje;
}

}//fin de la clase
?>