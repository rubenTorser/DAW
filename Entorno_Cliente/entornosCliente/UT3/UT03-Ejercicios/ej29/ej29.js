/*******************************************************************
 
* Ejercicio 29
29.	Crea una función mostrarUbicacion() que muestre por consola
las partes de la dirección de la página actual: href, origin, 
protocol, hostname, port, pathname, search y hash.

Pruébala con una dirección como 
http://127.0.0.1:5500/ejercicios/pagina.html?id=5&nombre=Ana#final 
(escribe a mano los parámetros y el fragmento en la barra de 
direcciones). Después, prueba con una dirección que no incluya 
el puerto. ¿Qué valor tiene port en ese caso?

*******************************************************************/

function mostrarUbicacion() {

    console.log("URL Completa: " + location.href)
    console.log("Origen: " + location.origin)
    console.log("Protocolo: " + location.protocol)
    console.log("Nombre de host: " + location.hostname)
    console.log("Puerto: " + location.port)
    console.log("Ruta: " + location.pathname)
    console.log("Busqueda (ID): " + location.search)
    console.log("Hash: " + location.hash)

}

mostrarUbicacion();

