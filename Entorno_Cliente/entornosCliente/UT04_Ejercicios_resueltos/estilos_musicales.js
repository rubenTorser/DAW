/* EJERCICIO 5 · OPERACIONES SOBRE ARRAYS
   Ejecuta node estilos_musicales.js. Cada salida muestra el array tras un paso. */
const styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

/* SUSTITUIR EL CENTRO DE CUALQUIER ARRAY DE LONGITUD IMPAR */
const centro = Math.floor(styles.length / 2);
styles.splice(centro, 1, "Classics");
console.log(styles);

const primero = styles.shift();
console.log("Estilo eliminado:", primero);
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);

/* PRUEBAS DE REPASO SOBRE EL RESULTADO
   styles.indexOf("Classics")      devuelve 2.
   styles.includes("Jazz")         devuelve false.
   styles.slice(1, 3)              devuelve ["Reggae", "Classics"].
   styles.concat("Soul")           crea otro array con "Soul" al final.
   styles.slice().reverse().pop()  devuelve "Rap" y conserva el array original.
   styles.join(" / ")              une los estilos con el separador elegido. */
