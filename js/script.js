let op  = 1;
let antiguo=null;
let array =["El Elemento del DOM, que ha desencadenado un evento.","Siempre se refiere al elemento del event Handler (Manejador de Eventos) que ha sido atachado a un event.target especifico, este identifica el elemento en el que produjo el evento."];
let script=['document.querySelector(".body").addEventListener("click",e=>{ e.target.classList.toggle("resaltado"); });',
'document.querySelector(".body").addEventListener("click",e=>{ e.currentTarget.classList.toggle("resaltado"); });'];

let crearNodo=mensaje=>{
    if(antiguo = document.querySelector(".codigo"))     
        antiguo.parentNode.removeChild(antiguo);
    //console.log(antiguo)

    let elDiv = document.createElement("code");
    elDiv.className = "codigo";
    let elTexto= document.createTextNode(mensaje);
    elDiv.appendChild(elTexto);
    document.querySelector("[for=selector]").appendChild(elDiv);
}

crearNodo(script[0]);

let limpieza=()=>{
    document.querySelectorAll(".body,.listado,.item,.enlace").forEach(currentValue=>{
        currentValue.classList.remove("resaltado");
    });

}
document.querySelector(".body").addEventListener("click",e=>{
    e.preventDefault();
    switch(op){
        case 1:
            e.target.classList.toggle("resaltado");
            break;
        case 2:
            e.currentTarget.classList.toggle("resaltado"); 
            break;
    }
   
});

document.querySelector("#selector").addEventListener("change",e=>{
    limpieza();    
    op = Number(document.querySelector("#selector").options[document.querySelector("#selector").selectedIndex].value);
    crearNodo(script[op-1]);
    alert(array[op-1]);
});

document.querySelector(".pie_pagina").addEventListener("mouseover",e=>{
    //alert(`mouseover => relatedTarget: ${e.relatedTarget.nodeName}, target: ${e.target.nodeName}, currentTarget: ${e.currentTarget.nodeName}`);
    e.relatedTarget.classList.add("resaltado");
});

// document.querySelector("a").addEventListener("mouseout",e=>{
//     //alert(`mouseout => relatedTarget: ${e.relatedTarget.nodeName}, target: ${e.target.nodeName}, currentTarget: ${e.currentTarget.nodeName}`);
// });