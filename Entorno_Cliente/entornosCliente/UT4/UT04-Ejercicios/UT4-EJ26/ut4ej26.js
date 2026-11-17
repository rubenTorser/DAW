/*******************************************************************************
26.	Error al crear una instancia
Tienes el código en una carpeta.

En el código, la clase Rabbit extiende a Animal.

Sin embargo, al intentar crear un objeto de la clase Rabbit, se produce un error. 
¿Por qué? Arréglalo.
*******************************************************************************/

/*
Aquí está el código de la clase Rabbit que extiende a Animal.
Desafortunadamente, los objetos Rabbit no se pueden crear. ¿Que pasa? Arréglalo.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Conejo Blanco"); // Error: this no está definido
console.log(rabbit.name);