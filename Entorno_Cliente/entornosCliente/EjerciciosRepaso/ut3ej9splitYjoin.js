/*9. Crea una función palindromo(cadena) que devuelva true si la cadena de texto es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplos de palíndromos: “Yo hago yoga hoy”, “Ana lava lana”, “reconocer”. 
Tener en cuenta: varios espacios en blanco se consideran como uno sólo; las mayúsculas y
minúsculas se consideran iguales. */

function palindromo(cadena) {
    // 1. Pasar a minúsculas y quitar todos los espacios
    let limpia = cadena.toLowerCase().split(" ").join("");

    // 2. Invertir letra a letra
    let invertida = limpia.split("").reverse().join("");

    // 3. Comparar dos strings (esto sí funciona con ===)
    return limpia === invertida;
}

console.log(palindromo('Ana lava lana'));      // true
console.log(palindromo('Ana  lava   lana'));   // true
console.log(palindromo('Yo hago yoga hoy'));   // true
console.log(palindromo('reconocer'));          // true
console.log(palindromo('Hola'));               // false