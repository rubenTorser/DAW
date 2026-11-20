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

let vehiculo1 = new Vehiculo("Rojo", "Toyota", "Corolla", 180);

console.log(vehiculo1.color);
console.log(vehiculo1.marca);
console.log(vehiculo1.modelo);
console.log(vehiculo1.velocidadMax);
console.log(vehiculo1.distanciaMax(2));
vehiculo1.comenzar();
vehiculo1.parar();


