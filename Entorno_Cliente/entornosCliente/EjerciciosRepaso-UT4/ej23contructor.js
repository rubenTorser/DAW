/*
23. Crea una función constructora Calculator. 
Los objetos de tipo Calculator tienen tres métodos: 
• read() pide dos valores y los almacena como propiedades de objeto, 
con nombres a y b. 
• sum() devuelve la suma de los valores almacenados. 
• mul() multiplica los valores almacenados y devuelve el resultado. 
Ejemplo: 
let calculator = new Calculator(); 
calculator.read(); 
alert( "Sum=" + calculator.sum() ); 
alert( "Mul=" + calculator.mul() ); 
*/

function Calculator() {
    this.read = function() {
        this.a = parseFloat(prompt("Ingrese el primer número:"));
        this.b = parseFloat(prompt("Ingrese el segundo número:"));
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());