/* EJERCICIO 23 · FUNCIÓN CONSTRUCTORA CALCULATOR
   Ejecuta node calculadora.js para introducir los números por teclado.
   También puedes pasarlos directamente: node calculadora.js 3 4 */
const readline = require("node:readline");

function Calculator() {
    this.read = async function () {
        let datos = process.argv.slice(2);
        if (datos.length === 0) {
            const entrada = readline.createInterface({ input: process.stdin, output: process.stdout });
            console.log("Introduce dos números separados por un espacio o un salto de línea:");
            for await (const linea of entrada) {
                if (linea.trim() === "") continue;
                datos = datos.concat(linea.trim().split(/\s+/));
                if (datos.length >= 2) break;
            }
            entrada.close();
        }

        /* Convertimos a número antes de sumar. Admitimos coma y punto decimal. */
        const numeros = datos.map(dato => dato.trim() === "" ? NaN : Number(dato.replace(",", ".")));
        if (numeros.length !== 2 || !numeros.every(Number.isFinite)) return false;
        this.a = numeros[0];
        this.b = numeros[1];
        return true;
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

/* CREAR Y PROBAR UNA INSTANCIA */
async function ejecutar() {
    const calculadora = new Calculator();
    if (await calculadora.read()) {
        console.log("Suma:", calculadora.sum());
        console.log("Producto:", calculadora.mul());
    } else {
        console.log("Debes introducir dos números válidos.");
    }
}

ejecutar();
