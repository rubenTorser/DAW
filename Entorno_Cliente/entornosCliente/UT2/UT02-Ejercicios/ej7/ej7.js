/**********************************************
 
7.	Aquí hay un código que le pide al usuario dos 
números y muestra su suma.
Funciona incorrectamente. El resultado en el ejemplo 
a continuación es 12 (si el primer número es un 1 y 
el segundo es un 2). ¿Por qué? Arréglalo. 
El resultado debería ser 3.

*CÓFIGO ORIGINAL:*
let a = prompt("¿Primer número?", 1);
let b = prompt("¿Segundo número?", 2);
alert(a + b); // 12

**********************************************/

let a = prompt("¿Primer número?", 1);
let b = prompt("¿Segundo número?", 2);
alert(Number(a) + Number(b)); // El resultado ahora es 3









/**********************************RESPUESTAS*********************************

    prompt() devuelve el texto introducido como una cadena (string), aunque el
    usuario escriba números. Si introduce 1 y 2, a guarda "1" y b guarda "2".

    Los argumentos 1 y 2 de prompt() solo indican los valores que aparecen
    inicialmente en los cuadros de entrada; no determinan el tipo de la respuesta.

    Al hacer a + b, el operador + recibe dos cadenas y las concatena, es decir,
    une sus textos: "1" + "2" produce "12", en lugar de realizar una suma.

    Por eso se ha cambiado la operación a Number(a) + Number(b). Number()
    convierte cada cadena en un número antes de realizar la operación, de modo
    que + hace una suma matemática: 1 + 2 = 3. alert() muestra ese resultado.

    La conversión se aplica a ambos valores porque, si uno siguiera siendo
    una cadena, + continuaría concatenando.

    Este cambio no modifica las variables a y b: utiliza sus versiones
    numéricas para calcular la suma.

****************************************************************************/
