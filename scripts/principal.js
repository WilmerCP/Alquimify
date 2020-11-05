    
    /*Codigo para menu pegajoso*/

/*Obtenemos nuestros elementos html */

let header = document.getElementById("header");
let inicio  = document.getElementById("inicio");

let altoHeader = header.offsetHeight;


function activarPegajoso(){

    let bajada = document.documentElement.scrollTop;

    if(bajada !=0){

        header.classList.add("cambio");
        var espacio = altoHeader+30;
        inicio.style.paddingTop = espacio+"px";

    }else{

        header.classList.remove("cambio");
        inicio.style.paddingTop = "30px";
    }

}

    window.addEventListener("scroll", activarPegajoso);


                                /* Código del menu-hamburguesa */
                                
/* Obtenemos elementos html */

let hamburguesa = document.getElementById("hamburguesa");
let menu = document.getElementById("menu-principal");

hamburguesa.addEventListener("click", mostrarMenu);

function mostrarMenu(){

    menu.classList.toggle("visible");

}



