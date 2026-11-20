/* EJERCICIO 27 · HERENCIA DE VEHÍCULO
   Ejecuta node herencia.js. Reutilizamos la clase del ejercicio 24. */
const Vehiculo = require("./vehiculo.js");

class Coche extends Vehiculo {
    constructor(color, marca, modelo) {
        super(color, marca, modelo, 120);
    }

    parar() {
        console.log("Aparcar");
    }
}

class Avion extends Vehiculo {
    constructor(color, marca, modelo) {
        super(color, marca, modelo, 1000);
    }

    comenzar() {
        console.log("Despegar");
    }

    parar() {
        console.log("Aterrizar");
    }
}

/* DISTANCIAMAX SE HEREDA EN LAS DOS CLASES */
const coche = new Coche("rojo", "SEAT", "Arosa");
const avion = new Avion("blanco", "Aero", "A1");

for (const vehiculo of [coche, avion]) {
    console.log(vehiculo.marca, vehiculo.modelo);
    vehiculo.comenzar();
    console.log("Distancia en 2 horas:", vehiculo.distanciaMax(2), "km");
    vehiculo.parar();
}
