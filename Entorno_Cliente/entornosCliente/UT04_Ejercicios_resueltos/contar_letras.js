/* EJERCICIO 1 · CONTAR LETRAS
   Ejemplo de ejecución: node contar_letras.js "banana" "a"
   Si omitimos la letra, las tres funciones usan "a". */

/* FUNCIÓN DECLARADA */
function contarDeclarada(cadena, letra = "a") {
    let total = 0;
    for (const caracter of cadena) {
        if (caracter === letra) total++;
    }
    return total;
}

/* EXPRESIÓN DE FUNCIÓN */
const contarExpresion = function (cadena, letra = "a") {
    const caracteres = Array.from(cadena);
    let total = 0;
    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] === letra) total++;
    }
    return total;
};

/* FUNCIÓN FLECHA · FILTER CONSERVA LAS COINCIDENCIAS */
const contarFlecha = (cadena, letra = "a") =>
    Array.from(cadena).filter(caracter => caracter === letra).length;

const cadena = process.argv[2] ?? "casa";
const letra = process.argv[3];
console.log("Declarada:", contarDeclarada(cadena, letra));
console.log("Expresión:", contarExpresion(cadena, letra));
console.log("Flecha:", contarFlecha(cadena, letra));
