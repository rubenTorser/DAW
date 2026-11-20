/* EJERCICIO 14 · MAPEAR A OBJETOS
   Ejecuta node usuarios.js o pasa el id que quieres buscar: node usuarios.js 3 */
const usuarios = [
    { nombre: "John", apellido: "Smith", id: 1 },
    { nombre: "Pete", apellido: "Hunt", id: 2 },
    { nombre: "Mary", apellido: "Key", id: 3 }
];

/* Los paréntesis permiten que la flecha devuelva directamente un objeto. */
const usuariosMapeados = usuarios.map(usuario => ({
    id: usuario.id,
    nombreCompleto: usuario.nombre + " " + usuario.apellido
}));

usuariosMapeados.forEach(usuario => console.log(usuario));

/* FIND DEVUELVE EL OBJETO Y FINDINDEX DEVUELVE SU POSICIÓN */
const idBuscado = Number(process.argv[2] ?? 2);
const coincide = usuario => usuario.id === idBuscado;
console.log("Objeto encontrado:", usuariosMapeados.find(coincide));
console.log("Índice:", usuariosMapeados.findIndex(coincide));
