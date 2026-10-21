<?php

class Alumno
{

    /***********************************************************
     ATRIBUTOS DE LA CLASE:

     CICLO es una constante de clase: su valor es "DAW" y no cambia.
     Pertenece a la clase y se puede consultar sin crear un objeto
     mediante Alumno::CICLO. Dentro de la clase usamos self::CICLO.

     $nombre y $edad son atributos de cada objeto: cada alumno
     tendrá sus propios valores. Al ser private, solo se accede
     directamente a ellos desde dentro de la clase. En este ejemplo,
     __get y __set permiten leerlos y modificarlos desde fuera.

     Estos dos atributos no tienen un tipo declarado; los tipos
     string e int se indican en los parámetros de constructAlumno
     y también en los del constructor que ahora está comentado.
    ***********************************************************/
    const CICLO = "DAW";
    const tasa_matricula = 2;
    private string $nombre;
    private int $edad;

    static int $nMatricula = 0;

    private string $matricula;



    /***********************************************************
     MÉTODO CONSTRUCTOR: __construct

     En este archivo, el constructor está comentado y no se ejecuta.
     Por eso podemos crear el objeto con new Alumno() y asignarle
     los datos después mediante constructAlumno. Hasta asignarlos,
     los atributos $nombre y $edad tienen el valor null.
     La explicación siguiente corresponde al constructor activo:

     PHP lo ejecuta automáticamente al crear un objeto con new.
     Recibe el nombre como string y la edad como int, y los guarda
     en los atributos del nuevo alumno. No comprueba si la edad
     es positiva: indicar int solo establece el tipo del parámetro.

     $this representa el objeto actual. Por eso, $this->nombre
     es su atributo, mientras que $nombre es el parámetro recibido.
     Lo mismo sucede con $this->edad y $edad.

     Uso: $alumno = new Alumno("Ana", 20);
     Crea un alumno con sus datos iniciales, sin asignarlos después
     uno por uno. Este método no devuelve un valor.
    ***********************************************************/
    function __construct(string $nombre, int $edad)
    {

        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->matricula = "M-" . $this->incrementarMatricula();


    }

    /*************************************************************
     MÉTODO CONSTRUCTOR PERSONALIZADO: constructAlumno

     Es un método public, por lo que podemos llamarlo desde fuera
     de la clase. Sirve para guardar el nombre y la edad después
     de crear el objeto, cuando ya disponemos de esos datos.

     constructAlumno es un nombre elegido por nosotros. PHP solo
     reconoce __construct como constructor automático; este método
     se ejecuta cuando lo llamamos expresamente.

     Uso:
     $alumno = new Alumno();
     $alumno->constructAlumno("Ana", 20);

     La primera instrucción crea el objeto. La segunda llama al
     método sobre ese mismo objeto y le entrega los dos datos.
     $this->nombre = $nombre guarda el nombre recibido en el alumno
     actual; $this->edad = $edad hace lo mismo con su edad.

     string e int establecen los tipos de los parámetros recibidos.
     El método no comprueba, por ejemplo, si la edad es positiva.
     Podemos volver a llamarlo para sustituir ambos datos del alumno.
     Al no tener return, devuelve null de forma implícita; su utilidad
     es modificar los atributos del objeto con los valores recibidos.
    *************************************************************/
    /*public function constructAlumno(string $nombre, int $edad)
    {

        $this->nombre = $nombre;
        $this->edad = $edad;

    }*/


    /***********************************************************
     MÉTODO MÁGICO DE LECTURA: __get

     PHP lo llama automáticamente al intentar leer desde fuera
     un atributo inaccesible, como uno private, o inexistente.
     $atributo recibe el nombre del atributo como una cadena.

     Uso: echo $alumno->nombre;
     PHP llama a __get con "nombre" y $this->$atributo equivale
     entonces a $this->nombre. El método devuelve su valor.

     mixed indica que el valor devuelto puede ser de cualquier tipo,
     por ejemplo, el nombre como texto o la edad como número.
     Sirve para consultar los datos sin declararlos public.
     Aquí no se comprueba si el atributo existe; debemos usar
     nombres definidos en la clase para evitar avisos al leerlos.
    ***********************************************************/
    function __get(string $atributo): mixed
    {

        return ($this->$atributo);

    }


    /***********************************************************
     MÉTODO MÁGICO DE ESCRITURA: __set

     PHP lo llama automáticamente al intentar asignar desde fuera
     un valor a un atributo inaccesible, como uno private,
     o inexistente. Recibe su nombre y el nuevo valor.

     Uso: $alumno->edad = 21;
     $atributo recibe "edad" y $valor recibe 21. La asignación
     $this->$atributo = $valor cambia la edad del objeto actual.

     mixed permite recibir cualquier tipo de valor y void indica
     que el método no devuelve ningún valor. Sirve para actualizar
     los datos sin declararlos public. Aquí no se valida el valor
     ni se comprueba el nombre: usaremos "nombre" o "edad".
     El tipo int del parámetro de constructAlumno no obliga a que
     las asignaciones posteriores de edad mediante __set sean
     enteros, porque el atributo $edad no tiene un tipo declarado.
    ***********************************************************/
    function __set(string $atributo, mixed $valor): void
    {

        $this->$atributo = $valor;

    }


    /***********************************************************
     MÉTODO MÁGICO DE CONVERSIÓN A TEXTO: __toString

     PHP lo llama automáticamente cuando el objeto se usa como
     texto, por ejemplo, al hacer echo $alumno; o (string) $alumno.
     Debe devolver una cadena, como indica el tipo string.

     Une con el operador punto el nombre, la edad y el ciclo.
     $this-> accede a los atributos del alumno actual y self::CICLO
     accede a la constante de la clase.

     Uso: echo $alumno;
     Si el alumno se llama Ana y tiene 20 años, muestra:
     Nombre: Ana Edad: 20 Ciclo: DAW
     Sirve para obtener una representación legible del objeto.
     El método devuelve el texto; el echo es quien lo muestra.
    ***********************************************************/
    function __toString(): string
    {

        return "Nombre: " . $this->nombre . " Edad: " . $this->edad . " Ciclo: " . self::CICLO;

    }



    static function incrementarMatricula(): int
    {
        return self::$nMatricula++;

    }



    function esMenor(): bool
    {

        $esMenor = false;

        if ($this->edad < 18) {
            $esMenor = true;
        }

        return $esMenor;

    }


    function importeMatricula(): float
    {

        $importeMatricula = 0;

        if ($this->esMenor()) {

            $importeMatricula = 0;

        } else {
            $importeMatricula = self::tasa_matricula;
        }

        return $importeMatricula;

    }

}

?>