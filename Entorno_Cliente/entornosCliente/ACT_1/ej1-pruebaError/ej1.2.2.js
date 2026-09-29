/*********************************************************************
Segundo script enlazado desde ej1.2.html. Intenta mostrar del 900 al 1000,
incluidos ambos extremos. Al usar async, su posición en el HTML no garantiza
que se ejecute después del primer script. Tampoco garantiza que body ya
exista: si document.body es null, acceder a innerHTML interrumpe este script
con un error. Si ambos scripts encuentran body, cada uno añade sus números
a los que ya hubiera, en el orden en que se ejecuten los archivos.
**********************************************************************/

/*********************************************************************
const declara MAXI con el límite 1000 e impide que se le asigne otro valor;
las mayúsculas se usan por convención para destacar una constante.
let permite cambiar seguiDO, una bandera que comienza en true y pasará a
false cuando haya que detener el bucle. true y false son valores booleanos.
El signo = asigna el valor de la derecha a la variable de la izquierda.
JavaScript distingue mayúsculas y minúsculas: seguiDO es el nombre exacto
de esta variable y debe escribirse igual cada vez que se utilice.
**********************************************************************/
const MAXI = 1000;
let seguiDO = true;
/***********************************************************
Estas declaraciones están fuera del bucle y son globales.
Los scripts clásicos de una misma página comparten el entorno
global, también para let y const, aunque sus declaraciones no
se añaden como propiedades de window. Redeclarar una de ellas
en otro script provoca un error, independientemente del orden
de carga. Por eso aquí se usan MAXI y seguiDO: el otro archivo
ya declara MAX y seguir. Los contadores i pueden coincidir,
porque cada uno pertenece al ámbito de su propio bucle for.
************************************************************/
/*********************************************************************
El for organiza las repeticiones en tres partes:
1. let i = 900 inicializa el contador una sola vez al entrar en el bucle.
2. seguiDO == true se evalúa antes de cada vuelta. == compara valores y
   permite convertir tipos; en este caso ambos valores son booleanos.
   Si la condición es falsa, el cuerpo del bucle ya no se ejecuta.
3. i++ incrementa el contador en una unidad al final de cada vuelta.
Las llaves delimitan el cuerpo que se repite. i, declarado con let en el
for, solo se puede utilizar dentro del ámbito de este bucle.
**********************************************************************/
for (let i = 900; seguiDO == true; i++) {
  /*******************************************************************
  document es la representación de la página en el DOM, el árbol de
  elementos del navegador. body da acceso al cuerpo del documento.
  innerHTML lee o reemplaza su contenido interior interpretado como HTML.
  Con += se lee el contenido actual, se concatena el nuevo párrafo y se
  asigna de nuevo el texto completo, que el navegador vuelve a interpretar.
  Las comillas invertidas (`) crean una plantilla: ${i} inserta el valor
  del contador. Las etiquetas <p> y </p> hacen que cada valor se muestre
  como un párrafo, manteniendo visualmente el contenido anterior.
  ********************************************************************/
  document.body.innerHTML += `<p>El valor de i es: ${i}</p>`;
  /*******************************************************************
  if ejecuta su bloque solo si se cumple i >= MAXI; >= significa "mayor
  o igual que". Se escribe primero y se comprueba después, de modo que
  también se muestra el 1000. El intervalo inclusivo 900..1000 contiene
  1000 - 900 + 1 = 101 números y, si el script termina, genera 101 párrafos.
  seguiDO = false cambia la bandera. Al acabar esta vuelta se ejecuta i++
  y la siguiente comprobación del for impide continuar.
  async no vuelve simultáneos estos bucles: cada script ejecuta su código
  síncrono hasta finalizar o fallar antes de que el otro pueda comenzar.
  ********************************************************************/
  if (i >= MAXI) {
    seguiDO = false;
  }
}
