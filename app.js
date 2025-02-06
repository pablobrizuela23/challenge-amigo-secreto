// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function actualizarListaAmigos(){
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = "";

   
    for(let i=0; i<amigos.length ;i++){
       let elemento = document.createElement("li");
       elemento.innerHTML = amigos[i];
       lista.appendChild(elemento);

    }
}

function agregarAmigo(){
    let campo = document.getElementById("amigo");
    
    if (campo.value.trim()=== ""){
        alert("Por favor inserte un nombre");
        campo.focus();
        return;
    }   
    amigos.push(campo.value);
    actualizarListaAmigos();
    campo.value = "";

}

function sortearAmigo(){
    if(amigos.length != 0 ){
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = amigos[indiceAleatorio];
        let elemento = document.getElementById("resultado");
        elemento.innerHTML = amigoSecreto;
    }else{
        alert("la lista esta vacia");
    }
}

