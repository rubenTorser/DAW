/*
22. Crea un objeto literal cuenta con las siguientes propiedades: 
• titular: su valor es “Alex”. 
• saldo: su valor inicial es 0. 
También deberá tener estos métodos: 
• ingresar(cantidad): permite añadir dinero a la cuenta, pasando la 
cantidad como parámetro. 
• extraer(cantidad): permite retirar dinero de la cuenta, pasando la 
cantidad como parámetro. 
• informar(): devuelve la información del estado de la cuenta: un texto 
con el titular y el saldo. 
*/

let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad) {
        this.saldo += cantidad;
    },
    extraer: function(cantidad) {
        this.saldo -= cantidad;
    },
    informar: function() {
        return `Titular: ${this.titular}, Saldo: ${this.saldo}`;
    }
};

console.log(cuenta.titular); // Alex
console.log(cuenta.saldo); // 0

console.log(cuenta.informar()); // Titular: Alex, Saldo: 0

cuenta.ingresar(100);
console.log(cuenta.informar()); // Titular: Alex, Saldo: 100

cuenta.extraer(50);
console.log(cuenta.informar()); // Titular: Alex, Saldo: 50

for (let propiedad in cuenta) {
    console.log(`Propiedad: ${propiedad}, Valor: ${cuenta[propiedad]}`);
}


