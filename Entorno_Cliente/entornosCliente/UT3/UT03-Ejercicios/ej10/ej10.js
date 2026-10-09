/********************************************************************************

10.	Crea una función validarNIF_NIE( nif_nie) para comprobar si un DNI 
    o NIE es correcto, es decir, que contiene 8 dígitos y una letra, y 
    que la letra es correcta.

    En el caso del DNI:
    •	Se toma el nº del DNI
    •	Se divide por 23.
    •	Cogemos el resto (tiene que ser un número comprendido entre el 0 y el 22)
    •	A cada número entre el 0 y el 22 le corresponde una letra de control de 
        acuerdo con la tabla de asignación de abajo:

    0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22
    T	R	W	A	G	M	Y	F	P	D	X	B	N	J	Z	S	Q	V	H	L	C	K	E

    Para el NIE: tienen una letra (X, Y, Z), 7 números y una letra de control. 
    Para el cálculo de la letra de control, se sustituyen las letras iniciales 
    (X, Y o Z) por los siguientes valores:
    •	X → 0
    •	Y → 1
    •	Z → 2
    y se hacen los mismos pasos que para el DNI.

    Ej. de documentos válidos:
    •	DNI: 56221526G, 50127621H, 76069822J, 73126034H
    •	NIF: 12313207L, 74997547K, 98319066T, 70454006S
    •	NIE: Y6478436V, X5997109C, Y7492239A, X3412471F

************************************************************************************/

"use strict";

function validarDniNie(dniNie) {

    // El documento debe ser una cadena de 9 caracteres.
    if (typeof dniNie !== "string" || dniNie.length !== 9) {
        return false;
    }

    // Pasamos las letras a mayúsculas para aceptar también las minúsculas.
    dniNie = dniNie.toUpperCase();

    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let numero = dniNie.substring(0, 8);
    let letra = dniNie.substring(8);

    // Si es un NIE, sustituimos la letra inicial por su valor numérico.
    if (numero[0] === "X") {
        numero = numero.replace("X", "0");
    } else if (numero[0] === "Y") {
        numero = numero.replace("Y", "1");
    } else if (numero[0] === "Z") {
        numero = numero.replace("Z", "2");
    }

    // Tras la sustitución, los 8 caracteres deben ser dígitos del 0 al 9.
    for (let i = 0; i < numero.length; i++) {
        if (!"0123456789".includes(numero[i])) {
            return false;
        }
    }

    // El resto de dividir entre 23 indica la posición de la letra correcta.
    let resto = Number(numero) % 23;

    // Devolvemos true si la letra coincide y false si es incorrecta.
    return letra === letras[resto];
}

console.log(validarDniNie("56221526G")); // true: DNI correcto.
console.log(validarDniNie("12313207L")); // true: NIF correcto.
console.log(validarDniNie("Y6478436V")); // true: NIE correcto.
console.log(validarDniNie("x3412471f")); // true: también acepta minúsculas.
console.log(validarDniNie("56221526A")); // false: letra de control incorrecta.
console.log(validarDniNie("Q6478436V")); // false: letra inicial no válida.
console.log(validarDniNie("5622152G")); // false: faltan dígitos.
