const reservasTarde = (lista) =>
    lista.filter((reserva) => reserva.hora >= 15).map( (reserva) => `${reserva.pista} (${reserva.hora}:00)`);

function cancelar(lista, socio, hora){

    let pos = lista.findIndex((reserva) => reserva.socio === socio && reserva.hora === hora);
    if (pos !== -1) {
        return false;
    } 

    lista.splice(pos, 1);
    return true;
}


alumno.notas.EIE = 6;
alumno.notas.DWES = 5;

function informe(al){

    let suspensos = [];

    for (let modulo in al.notas) {
        if(al.notas[modulo] < 5){
            suspensos.push(modulo);
        }
    }
    let texto = suspensos.length === 0 ? 'ninguno' : suspensos.join(', ');
    return `El alumno ${al.nombre} tiene suspensos en: ${texto}`;

}


function copiaAprobados(al){

    let copia = {nombre: al.nombre, notas: {}};

    for(let modulo in al.notas){

        if(al.notas[modulo] >= 5){
            copia.notas[modulo] = al.notas[modulo];
        }
        return copia;
    }

}


