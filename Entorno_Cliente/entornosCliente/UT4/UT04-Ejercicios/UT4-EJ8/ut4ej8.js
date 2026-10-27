/*******************************************************************************

8.	IndexOf
Tenemos un array con números y cadenas, con algunas cadenas repetidas.
    1.	Queremos buscar una cadena concreta y cambiarla por la misma cadena 
        en mayúsculas, pero sólo la primera vez que aparece. Si no encuentra 
        la cadena, no hace nada (tener en cuenta que no dé un error en consola).
    2.	Repetir el ejercicio anterior, pero la cadena que queremos cambiar es 
        la última que aparece.
    3.	Repetir el ejercicio anterior, pero cambiar todas las veces que 
        aparece la cadena.

********************************************************************************/


let bolaDeDrac = [

    { id: 1, nombre: "Son Goku" },
    { id: 2, nombre: "Vegeta" },
    { id: 3, nombre: "Kame-Senin" },
    { id: 4, nombre: "Son Goku" },
    { id: 5, nombre: "Kame-Senin" }

];

let encontrado = false;
let cadenaABuscar = "Kame-Senin"

for (let i = 0; i < bolaDeDrac.length && encontrado == false; i++) {

    if (bolaDeDrac[i].nombre === cadenaABuscar) {

        let cadenaEnMayusculas = cadenaABuscar.toUpperCase();

        bolaDeDrac[i].nombre = cadenaEnMayusculas;

        encontrado = true;

    }

}

bolaDeDrac.forEach(elemento =>

    console.log(elemento.nombre)

);


