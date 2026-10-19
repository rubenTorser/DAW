/**************************************************

33. Crea una función mismoOrigen(url1, url2) que
devuelva true si las dos URL tienen el mismo
protocolo, dominio y puerto, y false si no.
Puedes reutilizar descomponerURL del ejercicio 32.

Las rutas pueden ser distintas sin cambiar el
origen. Si no aparece el puerto, se utiliza el
puerto por defecto: "80" para http y "443" para https.

**************************************************/

/**************************************************
ORIGEN: PROTOCOLO, DOMINIO Y PUERTO

El PDF explica que dos páginas tienen el mismo
origen si coinciden su protocolo, dominio y puerto.
Este criterio permite la comunicación entre sus
ventanas y determina si comparten localStorage.

descomponerURL(url), definida en el ejercicio 32,
separa la cadena con métodos de String y devuelve
[protocolo, dominio, puerto, path]. También asigna
el puerto por defecto cuando la URL no lo incluye.

Comparamos las tres primeras posiciones de ambos
arrays. El path no interviene en la comparación.
Esta función no navega ni modifica objetos BOM.
**************************************************/
function mismoOrigen(url1, url2) {
    let partes1 = descomponerURL(url1);
    let partes2 = descomponerURL(url2);

    return partes1[0] === partes2[0] &&
        partes1[1] === partes2[1] &&
        partes1[2] === partes2[2];
}
