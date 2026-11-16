<?php

class Juego{

    public int $resultado;

    private string $jugador1;
    private string $jugador2;
    private string $usuario;
    private $jugadas= array('Piedra', 'Papel', 'Tijera');

    public function __construct($usuario, $jugador1){
        $this->usuario=$usuario;
        $this->jugador1=$jugador1;
    }

    public function jugadaAleatoria(){
        $this->jugador2 = rand(0,2);
    }

    public function actualizarEstadoDelJuego(){

      $this->jugar();

      if($this->resultado==0){
        return 'Empate';
      }else if($this->resultado==1){
        return '¡¡¡Has ganado!!!';
      }else{
        return '¡¡¡Te gané!!!';
      }

    }

    public function jugar(){
        $this->jugadaAleatoria();
        if($this->jugador1==$this->jugador2){
            $this->resultado=0;
        }else if(($this->jugador1==0 && $this->jugador2==2) || ($this->jugador1==1 && $this->jugador2==0) || ($this->jugador1==2 && $this->jugador2==1)){
            $this->resultado=1;
        }else{
            $this->resultado=-1;
        }
    }

    public function getUsuario(){
        return $this->usuario;
    }

    public function getJugadaMaquina(){
        return $this->jugadas[$this->jugador2];
    }
}

?>