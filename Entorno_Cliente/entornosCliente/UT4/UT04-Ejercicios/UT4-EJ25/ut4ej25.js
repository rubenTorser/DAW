// Sustituiremos la función constructora function Reloj({ plantilla }) de reloj.js
// por una clase Reloj, en la que agruparemos la inicialización y los métodos.
class Reloj {
  
    // Trasladaremos el parámetro al constructor y mantendremos la desestructuración
    // del objeto recibido para obtener su propiedad plantilla.
    constructor({plantilla}) {
      // Guardaremos la plantilla en una propiedad de cada reloj para utilizarla desde sus métodos.
      this.plantilla = plantilla;
      // Sustituiremos la variable local let temporalizador por una propiedad del objeto.
      // La inicializaremos a null hasta guardar el identificador del intervalo en start().
      this.temporalizador = null;
    }

    // Convertiremos la función interna mostrar() en un método de la clase.
    // También podremos llamarlo desde fuera mediante miReloj.mostrar().
    mostrar() {
      // Conservaremos la obtención de la hora y el relleno con ceros del código original.
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      // Accederemos a this.plantilla en lugar de utilizar el parámetro local plantilla.
      // Mantendremos las sustituciones de h, m y s y la salida por consola.
      let output = this.plantilla
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      
  
      console.log(output);
    }
  
    // Sustituiremos this.stop = function() por la sintaxis de método stop().
    stop() {
      // Leeremos el identificador desde this.temporalizador para cancelar el intervalo.
      clearInterval(this.temporalizador);
    };
  
    // Sustituiremos this.start = function() por la sintaxis de método start().
    // Con esta sintaxis, compartiremos start, stop y mostrar mediante el prototipo de la clase.
    start() {
      // Llamaremos al método con this.mostrar() para mostrar la hora inmediatamente.
      this.mostrar();
      // Guardaremos el identificador del intervalo en la propiedad this.temporalizador.
      // Usaremos una función flecha para conservar el this de start(), que al llamar
      // a miReloj.start() apuntará a miReloj, y accederemos así a su método mostrar().
      // Mantendremos la actualización cada 1000 milisegundos, es decir, cada segundo.
      this.temporalizador = setInterval(() => {this.mostrar()}, 1000);
    };
  
  }
  
  // Mantendremos la creación con new Reloj y la llamada a start() del archivo original.
  let miReloj = new Reloj({plantilla: 'h:m:s'});
  miReloj.start();