/*3. Crea una función truncar(str, maxLong) que verifique la longitud de str y, si excede 
maxLong – reemplaza el final de str con el carácter de puntos suspensivos "…", para hacer
su longitud igual a maxLong. El resultado de la función debe ser la cadena truncada (si es
necesario). 
Por ejemplo: 
truncar("Lo que me gustaría contar sobre este tema es:", 20) = "Lo que me
gustaría c…"
 
truncar("Hola a todos!", 20) = "Hola a todos!"*/

function truncar(str, maxLong){

    let longitud=str.length;

    if(longitud>maxLong){

        let recortado=str.slice(0,maxLong)+'...';

        console.log(recortado);

    }
    else{
        console.log(str);
    }

}


truncar('murcielago',5);
truncar('murcielago',25);