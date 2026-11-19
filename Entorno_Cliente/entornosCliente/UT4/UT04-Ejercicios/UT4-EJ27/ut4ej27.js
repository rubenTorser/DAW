/**********************************************************************
27.	Heredando de Vehículo
Partimos de la clase Vehiculo que has creado en un ejercicio anterior.

Crea dos clases más, ambas deben heredar de Vehículo: 
•	Coche: cuya velocidad máxima será 120 y sobrescribirá el método 
    parar para que muestre “Aparcar”. 
•	Avión: cuya velocidad máxima será 1000 y sobrescribirá los métodos 
    comenzar, para que muestre “Despegar”, y parar, para que muestre “Aterrizar”.
**********************************************************************/

class Vehiculo{

    //OPCIONAL: NO es necesario declarar los atributos.
    color;
    marca;
    modelo;
    velocidadMax;

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

class Coche extends Vehiculo{

    constructor(color, marca, modelo){

        //this.velocidadMax=120;
        super(color, marca, modelo, 120);

    }

    parar(){
        console.log("Aparcar");
    }

}

let vehiculo1 = new Coche("Rojo", "Toyota", "Corolla");

console.log(vehiculo1.velocidadMax);

vehiculo1.comenzar();
vehiculo1.parar();


class Avion extends Vehiculo{

    constructor(color, marca, modelo){
        super(color, marca, modelo, 1000);
    }

    comenzar(){
        console.log("Despegar");
    }

    parar(){
        console.log("Aterrizar");
    }

}

let avion1 = new Avion("Blanco", "Boeing", "747");

console.log(avion1.velocidadMax);

avion1.comenzar();
avion1.parar();

console.log(vehiculo1.distanciaMax(10));
console.log(avion1.distanciaMax(10));