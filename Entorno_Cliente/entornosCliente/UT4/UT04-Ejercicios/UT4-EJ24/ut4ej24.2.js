/**********************************************************************************
24.	Clase Vehículo
Crea una clase denominada Vehículo que tenga algunas características como el color, 
marca, modelo y la velocidad máxima que puede alcanzar. 

También tendrá tres métodos además del constructor: comenzar que mostrará el mensaje 
“Encender motor”, parar que mostrará “Apagar motor” y distanciaMax que recibirá un 
parámetro con indicando el tiempo de funcionamiento y calculará la distancia máxima 
que puede haber recorrido, que será el resultado de multiplicar la velocidad máxima 
por el tiempo. 
**********************************************************************************/

class Vehiculo{

    constructor(color, marca, modelo, velocidadMax){
        this.color=color;
        this.marca=marca;
        this.modelo=modelo;
        this.velocidadMax=velocidadMax;
    }

    comenzar(){
        console.log("Encender motor");
    }

    parar(){
        console.log("Apagar motor");
    }

    distanciaMax(tiempo){
        return this.velocidadMax * tiempo;
    }

}

let vehiculo1 = new Vehiculo("Rojo", "Toyota", "Corolla", 180);

console.log(vehiculo1.color);
console.log(vehiculo1.marca);
console.log(vehiculo1.modelo);
console.log(vehiculo1.velocidadMax);
console.log(vehiculo1.distanciaMax(2));
vehiculo1.comenzar();
vehiculo1.parar();