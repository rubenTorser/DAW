/***********************************************************
14.	Mapear a objetos
Tienes un array de objetos usuarios, cada uno tiene nombre, apellido e id.
Escribe el código para crear otro array a partir de este, de objetos con id y 
nombreCompleto, donde nombreCompleto es generado a partir de nombre y apellido.
***********************************************************/

let john = {nombre: "John", apellido: "Smith", id: 1};
let pete = {nombre: "Pete", apellido: "Hunt", id: 2};
let mary = {nombre: "Mary", apellido: "Key", id: 3};

let usuarios = [john, pete, mary];

let usuariosMapeados = usuarios.map(usuario => ({
  id: usuario.id,
  nombreCompleto: `${usuario.nombre} ${usuario.apellido}`
}));

console.log(usuariosMapeados[0].id); // 1
console.log(usuariosMapeados[0].nombreCompleto); // John Smith
