/*11. INICIO SESIÓN. Escribe un código que pregunte por el inicio de sesión con prompt. 
Si el visitante ingresa "Admin", entonces debe pedir una contraseña (con un nuevo
prompt). Si la entrada es una línea vacía o Esc, entonces muestra “Cancelado.”. Si es otra
cadena de texto, entonces muestra “No te conozco”. 
La contraseña se comprueba de la siguiente manera: 
• Si es igual a “TheMaster”, entonces muestra “¡Bienvenido!”.
• Si es otra cadena de texto, muestra “Contraseña incorrecta”.
• Para una cadena de texto vacía o una entrada cancelada, muestra “Cancelado.” 
Por favor usa bloques anidados de if. Piensa en la legibilidad general del código. 
Pista: si se le pasa una entrada vacía a un prompt, retorna una cadena de texto vacía ''.
Presionando ESC  durante un prompt retorna null. */

function autenticarse(){

    let usuario=prompt('Introduce el usuario');

    if(usuario=='' | usuario == null){
        alert('Cancelado');
    }
    else if(usuario != 'Admin'){
        alert('No te conozco');
    }
    else{
        let contra=prompt('Introduce la contraseña');

        if(contra=='' | contra == null){
        alert('Cancelado');
        }
        else if(contra != 'TheMaster'){
            alert('Contraseña incorrecta');
        }
        else{
            alert(`Bienvenido Usuario ${usuario} Contraseña ${contra}`);
        }
    }

}

autenticarse();