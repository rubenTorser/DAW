/*****************************************************************************

3.	Cronómetro
Crea un script que muestra un mensaje (un alert) cuando han pasado 10 segundos.
Esa función se incluye en el documento crono.js.

*****************************************************************************/
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



/*OPCIÓN A*/
/*let tiempo = 0;
let marcaDeTiempo = 10;
let intervalo = setInterval(() => {
    tiempo++;
    if (tiempo == marcaDeTiempo) {
        alert(`Han pasado ${marcaDeTiempo} segundos`);
        marcaDeTiempo += 10;
    }
}, 1000);*/


/*OPCIÓN B*/
function crono() {

    alert("Han pasado 10 segundos");

}

let opcionB = setTimeout(() => crono(), 10000);