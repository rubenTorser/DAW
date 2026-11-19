<?php

session_start();

echo 'El número aleatorio fue... ' . $_SESSION['numAlt'] . '<br>';
echo 'El usuario fue ... ' . $_SESSION['nombre'] . '<br>';
echo 'Los usuarios válidos son: ';

for($i = 0; $i < count($_SESSION['usuarios']); $i++) {

    if($i == count($_SESSION['usuarios']) - 1) {
        echo $_SESSION['usuarios'][$i] . '.';
    }
    else{
        echo $_SESSION['usuarios'][$i] . ', ';
    }
    
}

echo '<br>';

if($_SESSION['nombre']=='Antonio')
{

    echo '¡¡PREMIO!! por ser tú <br>';

}
else
{
    echo 'y no has conseguido el premio. <a href="inicio.php">Intentalo de nuevo</a> <br>';
}

?>