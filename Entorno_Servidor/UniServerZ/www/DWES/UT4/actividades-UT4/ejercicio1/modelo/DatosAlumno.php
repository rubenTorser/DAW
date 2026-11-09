<?php

class DatosAlumno {

    static public function visualizar(string $ciclo, int $curso, array $array):string {

        $mensaje = "Ciclo: ".$ciclo." Curso: ".$curso." Servicios: ";
        
        foreach ($array as $clave=>$valor) {

            if ($valor) {
                $mensaje .= $clave.", ";
            }

        }

        return $mensaje;

    }


}

?>