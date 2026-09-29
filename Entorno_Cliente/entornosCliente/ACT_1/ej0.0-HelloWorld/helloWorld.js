/*********************************************************************
MENSAJE EN CONSOLA Y CAMBIO DE ESTILO EN EL DOCUMENTO
Este archivo se ejecuta en el navegador al cargar ej0.0.html. La etiqueta
script de ese HTML usa defer para que los elementos ya estén disponibles.
Los bloques delimitados por barra y asterisco son comentarios JavaScript:
explican el programa, pero no se ejecutan como instrucciones.
**********************************************************************/

/*********************************************************************
console es el objeto que permite escribir en las herramientas de desarrollo.
El punto accede a su método log y los paréntesis lo llaman con un argumento:
la cadena de texto "Hello, World!". Las comillas delimitan la cadena y no
forman parte del mensaje. El punto y coma termina la instrucción.
El resultado aparece en la pestaña Consola, no en el contenido de la página.
**********************************************************************/
console.log("Hello, World!");

/*********************************************************************
document representa la página mediante el DOM, un árbol de objetos que
JavaScript puede consultar y modificar. getElementById busca el elemento
cuyo atributo id coincide con "colorLetra", respetando las mayúsculas.
La propiedad style da acceso a sus estilos CSS en línea; no es el texto
del encabezado ni una lista de todos sus estilos calculados.
const declara una variable que no se puede reasignar a otro valor. Aquí
guarda una referencia al objeto style, cuyas propiedades sí pueden cambiar.
El nombre de la variable y el id coinciden por claridad, pero esa igualdad
no es obligatoria: la búsqueda depende de la cadena pasada al método.
Si el id no existiera, getElementById devolvería null y acceder a .style
provocaría un error. Por eso son importantes el id del HTML y su defer.
**********************************************************************/
const colorLetra = document.getElementById("colorLetra").style;

/*********************************************************************
El operador = asigna un valor a la propiedad color del objeto guardado.
color es la propiedad CSS que establece el color del texto y "blue" es
un nombre de color válido en CSS. El encabezado pasa a mostrarse en azul.
Se modifica una propiedad del objeto; no se reasigna la constante colorLetra.
El cambio afecta al documento abierto, no al archivo HTML guardado en disco.
**********************************************************************/
colorLetra.color = "blue";
