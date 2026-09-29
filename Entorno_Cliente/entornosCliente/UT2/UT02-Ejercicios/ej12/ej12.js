/**********************************************
 
12.	EDAD2. Crea una función edad2(edad) que recibe 
un parámetro, edad. La función devolverá el 
siguiente texto en función del valor de edad:
    *Mayor o igual que 0 y menor o igual que 12: “Niño”
    *Mayor que  12 y menor o igual que 25: “Joven”
    *Mayor que 25 y menor o igual que 60: “Adulto”
    *Mayor que 60: “Jubilado”
    *Si edad es un número negativo devolverá un texto con un mensaje de error
    *Si edad no es un número, devolverá un mensaje de error

**********************************************/

/**********************************************
edad2 recibe una edad y devuelve un texto.
Cada return devuelve el resultado y termina
la función, sin comprobar el resto de condiciones.
**********************************************/
function edad2(edad) {
    /**********************************************
    typeof indica el tipo de dato y !== significa
    "distinto de". Comprobamos que sea un número.
    Number.isNaN detecta NaN, el resultado de una
    conversión que no ha podido obtener un número.
    Aunque NaN tiene tipo "number", no es una edad
    válida. Con || basta con que no sea un número
    o que sea NaN para devolver el error.
    **********************************************/
    if (typeof edad !== "number" || Number.isNaN(edad)) {
        return "Error: La edad debe ser un número.";
    }
    /**********************************************
    Si la edad es menor que 0, devolvemos un error
    porque no aceptamos edades negativas.
    **********************************************/
    else if (edad < 0) {
        return "Error: La edad no puede ser un número negativo.";
    }
    /**********************************************
    && exige que se cumplan las dos condiciones:
    la edad debe estar entre 0 y 12, incluidos.
    En ese caso, devolvemos "Niño".
    **********************************************/
    else if (edad >= 0 && edad <= 12) {
        return "Niño";
    }
    /**********************************************
    Si la edad es mayor que 12 y menor o igual
    que 25, devolvemos "Joven". El 25 se incluye.
    **********************************************/
    else if (edad > 12 && edad <= 25) {
        return "Joven";
    }
    /**********************************************
    Si la edad es mayor que 25 y menor o igual
    que 60, devolvemos "Adulto". El 60 se incluye.
    **********************************************/
    else if (edad > 25 && edad <= 60) {
        return "Adulto";
    }
    /**********************************************
    Ya hemos descartado los errores y las edades
    hasta 60. Si llegamos aquí, la edad es mayor
    que 60 y devolvemos "Jubilado".
    **********************************************/
    else {
        return "Jubilado";
    }
}

/**********************************************
prompt pide la edad y muestra 18 como valor
inicial. Su respuesta es texto, aunque escribamos
un número: por ejemplo, devuelve "18", no 18.
Number convierte ese texto a número para que
la comprobación de tipo no lo rechace.
Si escribimos "hola", la conversión produce NaN
y la función devuelve el error de edad no numérica.
Si dejamos el campo vacío o cancelamos, Number
lo convierte en 0 y la función devuelve "Niño".
**********************************************/
let edad = Number(prompt("Ingrese su edad:", 18));
/**********************************************
Llamamos a edad2 con la edad introducida y alert
muestra el texto que devuelve la función.
**********************************************/
alert(edad2(edad));
