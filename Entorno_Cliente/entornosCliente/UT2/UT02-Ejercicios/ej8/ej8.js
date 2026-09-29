/**********************************************
 
8.	¿Cuáles son los resultados de estas expresiones?
alert( null || 2 || undefined );
alert( alert(1) || 2 || alert(3) );
alert( 1 && null && 2 );
alert( alert(1) && alert(2) );
alert( null || 2 && 3 || 4 );

**********************************************/

// || devuelve el primer valor que cuenta como verdadero: salta null y se queda con 2.
// Como ya ha encontrado 2, no llega a evaluar undefined.
alert( null || 2 || undefined ); // Muestra 2.
// Primero, alert(1) muestra 1 y devuelve undefined, que cuenta como falso.
// || sigue hasta 2 y lo devuelve a la alerta exterior. No se ejecuta alert(3).
alert( alert(1) || 2 || alert(3) ); // Muestra 1 y después 2.
// && devuelve el primer valor que cuenta como falso: pasa por 1 y se detiene en null.
// Devuelve null sin llegar a evaluar 2.
alert( 1 && null && 2 ); // Muestra null.
// alert(1) muestra 1, pero devuelve undefined, que cuenta como falso.
// && se detiene ahí: no ejecuta alert(2) y la alerta exterior muestra undefined.
alert( alert(1) && alert(2) ); // Muestra 1 y después undefined.
// && tiene prioridad sobre ||: 2 && 3 devuelve 3 porque ambos cuentan como verdaderos.
// Queda null || 3 || 4: se salta null y se devuelve 3, sin llegar a evaluar 4.
alert( null || 2 && 3 || 4 ); // Muestra 3.
