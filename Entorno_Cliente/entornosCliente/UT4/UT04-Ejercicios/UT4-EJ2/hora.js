/****************************************************************************

2.	Función que devuelve la hora
    Crea una función calcularHora()que devuelva la hora como una cadena en 
    formato hora:,minutos:segundos cada segundo. Incluye esa función  en hora.js.

****************************************************************************/

let campo = document.getElementById("hora");

function calcularHora() {

    let fecha = new Date();

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    return hora + ":" + minutos + ":" + segundos;

}

let horaCadaSegundo = setInterval(() => {
    campo.value = calcularHora();
}, 1000);
