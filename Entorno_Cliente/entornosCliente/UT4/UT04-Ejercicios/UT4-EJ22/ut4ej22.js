/*******************************************************************************

22. Crea un objeto literal cuenta con las siguientes propiedades:
    - titular: su valor es "Alex".
    - saldo: su valor inicial es 0.

También deberá tener estos métodos:
    - ingresar(cantidad): permite añadir dinero a la cuenta, pasando la cantidad
      como parámetro.
    - extraer(cantidad): permite retirar dinero de la cuenta, pasando la cantidad
      como parámetro.
    - informar(): devuelve la información del estado de la cuenta: un texto
      con el titular y el saldo.

********************************************************************************/


// Crearemos un objeto literal con los datos y los métodos de la cuenta.
let cuenta = {
    titular: "Alex",
    saldo: 0,

    // Utilizaremos this para acceder al saldo de la cuenta que llame al método.
    ingresar: function (cantidad) {
        this.saldo += cantidad;
    },

    // Restaremos la cantidad recibida al saldo actual de la cuenta.
    extraer: function (cantidad) {
        this.saldo -= cantidad;
    },

    // Devolveremos un texto con el titular y el saldo de la cuenta.
    informar: function () {
        return "Titular: " + this.titular + ". Saldo: " + this.saldo + " euros.";
    }
};


// Mostraremos la información inicial de la cuenta de Alex, con saldo 0.
console.log(cuenta.informar());

// Ingresaremos 100 euros y comprobaremos el nuevo saldo.
cuenta.ingresar(100);
console.log(cuenta.informar());

// Extraeremos 40 euros y mostraremos el saldo restante de 60 euros.
cuenta.extraer(40);
console.log(cuenta.informar());
