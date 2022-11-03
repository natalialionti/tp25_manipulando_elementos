const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const sbi = (element) => document.getElementById(element);




const main = sbi("mainContainer");
const subtitulo = qs(".subtitulo");
const parrafos = qsa("p");
const listado = qs("h2 a");


let nombre = prompt("Cual es tu nombre?");
subtitulo.textcontent += nombre ?  nombre : invitado; 
listado.style.color = "#FFFF"

let respuesta = confirm("¿Querés cambiar el color de fondo?");
if(respuesta) {
    qs("body").classList.add("fondo")
};

for(let i=0; i < parrafos.length; i++) {
    if(i%2===0){
        parrafo[i].classList.add("destacadoPar")
    }else{
        parrafo[i].classList.add("destacadoImpar")
    }

};



