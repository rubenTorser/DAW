/* EJERCICIO 22 · OBJETO LITERAL CUENTA
   Ejecuta node cuenta.js. Los tres métodos usan this para acceder a la cuenta. */
const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar(cantidad) {
        this.saldo += cantidad;
    },

    extraer(cantidad) {
        this.saldo -= cantidad;
    },

    informar() {
        return "Titular: " + this.titular + " · Saldo: " + this.saldo + " €";
    }
};

console.log(cuenta.informar());
cuenta.ingresar(100);
console.log(cuenta.informar());
cuenta.extraer(25);
console.log(cuenta.informar());

/* RECORRER LAS PROPIEDADES POR SU NOMBRE */
for (const clave in cuenta) {
    console.log(clave, cuenta[clave]);
}

/* PRUEBAS DE REPASO
   Object.keys(cuenta) y Object.values(cuenta) devuelven las claves y los valores.
   const pares = Object.entries(cuenta) guarda pares [clave, valor].
   pares[0][0] es "titular". Object.fromEntries(pares) crea otro objeto.
   Puedes añadir cuenta.tipo = "ahorro", comprobar "tipo" in cuenta
   y eliminar la propiedad con delete cuenta.tipo. */
