let a = 2;
let x = 1 + (a *= 2);
console.log(a, x);

/*

*****************************RESPUESTAS*****************************

    -5.	¿Cuáles son los valores de ‘a’ y ‘x’ después del código a 
     continuación?
     La variable 'a' es iagual a 4 mientras que 'x' es igual a 5. 
     Esto se debe a que el operador de asignación combinado (a *= 2) 
     multiplica el valor actual de 'a' por 2 y luego lo asigna de 
     nuevo a 'a'. Por lo tanto, 'a' se convierte en 4. Luego, 'x' se 
     calcula como 1 + 4, lo que da como resultado 5.

*********************************************************************

*/