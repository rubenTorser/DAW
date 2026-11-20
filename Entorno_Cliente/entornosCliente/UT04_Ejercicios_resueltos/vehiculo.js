/* EJERCICIO 24 · CLASE VEHÍCULO
   Ejecuta node vehiculo.js. La velocidad se expresa en km/h y el tiempo en horas. */
class Vehiculo {
    constructor(color, marca, modelo, velocidadMaxima) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }

    comenzar() {
        console.log("Encender motor");
    }

    parar() {
        console.log("Apagar motor");
    }

    distanciaMax(tiempo) {
        return this.velocidadMaxima * tiempo;
    }
}

/* Al importar la clase desde el ejercicio 27, se omite el ejemplo del 24. */
if (require.main === module) {
    const vehiculo = new Vehiculo("gris", "Demo", "Base", 80);
    vehiculo.comenzar();
    console.log("Distancia en 2 horas:", vehiculo.distanciaMax(2), "km");
    vehiculo.parar();
}

module.exports = Vehiculo;
