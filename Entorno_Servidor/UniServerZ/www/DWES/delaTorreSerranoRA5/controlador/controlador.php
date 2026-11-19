<?php

require_once('../modelo/Juego.php');

if (isset($_POST['enviar'])){

    if(isset($_POST['usuario']) && isset($_POST['jugada']) && $_POST['usuario']!=='' && $_POST['jugada']!=='')
        {

            $juego= new Juego($_POST['usuario'], $_POST['jugada']);
            $resultado= $juego->actualizarEstadoDelJuego();
            $nombreUsuario= $juego -> getUsuario();
            $jugadaMaquina= $juego->getJugadaMaquina();
            header("location:../vista/salida.php?r=$resultado&u=$nombreUsuario&j=$jugadaMaquina"); 
        }
    else
        {

            $error='Los datos no son correctos';
            header("location: ../vista/salidaError.php?r=$error");

        }

}