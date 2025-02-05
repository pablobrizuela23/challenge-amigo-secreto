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

agregarNombres();