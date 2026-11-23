/*
29. El salario máximo 
Hay un objeto salaries: 
let salaries = { 
"John": 100, 
"Pete": 300, 
"Mary": 250 
}; 
Crear la función topSalary(salaries) que devuelva el nombre de la persona 
mejor pagada. 
• Si salaries es vacío, debe devolver null. 
• Si hay varias personas con la mejor paga, devolver cualquiera de 
ellas. 
PD: Utilice Object.entries y desestructuración para iterar sobre pares de 
claves/valores.
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function topSalary(salaries){

    if (salaries == null || Object.keys(salaries).length === 0) {
        return null;
    }

    let mejorPagado={nombre:"", salario:0};

    for (let [clave, valor] of Object.entries(salaries)) { 

        if(valor> mejorPagado.salario){

            mejorPagado.nombre=clave;
            mejorPagado.salario=valor;
            
        }

    } 

    return mejorPagado.nombre;
    
}


console.log(topSalary(salaries));

console.log(topSalary({}));
