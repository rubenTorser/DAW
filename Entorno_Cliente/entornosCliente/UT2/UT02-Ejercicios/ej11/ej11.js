/**********************************************
 
11.	INICIO SESIÓN. Escribe un código que pregunte 
por el inicio de sesión con prompt.
Si el visitante ingresa "Admin", entonces debe 
pedir una contraseña (con un nuevo prompt). 
Si la entrada es una línea vacía o Esc, entonces 
muestra “Cancelado.”. Si es otra cadena de texto, 
entonces muestra “No te conozco”.
La contraseña se comprueba de la siguiente manera:
•	Si es igual a “TheMaster”, entonces muestra 
    “¡Bienvenido!”.
•	Si es otra cadena de texto, muestra 
    “Contraseña incorrecta”.
•	Para una cadena de texto vacía o una entrada 
    cancelada, muestra “Cancelado.”
Por favor usa bloques anidados de if. Piensa en 
la legibilidad general del código.
Pista: si se le pasa una entrada vacía a un prompt, 
retorna una cadena de texto vacía ''. 
Presionando ESC durante un prompt retorna null.


**********************************************/

/**********************************************
prompt pide el nombre y lo guarda en login.
El segundo argumento, "", deja el campo vacío
al abrirlo. Si aceptamos sin escribir, devuelve
""; si cancelamos o pulsamos Esc, devuelve null.
**********************************************/
let login = prompt("Ingrese su nombre de usuario:", "");

/**********************************************
=== comprueba si el texto es exactamente "Admin",
respetando las mayúsculas y los espacios.
Solo en ese caso se pide la contraseña.
**********************************************/
if (login === "Admin") {
    let password = prompt("Ingrese su contraseña:", "");

    /**********************************************
    Este if está dentro del anterior y comprueba
    si la contraseña es exactamente "TheMaster".
    Si coincide, muestra el mensaje de bienvenida.
    **********************************************/
    if (password === "TheMaster") {
        alert("¡Bienvenido!");
    } else if (password === "" || password === null) {
        /**********************************************
        || significa "o": basta con que se cumpla
        una de las dos comprobaciones.
        Si la contraseña está vacía ("") o hemos
        cancelado (null), mostramos "Cancelado.".
        **********************************************/
        alert("Cancelado.");
    } else {
        /**********************************************
        Si la contraseña no coincide y tampoco está
        vacía ni se ha cancelado, es incorrecta.
        Escribir solo espacios también llega aquí.
        **********************************************/
        alert("Contraseña incorrecta.");
    }
} else {
    /**********************************************
    Si el usuario no es exactamente "Admin",
    mostramos el mensaje de usuario estándar
    sin pedir contraseña. Esto también ocurre
    si dejamos el usuario vacío o cancelamos.
    **********************************************/
    alert("No te conozco.");
}