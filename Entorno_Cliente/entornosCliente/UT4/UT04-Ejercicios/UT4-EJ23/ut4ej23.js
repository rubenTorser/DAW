/*******************************************************************************

23. Crea una función constructora Calculator.

Los objetos de tipo Calculator tienen tres métodos:
    - read() pide dos valores y los almacena como propiedades de objeto,
      con nombres a y b.
    - sum() devuelve la suma de los valores almacenados.
    - mul() multiplica los valores almacenados y devuelve el resultado.

Ejemplo:
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

********************************************************************************/


// Utilizaremos esta función constructora para crear objetos con new Calculator().
function Calculator() {

    // Guardaremos inicialmente un cero en cada propiedad de la calculadora.
    this.a = 0;
    this.b = 0;

    // Pediremos los dos valores y los guardaremos como números en el objeto.
    this.read = function () {
        let entradaA;
        let entradaB;

        // Repetiremos la petición si recibimos texto vacío o un valor no numérico.
        do {
            entradaA = prompt("Introduce el primer número:", "0");

            // Al cancelar, terminaremos la lectura y conservaremos los valores anteriores.
            if (entradaA === null) {
                return;
            }
        } while (entradaA.trim() === "" || Number.isNaN(Number(entradaA)));

        // Comprobaremos también el segundo valor antes de convertirlo en número.
        do {
            entradaB = prompt("Introduce el segundo número:", "0");

            if (entradaB === null) {
                return;
            }
        } while (entradaB.trim() === "" || Number.isNaN(Number(entradaB)));

        // Convertiremos ambas entradas para sumar números en lugar de unir textos.
        this.a = Number(entradaA);
        this.b = Number(entradaB);
    };

    // Devolveremos la suma de los dos valores guardados en esta calculadora.
    this.sum = function () {
        return this.a + this.b;
    };

    // Devolveremos el producto de los dos valores guardados en esta calculadora.
    this.mul = function () {
        return this.a * this.b;
    };
}


// Crearemos una calculadora y solicitaremos los dos valores.
let calculator = new Calculator();
calculator.read();

// Mostraremos la suma y la multiplicación mediante cuadros de diálogo.
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
