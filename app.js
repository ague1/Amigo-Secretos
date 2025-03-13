// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listasAmigos = [];


function asignarTexto(etiqueta, texto){
    let etiqueteHTML = document.getElementById(etiqueta);
    etiqueteHTML.innerHTML = texto;
    return;
}
function limpiarCaja(elemento){
    let contenedor = document.getElementById(elemento).value ='';
}


function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;//Esto toma el input 

    if (nombreDeAmigo.length === 0 ) {   
        alert("Ingrese un nombre de su compañero, si no tiene amigos :c")
    }
    else{
        listasAmigos.push(nombreDeAmigo);
        asignarTexto('listaAmigos', listasAmigos.join('<br>'));
    }
    limpiarCaja('amigo');
}



function sortearAmigo(){
    let totalAmigos = listasAmigos.length;

    if(totalAmigos === 0) {
        asignarTexto('resultado', "No hay amigos para sortear.");
        return;
    }else{
        let amigoElegido = Math.floor(Math.random() * totalAmigos);
        asignarTexto('resultado', listasAmigos[amigoElegido]);

    }
    
    listasAmigos = [];
    asignarTexto('listaAmigos', listasAmigos)
  
}