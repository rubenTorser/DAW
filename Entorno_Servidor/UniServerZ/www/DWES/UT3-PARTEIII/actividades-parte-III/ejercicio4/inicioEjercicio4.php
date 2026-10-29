<?php

require_once __DIR__ . '/Joven.php';
require_once __DIR__ . '/Adulto.php';

/*******
PREPARAREMOS LOS CASOS DE COMPROBACIÓN
Crearemos jóvenes de distintas edades y adultos con distintas profesiones y empresas.
Comprobaremos las condiciones de las ayudas y de los mensajes.
*******/
$joven18 = new Joven(1, 18);
$joven17 = new Joven(2, 17);
$profesorCentro = new Adulto('Ana', 'profesor', 'CIFP Juan de Colonia');
$profesorOtraEmpresa = new Adulto('Luis', 'profesor', 'Otro centro');
$otraProfesion = new Adulto('Marta', 'administrativo', 'CIFP Juan de Colonia');

/*******
ACCEDEREMOS A LA CONSTANTE Y AL VALOR ESTÁTICO
Consultaremos la constante desde la clase padre, las hijas y un objeto.
Incrementaremos el valor desde las tres clases y comprobaremos el valor compartido.
*******/
echo 'Constante heredada<br>';
echo 'Abstracta::CONSTANTE: ' . Abstracta::CONSTANTE . '<br>';
echo 'Joven::CONSTANTE: ' . Joven::CONSTANTE . '<br>';
echo 'Adulto::CONSTANTE: ' . Adulto::CONSTANTE . '<br>';
echo '$joven18::CONSTANTE: ' . $joven18::CONSTANTE . '<br>';

echo '<br>Variable y método estáticos<br>';
echo 'Valor inicial, Abstracta::$valor: ' . Abstracta::$valor . '<br>';

Abstracta::modificar_static();
echo 'Tras Abstracta::modificar_static(), Joven::$valor: ' . Joven::$valor . '<br>';

Joven::modificar_static();
echo 'Tras Joven::modificar_static(), Adulto::$valor: ' . Adulto::$valor . '<br>';

Adulto::modificar_static();
echo 'Tras Adulto::modificar_static(), Abstracta::$valor: ' . Abstracta::$valor . '<br>';

/*******
COMPROBAREMOS LOS MÉTODOS DE LOS OBJETOS
Llamaremos a los métodos implementados y al método público heredado otros().
Mostraremos las cadenas vacías entre corchetes para distinguir los casos sin resultado.
*******/
echo '<br>Jóvenes<br>';
echo 'Ayuda del joven de 18 años: [' . $joven18->ayudas() . ']<br>';
echo 'Ayuda del joven de 17 años: [' . $joven17->ayudas() . ']<br>';
echo 'Mensaje del joven de 18 años: ' . $joven18->mensaje() . '<br>';
echo 'Mensaje del joven de 17 años: ' . $joven17->mensaje() . '<br>';
echo 'Otros, desde Joven: ' . $joven18->otros() . '<br>';

echo '<br>Adultos<br>';
echo 'Ayuda del profesor del CIFP Juan de Colonia: [' . $profesorCentro->ayudas() . ']<br>';
echo 'Mensaje del profesor del CIFP Juan de Colonia: [' . $profesorCentro->mensaje() . ']<br>';
echo 'Ayuda del profesor de otro centro: [' . $profesorOtraEmpresa->ayudas() . ']<br>';
echo 'Mensaje del profesor de otro centro: [' . $profesorOtraEmpresa->mensaje() . ']<br>';
echo 'Ayuda de otra profesión en el CIFP Juan de Colonia: [' . $otraProfesion->ayudas() . ']<br>';
echo 'Mensaje de otra profesión en el CIFP Juan de Colonia: [' . $otraProfesion->mensaje() . ']<br>';
echo 'Otros, desde Adulto: ' . $profesorCentro->otros() . '<br>';
