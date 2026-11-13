/**************************************************

32. Crea una función descomponerURL(url) que reciba
una URL y devuelva un array de cadenas con el
protocolo, el dominio, el puerto y el path, en ese
orden. Utiliza métodos de String, sin el objeto URL.
La URL tiene el formato protocolo://dominio:puerto/path.

Ampliación: si no aparece el puerto, devuelve "80"
para http y "443" para https.

**************************************************/

/**************************************************
STRING: DESCOMPONER UNA URL

La URL recibida es una cadena. indexOf() localiza
los separadores y devuelve -1 si no los encuentra.
slice() extrae el texto entre dos posiciones, sin
incluir la posición final; si no indicamos el final,
extrae hasta el final de la cadena.

Primero separamos el protocolo de "://". Después
obtenemos el dominio y el puerto hasta la primera
barra, conservando el resto como path completo.
Si no hay ":" entre dominio y puerto, asignamos
el puerto por defecto según el protocolo.

toLowerCase() pasa el protocolo y el dominio a
minúsculas para poder compararlos en el ejercicio 33.
El path conserva sus mayúsculas y minúsculas.

La función solo trabaja con cadenas: no necesita
objetos BOM ni cambia la página del navegador.
**************************************************/
function descomponerURL(url) {
    let posicionProtocolo = url.indexOf("://");
    let protocolo = url.slice(0, posicionProtocolo).toLowerCase();
    let resto = url.slice(posicionProtocolo + 3);
    let posicionPath = resto.indexOf("/");
    let dominioPuerto = resto.slice(0, posicionPath);
    let path = resto.slice(posicionPath);
    let posicionPuerto = dominioPuerto.indexOf(":");
    let dominio;
    let puerto;

    if (posicionPuerto !== -1) {
        dominio = dominioPuerto.slice(0, posicionPuerto).toLowerCase();
        puerto = dominioPuerto.slice(posicionPuerto + 1);
    } else {
        dominio = dominioPuerto.toLowerCase();

        if (protocolo === "http") {
            puerto = "80";
        } else if (protocolo === "https") {
            puerto = "443";
        }
    }

    return [protocolo, dominio, puerto, path];
}
