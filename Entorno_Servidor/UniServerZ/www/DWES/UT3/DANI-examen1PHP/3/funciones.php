<?php
    function horasCreado(string $horaCreacion, string $fechaCreacion, string &$horas): void {
        $h = explode(':', $horaCreacion);
        $f = explode('-', $fechaCreacion);
        $creado = mktime($h[0], $h[1], $h[2], $f[0], $f[1], $f[2]);

        $tiempoCreado = time() - $creado;
        $horas = (int)($tiempoCreado / (60 * 60));
    }
?>