// ===== ACTIVIDAD RA4 – Parte 2: Ejercicios =====
// Escribe tu nombre completo:
const ALUMNO = "Rubén de la Torre Serrano";
/* Después de cada ejercicio hay una comprobación que muestra OK si funciona. 
 IMPORTANTE: antes de entregar, ejecuta el archivo. Si hay un error de sintaxis, no se puede corregir
 ningún ejercicio. Si un ejercicio te da error y no lo terminas, déjalo vacío o ponlo en comentario.
*/

/* ############################################################################
--- Ejercicio 1 (0,2 p.) ---
 Recibe una fecha en formato "AAAA-MM-DD" y devuelve un objeto { anio, mes, dia } con los tres valores como números.
 Usa desestructuración de arrays.
 Ejemplo: partesFecha("2026-11-24") devuelve { anio: 2026, mes: 11, dia: 24 }.
 Pista: split y map.
*/
function partesFecha(texto) {
  const [anio, mes, dia] = texto.split("-").map(Number);
  return { anio, mes, dia };
}
// COMPROBACIÓN
{
  const fecha = partesFecha("2026-11-24");
  console.log(fecha && fecha.anio === 2026 && fecha.mes === 11 && fecha.dia === 24 ? "OK " : "MAL", "Ejercicio 1");
}
// FIN COMPROBACIÓN

/* ############################################################################
--- Ejercicio 2 (0,25 p.) ---
 Recibe un objeto como { nombre: "Leo", ciudad: "Soria", email: "leo@educa.jcyl.es" } y devuelve el texto "Leo (Soria) - leo@educa.jcyl.es". Si no tiene ciudad, se usa "Burgos".
 Desestructura el objeto en los propios parámetros de la función.
*/
function ficha({nombre, ciudad="Burgos", email}) {
  
  return `${nombre} (${ciudad}) - ${email}`;

}
// COMPROBACIÓN
{
  console.log(ficha({ nombre: "Leo", ciudad: "Soria", email: "leo@educa.jcyl.es" }) === "Leo (Soria) - leo@educa.jcyl.es" &&
    ficha({ nombre: "Ana", email: "ana@educa.jcyl.es" }) === "Ana (Burgos) - ana@educa.jcyl.es" ? "OK " : "MAL", "Ejercicio 2");
}
// FIN COMPROBACIÓN

/* ############################################################################
--- Ejercicio 3 (0,25 p.) ---
 Recibe un objeto con las propiedades login, password, email y rol. Devuelve un objeto nuevo con todas las propiedades del usuario excepto password y email, sin modificar usuario.
 Usa desestructuración con rest.
 Ejemplo: datosPublicos({ login: "lmartin", password: "1234", email: "l@educa.jcyl.es", rol: "alumno" }) devuelve { login: "lmartin", rol: "alumno" }.
*/
function datosPublicos(usuario) {
  const { password, email, ...publico } = usuario;
  return publico;
}

// COMPROBACIÓN
{
  const usuarioPrueba = { login: "lmartin", password: "1234", email: "l@educa.jcyl.es", rol: "alumno" };
  const publico = datosPublicos(usuarioPrueba);
  console.log(publico && Object.keys(publico).join() === "login,rol" && usuarioPrueba.password === "1234" ? "OK " : "MAL", "Ejercicio 3");
}
// FIN COMPROBACIÓN

/* ############################################################################
--- Ejercicio 4 (0,25 p.) ---
 Recibe dos parámetros: un objeto que representa un producto y otro objeto que representa los cambios en algunas propiedades del producto. Devuelve un objeto nuevo, con las propiedades de los dos objetos. Si una propiedad está en los dos objetos, se queda con el valor que tiene en el segundo parámetro. No debe modificar los objetos que recibe como parámetro.
 Usa spread.
 Ejemplo: actualizar({ nombre: "teclado", precio: 25, stock: 4 }, { precio: 20, stock: 0 }) devuelve { nombre: "teclado", precio: 20, stock: 0 }.
*/
function actualizar(producto, cambios) {
  return { ...producto, ...cambios };
}
// COMPROBACIÓN
{
  const productoPrueba = { nombre: "teclado", precio: 25, stock: 4 };
  const nuevo = actualizar(productoPrueba, { precio: 20, stock: 0 });
  console.log(nuevo && nuevo.precio === 20 && nuevo.stock === 0 && nuevo.nombre === "teclado" && productoPrueba.precio === 25 ? "OK " : "MAL", "Ejercicio 4");
}
// FIN COMPROBACIÓN

/* ############################################################################
--- Ejercicio 5 (0,3 p.) ---
 Recibe un objeto como parámetro. Devuelve un array de cadenas con el formato "clave: valor", una por cada propiedad del objeto.
 Usa for...of y desestructuración.
 Ejemplo: listar({ DWEC: 7, DWES: 5 }) devuelve ["DWEC: 7", "DWES: 5"].
 Pista: Object.entries.
*/
function listar(obj) {
  const resultado = [];
  for (const [clave, valor] of Object.entries(obj)) {
    resultado.push(`${clave}: ${valor}`);
  }
  return resultado;
}
// COMPROBACIÓN
{
  const lista = listar({ DWEC: 7, DWES: 5 });
  console.log(Array.isArray(lista) && lista.join("|") === "DWEC: 7|DWES: 5" ? "OK " : "MAL", "Ejercicio 5");
}
// FIN COMPROBACIÓN
