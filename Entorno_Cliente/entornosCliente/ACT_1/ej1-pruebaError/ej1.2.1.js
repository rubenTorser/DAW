/*********************************************************************
Primer script enlazado desde ej1.2.html. Intenta mostrar del 1 al 100,
incluidos ambos extremos. Se carga con async: puede ejecutarse antes o
después del otro script, y también antes de que exista document.body.
Si body aún no existe, el acceso a innerHTML falla y el script se detiene.
**********************************************************************/

/*********************************************************************
const declara MAX con el límite numérico 100 y no permite reasignarlo.
Las mayúsculas son una convención para identificar una constante.
let declara seguir y permite cambiar su valor. true y false son los dos
valores booleanos: aquí representan continuar o detener las repeticiones.
El signo = asigna el valor situado a su derecha a la variable de la izquierda.
**********************************************************************/
const MAX = 100;
let seguir = true;
/***********************************************************
MAX y seguir están fuera del for: son declaraciones globales.
Los scripts clásicos de esta misma página comparten el entorno
global, incluidas las declaraciones let y const, aunque estas
no crean propiedades en window. Redeclarar MAX o seguir en el
otro script produciría un error de declaración.
Por eso ej1.2.2.js utiliza MAXI y seguiDO. Una página diferente,
como ej1.1.html, tiene su propio entorno y puede usar los mismos
nombres sin interferir con esta. El contador i de cada for tiene
su propio ámbito y sí puede llamarse igual en ambos archivos.
************************************************************/
/*********************************************************************
El for tiene una inicialización, una condición y una actualización:
- let i = 1 crea el contador una sola vez, antes de comenzar las vueltas.
- seguir == true se evalúa antes de cada vuelta y permite repetir mientras
  sea verdadero. == compara valores y permite convertir sus tipos; aquí
  ambos operandos son booleanos, porque seguir solo recibe true o false.
- i++ suma una unidad al contador después de ejecutar el cuerpo del bucle.
Las llaves agrupan las instrucciones repetidas. let limita el ámbito de i
al propio for: no queda disponible fuera de él.
**********************************************************************/
for (let i = 1; seguir == true; i++) {
  /*******************************************************************
  document representa el documento en el DOM, el árbol de elementos que
  mantiene el navegador. document.body obtiene el elemento body si existe.
  innerHTML representa su contenido interior como HTML. += lee ese
  contenido, concatena el nuevo texto y vuelve a asignarlo completo; el
  navegador lo interpreta de nuevo para mostrar los párrafos resultantes.
  Las comillas invertidas (`) delimitan una plantilla de texto. ${i} se
  sustituye por el valor actual del contador, entre las etiquetas <p> y
  </p>, que definen un párrafo. Cada vuelta agrega un párrafo visible.
  ********************************************************************/
  document.body.innerHTML += `<p>El valor de i es: ${i}</p>`;
  /*******************************************************************
  if ejecuta su bloque cuando i >= MAX es verdadero. >= significa "mayor
  o igual que". Como el párrafo se escribe antes de comprobar el límite,
  se incluye el 100: el recorrido completo genera 100 párrafos, del 1 al 100.
  seguir = false cambia la bandera; después aún se ejecuta i++ y, al
  comprobar la condición del for de nuevo, ya no se inicia otra vuelta.
  Este bucle es síncrono: async afecta a la carga y al momento de iniciar
  el script, pero no hace que sus vueltas se alternen con las del otro.
  ********************************************************************/
  if (i >= MAX) {
    seguir = false;
  }
}
