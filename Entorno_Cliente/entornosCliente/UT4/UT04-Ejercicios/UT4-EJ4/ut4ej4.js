/****************************************************************************

4. Cuestiones sobre Arrays

En el siguiente código, ¿qué mostrarán los console.log y por qué?

****************************************************************************/

// Aunque tienen los mismos elementos, cada variable apunta a un array distinto.
let frutas = ["Manzana", "Pera", "Naranja"];
let frutas2 = ["Manzana", "Pera", "Naranja"];

// Muestra false: al comparar arrays se comparan sus referencias, no su contenido.
// Como son dos arrays diferentes, las referencias no son iguales.
console.log(frutas == frutas2);

// La asignación copia la referencia: compra y frutas apuntan al mismo array.
// No se crea una copia independiente de sus elementos.
let compra = frutas;

// push añade un elemento al final del array compartido por frutas y compra.
compra.push("Plátano");

// Muestra true: las dos variables siguen apuntando al mismo array.
console.log(frutas == compra);

// Muestra 4: a los tres elementos iniciales se ha añadido "Plátano".
// El cambio realizado a través de compra también se ve a través de frutas.
console.log(frutas.length);
