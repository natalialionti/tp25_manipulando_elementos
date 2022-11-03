window.onload = function (){
    let body = document.querySelector("body");
    let moviesListTitulo = document.querySelector(".moviesListTitulo");

    let modo = confirm("Desea modo oscuro?");
    if(modo){
        body.style.backgroundColor = "#7f7f7f"
        body.classList.add("fondoMoviesList");
    }

    console.log(body);
    moviesListTitulo.innerHTML = "LISTADO DE PELICULAS";
    moviesListTitulo.STYLE.COLOR = "WHITE";
    moviesListTitulo.style.backgroundColor = "teal";
    moviesListTitulo.style.padding = "20px";
}