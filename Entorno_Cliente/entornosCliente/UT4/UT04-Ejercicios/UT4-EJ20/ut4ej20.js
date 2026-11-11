/*******************************************************************************

20. Tenemos un objeto que almacena los salarios de nuestro equipo de trabajo:

let salaries = {
    Juan: 100,
    Pedro: 300,
    Marta: 250
};

Escribe el código para sumar todos los salarios y almacenar el resultado en una
variable sum. En el ejemplo de arriba nos debería dar 390.
Si salaries está vacío, el valor de sum será 0.

Nota: el enunciado contiene una errata; 100 + 300 + 250 = 650, no 390.

********************************************************************************/


// Crearemos el objeto con los salarios indicados en el enunciado.
let salaries = {
    Juan: 100,
    Pedro: 300,
    Marta: 250
};

// Inicializaremos la suma a 0 para contemplar también un objeto vacío.
let sum = 0;

// Recorreremos los nombres y sumaremos el salario asociado a cada uno.
for (let nombre in salaries) {
    sum += salaries[nombre];
}

// Mostraremos 650; si salaries estuviera vacío, obtendríamos 0.
console.log("Suma de los salarios:", sum);
