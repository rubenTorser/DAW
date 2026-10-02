/*******************************************************************

8.	Crea una función extraeDatos ( dir ) donde dir es una variable 
    que contiene una cadena con el siguiente formato: 
    usuario@dominio:puerto (ej: admin@servidor.com:8080) 
    Escribe un script que muestre por consola el usuario, el dominio 
    y el puerto. Ej en ejemplo anterior mostraría:

        Usuario: admin
        Dominio: servidor.com
        Puerto: 8080

    Importante: debes utilizar métodos de tipo String. No hay que 
    comprobar el formato de dir, suponemos que es correcto.

*******************************************************************/

"use strict";

let dir = "ruben@delatorre.com:8080";

function extraerDatos(dir) {

    let usuario = dir.substring(0, dir.indexOf("@"));
    let dominio = dir.substring(dir.indexOf("@") + 1, dir.indexOf(":"));
    let puerto = dir.substring(dir.indexOf(":") + 1);

    console.log("Usuario: " + usuario);
    console.log("Dominio: " + dominio);
    console.log("Puerto: " + puerto);

}

extraerDatos(dir);