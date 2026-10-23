<?php
    function abreviar(array $arrayPlat): array {
        $devolucion=[];
        for($i=0; $i<count($arrayPlat); $i++) {
            $abreviacion="";
            for($j=0; $j<count($arrayPlat[$i]); $j++) {
                $abreviacion .= $arrayPlat[$i][$j][0];
            }
            $devolucion[$i] = $abreviacion;
        }
        return $devolucion;
    }
?>