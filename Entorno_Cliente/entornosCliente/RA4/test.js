/*let colores = ["rojo", "verde", "azul", "negro"];

let [primero, ...otros]=colores;

console.log(primero);
console.log(otros);

let a=1, b=2, c=3;
[a, b, c] = [c, a, b];

console.log(a, b, c);

let libro = {titulo: "DUNE", autor: "Herbert", anio: 1965};
let {titulo : nombre, paginas=300, otros = {autor: "Herbert", anio: 1965} } = libro;

console.log(otros.autor);
console.log(nombre);
console.log(paginas);

let numeros1 = [4, 9, 2];
let numeros2 = [3, 4, 5, 6];

console.log(Math.max(...numeros1, ...numeros2));*/

let numeros1 = [4, 9, 2];

let sinPrimero = numeros1 = [ , ...rest];

console.log(sinPrimero);
