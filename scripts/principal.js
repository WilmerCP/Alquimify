    
    /*Codigo para menu pegajoso*/

/*Obtenemos nuestros elementos html */

const header = document.getElementById("header");
const inicio  = document.getElementById("inicio");

const altoHeader = header.offsetHeight;


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


                /* Codigo para mostrar el formulario*/

/* Obtengo todos mis botones CTA*/

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

const CTAs = [boton1, boton2, boton3];

const popup = document.getElementById("popup");
const formulario = document.getElementById("formulario");
const body = document.getElementById("body");


    /*Funcion para mostrar o quitar el popup*/

    function mostrarPopup(){

        popup.classList.toggle("visible");
        body.classList.toggle("superpuesto");

    }

    /*Esta funcion activa la escucha de los eventos de los Call To Action */

function abrirFormulario(){

    for(let i = 0;i<=2;i++){

        CTAs[i].addEventListener("click",mostrarPopup);

    }
}

abrirFormulario();

    /*Codigo para que se pueda cerrar el formulario*/

    /*Obtengo mi boton de salir*/
    const salir_formulario = document.getElementById("salir_formulario");

    /*Esta funcion activa la escucha del evento para que se cierre el popup*/
    function cerrarFormulario(){

        salir_formulario.addEventListener("click",mostrarPopup);
        
    }
    cerrarFormulario();


    
