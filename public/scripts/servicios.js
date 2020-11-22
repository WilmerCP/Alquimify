    /*Codigo para menu pegajoso*/

/*Obtenemos nuestros elementos html */

const header = document.getElementById("header");
const inicio  = document.getElementById("inicio");

/*let altoHeader = header.offsetHeight;*/


function activarPegajoso(){

    let bajada = document.documentElement.scrollTop;

    if(bajada !=0){

        header.classList.add("cambio");



    }else{

        header.classList.remove("cambio");

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
