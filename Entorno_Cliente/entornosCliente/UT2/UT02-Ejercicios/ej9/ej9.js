/**********************************************
 
9.	En las siguientes sentencias, ¿qué alerts van a ejecutarse?
if (-1 || 0) alert( "primero" );
if (-1 && 0) alert( "segundo" );
if (null || -1 && 1) alert( "tercero" );

**********************************************/


// -1 cuenta como verdadero, aunque sea negativo, porque es un número distinto de 0.
// || devuelve -1 sin evaluar 0, así que se cumple el if.
if (-1 || 0) alert( "primero" ); // Muestra "primero".
// && pasa de -1 (que cuenta como verdadero) a 0 (que cuenta como falso) y devuelve 0.
// Como la condición cuenta como falsa, el if no ejecuta la alerta.
if (-1 && 0) alert( "segundo" ); // No muestra nada.
// && tiene prioridad sobre ||: -1 && 1 devuelve 1 porque ambos cuentan como verdaderos.
// Queda null || 1: null cuenta como falso y || devuelve 1, así que se cumple el if.
if (null || -1 && 1) alert( "tercero" ); // Muestra "tercero".
