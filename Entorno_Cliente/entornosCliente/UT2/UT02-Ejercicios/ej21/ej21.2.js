function factorial(n){

    // En ej21.1.js usamos un bucle y guardamos el producto en resultado.
    // Aquí usamos recursividad: la función se llama a sí misma.
    // Como indica el enunciado, suponemos que n es un entero mayor o igual a 0.

    // Este es el caso base: el factorial de 0 y el de 1 valen 1.
    // Devolvemos ese 1 directamente y no hacemos más llamadas.
    if(n===0 || n===1){
        return 1;
    }
    else{
        // Para n mayor que 1, se cumple: n! = n * (n-1)!
        // Por ejemplo, factorial(5) devuelve 5 * factorial(4).
        // Cada llamada resta 1 a n, así que acabamos llegando a factorial(1).
        // Eso hace que las llamadas se detengan en el caso base.

        // Cada llamada espera el resultado de la siguiente para multiplicarlo por su n.
        // Al volver: factorial(2) da 2 * 1; factorial(3) da 3 * 2;
        // factorial(4) da 4 * 6 y factorial(5) da 5 * 24 = 120.
        // Funciona porque formamos el producto 5 * 4 * 3 * 2 * 1:
        // son los mismos factores que multiplica el bucle, en orden inverso.
        return n * factorial(n-1);
    }

}