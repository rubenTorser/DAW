/*
2.	Función que devuelve la hora
Crea una función calcularHora()que devuelva la hora como una cadena en formato 
hora:,minutos:segundos cada segundo. Incluye esa función  en hora.js.

3.	Cronómetro
Crea un script que muestra un mensaje (un alert) cuando han pasado 10 segundos.
Esa función se incluye en el documento crono.js.
*/

let campo = document.getElementById("hora");
campo.value = calcularHora();

function calcularHora() {

    let ahora = new Date();

    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    campo.value = hora + ":" + minutos + ":" + segundos;
}

let mostrarHora = setInterval(calcularHora, 1000);


let mostrarAlerta = setTimeout(function () {
    alert("Han pasado 10 segundos");
}, 10000);
