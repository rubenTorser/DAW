/*******************************************************************

3.	Crea una función truncar(str, maxLong) que verifique la longitud 
    de str y, si excede maxLong – reemplaza el final de str con el 
    carácter de puntos suspensivos "…", para hacer su longitud igual a 
    maxLong. El resultado de la función debe ser la cadena truncada 
    (si es necesario).

Por ejemplo:
truncar("Lo que me gustaría contar sobre este tema es:", 20) = "Lo que me gustaría c…"

truncar("Hola a todos!", 20) = "Hola a todos!"


*******************************************************************/

"use strict";

function truncar(str, maxLong) {

    if (str.length > maxLong) {
        str = str.substring(0, maxLong) + "…";
    }

    return console.log(str);

}


truncar("Lo que me gustaría contar sobre este tema es:", 20);