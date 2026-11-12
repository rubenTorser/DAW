/*2. Escribe una función comprobarSpam(str) que devuelva true si str contiene ‘gratis’
o ‘XXX’, de lo contrario false*/

function comprobarSpam(str){

    if(str.includes('gratis') | str.includes('XXX')){
        return true;
    }
    else{
        return false;
    }

}

console.log(comprobarSpam('esto es gratis'));
console.log(comprobarSpam('esto es false'));
console.log(comprobarSpam('esto es XXX'));