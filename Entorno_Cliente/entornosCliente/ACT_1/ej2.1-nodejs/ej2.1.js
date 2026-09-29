/*********************************************************************
EJECUTAR JAVASCRIPT CON NODE.JS
Node.js es un entorno que permite ejecutar JavaScript fuera del navegador.
Desde una terminal situada en esta carpeta, el comando node ej2.1.js
ejecuta este archivo, siempre que Node.js esté instalado y disponible.
No hace falta enlazarlo desde un HTML. En una ejecución normal de Node.js
no existe el document del navegador, pero sí se puede utilizar console.
Este bloque es un comentario: sirve para documentar y no se ejecuta.
**********************************************************************/

/*********************************************************************
3 y 4 son valores numéricos escritos directamente, llamados literales.
El operador + suma ambos números, por lo que la expresión 3+4 produce 7.
JavaScript calcula primero el argumento y luego llama al método log del
objeto console para mostrar ese resultado en la terminal. Los paréntesis
contienen el argumento de la llamada y el ; termina la instrucción.
Si se usaran dos cadenas, como "3" + "4", + concatenaría sus textos y
produciría "34". Aquí no hay comillas: se realiza una suma numérica.
El programa muestra 7 y finaliza porque no tiene más trabajo pendiente.
**********************************************************************/
console.log(3+4);
