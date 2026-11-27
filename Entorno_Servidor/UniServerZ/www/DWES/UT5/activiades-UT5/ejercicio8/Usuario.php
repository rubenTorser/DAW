<?php

class Usuario {
    private string $usuario;
    private string $contrasena;

    public function __construct(string $usuario, string $contrasena){
        $this->usuario = $usuario;
        $this->contrasena = $contrasena;
    }

    public function __get($propiedad){
        return $this->$propiedad;
    }

}

?>