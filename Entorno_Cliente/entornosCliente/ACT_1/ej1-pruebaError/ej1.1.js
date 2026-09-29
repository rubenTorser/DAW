/*********************************************************************
Este script se carga con defer desde ej1.1.html: el navegador lo ejecuta
cuando ya ha analizado el HTML y, por tanto, document.body está disponible.
El bucle escribe los números del 0 al 10, incluidos ambos extremos.
**********************************************************************/

/*********************************************************************
const declara una variable a la que no se puede asignar otro valor después
de inicializarla. MAX guarda el límite numérico 10; escribir su nombre en
mayúsculas es una convención para destacar que representa una constante.
let permite reasignar valores. seguir empieza en true, uno de los dos
valores booleanos (true/false), y actúa como una bandera de continuación.
El signo = asigna el valor de la derecha a la variable de la izquierda.
**********************************************************************/
const MAX = 10;
let seguir = true;
/*********************************************************************
for reúne tres partes separadas por punto y coma:
1. let i = 0 se ejecuta una sola vez y crea el contador inicial.
2. seguir == true se comprueba antes de cada vuelta: si resulta falso,
   el bucle termina. == compara valores y permite conversión de tipos;
   aquí se comparan booleanos porque seguir siempre contiene true o false.
3. i++ aumenta i en una unidad después de ejecutar el cuerpo de cada vuelta.
Las llaves delimitan el bloque que se repite. El contador i, declarado con
let en el for, solo está disponible dentro del ámbito de ese bucle.
**********************************************************************/
for (let i = 0; seguir == true; i++) {
  /*******************************************************************
  document representa la página en el DOM, el árbol de elementos que crea
  el navegador; body permite acceder a su cuerpo. innerHTML obtiene o
  sustituye el contenido interior de ese elemento interpretándolo como HTML.
  += lee el contenido actual, le concatena el nuevo texto y asigna el
  resultado completo a innerHTML, por lo que el navegador lo vuelve a
  interpretar. Así se conservan visualmente los párrafos anteriores.
  Las comillas invertidas (`) crean una plantilla de texto; ${i} inserta
  el valor actual del contador. <p> y </p> forman un párrafo HTML.
  ********************************************************************/
  document.body.innerHTML += `<p>El valor de i es: ${i}</p>`;
  /*******************************************************************
  if ejecuta su bloque solo cuando la condición es verdadera. >= significa
  "mayor o igual que". Primero se muestra i y después se comprueba el límite:
  por eso también se escribe el 10 y se obtienen 11 párrafos (del 0 al 10).
  Al alcanzar MAX, seguir = false cambia la bandera. No sale del bucle en
  ese instante: termina esta vuelta, se ejecuta i++ y la siguiente evaluación
  de seguir == true impide entrar otra vez en el cuerpo.
  ********************************************************************/
  if (i >= MAX) {
    seguir = false;
  }
}
