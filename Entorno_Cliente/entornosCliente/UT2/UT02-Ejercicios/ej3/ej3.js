let nombre = "Jose";
alert( `Hola ${1}` );
alert( `Hola ${"nombre"}` );
alert( `Hola ${nombre}` );


/*

*****************************RESPUESTAS*****************************

    -3.	Piensa cuál será la salida de los siguientes comandos. 
    Después, compruébalo si es correcto y si entiendes cuál es el 
    motivo de ese resultado.
        *El primer alert mostrará "Hola 1" ya que el valor dentro de 
         las llaves es un número literal.
        *El segundo alert mostrará "Hola nombre" ya que el valor dentro
         de las llaves es un string literal.
        *El tercer alert mostrará "Hola Jose" ya que el valor dentro de
         las llaves es una variable que contiene el string "Jose".

********************************************************************

*/