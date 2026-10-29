<?php

/************************************************************************************
ERRORES, AVISOS Y EXCEPCIONES
Distinguiremos los avisos, como E_WARNING, de las excepciones.
Con un aviso normalmente continuaremos la ejecución; al lanzar una excepción,
abandonaremos el bloque actual y buscaremos un catch que pueda capturarla.
Si no capturamos la excepción, terminaremos la ejecución con un error fatal.
************************************************************************************/

/************************************************************************************
OCULTACIÓN DE LOS MENSAJES DE ERROR
Utilizaremos ini_set('display_errors', 0) para ocultar los mensajes automáticos
de error de PHP durante la ejecución. No evitaremos que el problema ocurra.
El aviso podrá seguir registrándose si tenemos activado el registro de errores.
Los mensajes que mostraremos con echo seguirán apareciendo: esta opción no
ocultará el texto que escribiremos nosotros en el catch.
************************************************************************************/
ini_set('display_errors', 0);

const PI=3.1416;

echo PI. "<br>";

/************************************************************************************
TRY: BLOQUE EN EL QUE PODREMOS LANZAR UNA EXCEPCIÓN
Dentro del try ejecutaremos las instrucciones que queremos vigilar.
Si lanzamos una excepción, dejaremos de ejecutar las instrucciones restantes
del try y pasaremos al primer catch compatible. No convertiremos los avisos
de PHP en excepciones por el simple hecho de escribirlos dentro de un try.
************************************************************************************/
try
{
    /************************************************************************************
    REDEFINICIÓN DE UNA CONSTANTE: AVISO E_WARNING
    Intentaremos definir PI otra vez, ahora con el valor 25. Como ya existe,
    provocaremos un aviso E_WARNING y obtendremos false como resultado de define.
    Conservaremos el valor original de PI, 3.1416, y continuaremos con el throw.
    No veremos el aviso porque hemos desactivado display_errors. Tampoco lo
    capturaremos con catch (Exception $e), porque un aviso no es una excepción.
    ************************************************************************************/
    define ("PI", 25);

    /************************************************************************************
    THROW: LANZAMIENTO MANUAL DE UNA EXCEPCIÓN
    Crearemos un objeto Exception con un mensaje y lo lanzaremos mediante throw.
    Así interrumpiremos el flujo del try y pasaremos al catch correspondiente.
    No comprobaremos el resultado de define con un if: lanzaremos la excepción
    siempre que lleguemos a esta línea. El aviso anterior no la lanzará por sí solo.
    ************************************************************************************/
    throw new Exception("No puedes redefinir una constante");
} 
/************************************************************************************
CATCH: CAPTURA DE LA EXCEPCIÓN Y LECTURA DEL MENSAJE
Con catch (Exception $e) capturaremos objetos Exception y de sus clases hijas.
Recibiremos en $e el objeto que hemos lanzado y utilizaremos getMessage() para
recuperar el mensaje que hemos indicado al crearlo. Con echo lo mostraremos
precedido de "Error: ". Ese texto será nuestro mensaje, no el aviso de define.
Tras atender la excepción, continuaremos después del catch si hay más código.
No capturaremos aquí objetos Error: Error y Exception serán familias distintas,
aunque ambas implementarán Throwable, la interfaz común de los objetos lanzables.
************************************************************************************/
catch (Exception $e) 
{
    echo "Error: " . $e->getMessage();
}

?>