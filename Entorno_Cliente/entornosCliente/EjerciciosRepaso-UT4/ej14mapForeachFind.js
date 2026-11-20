/*
14. Mapear a objetos 
Tienes un array de objetos usuarios, cada uno tiene nombre, apellido e id. 
Escribe el código para crear otro array a partir de este, de objetos con id y 
nombreCompleto, donde nombreCompleto es generado a partir de 
nombre y apellido. 

let usuariosMapeados = 
... tu código ...

usuariosMapeados= [ 
{nombreCompleto: "John Smith", id: 1 }, 
{nombreCompleto: "Pete Hunt", id: 2 }, 
{nombreCompleto: "Mary Key", id: 3 } 
] 

alert(usuariosMapeados[0].id); // 1 
alert(usuariosMapeados[0].nombreCompleto); // John Smith 
Para hacerlo, se puede mapear un array de objetos a otro. 
Si se utilizan funciones flecha (=>), hay un pequeño truco.
*/

let john = {nombre: "John", apellido: "Smith", id: 1}; 
let pete = {nombre: "Pete", apellido: "Hunt", id: 2}; 
let mary = {nombre: "Mary", apellido: "Key", id: 3}; 
let usuarios = [john, pete, mary]; 

let usuariosMapeados = usuarios.map(usuario => ({
    nombreCompleto: `${usuario.nombre} ${usuario.apellido}`,
    id: usuario.id
}));

usuariosMapeados.forEach((item, index, array) => {
    
    console.log(`Usuario ${index}: ${item.nombreCompleto}, ID: ${item.id}`);

    console.log(`Array completo:`, array);
    
    });


let usuario2 = usuarios.find(usuario => usuario.id === 2);
console.log(`Usuario con ID 2: ${usuario2.nombre} ${usuario2.apellido}`);

let usuario2FindIndex = usuarios.findIndex(usuario => usuario.id === 2);
console.log(`Usuario con ID 2: ${usuariosMapeados[usuario2FindIndex].nombreCompleto}`);