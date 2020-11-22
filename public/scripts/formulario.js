
let datos = {
    nombre: "",
    apellido: "",
    empresa: "",
    telefono: "",
    email: "",
    direccion: "",
    pais: "",
    descripcion: ""
  }

boton_enviar.addEventListener("click",obtenerDatos);

function obtenerDatos(e){

    e.preventDefault();

    datos.nombre = campo_nombre.value;
    datos.apellido = campo_apellido.value;
    datos.empresa = campo_empresa.value;
    datos.telefono = campo_telefono.value;
    datos.email = campo_email.value;
    datos.direccion = campo_url.value;
    datos.pais = campo_pais.value;
    datos.descripcion = campo_descripcion.value;

    console.log(datos);

    fetch('/api',{
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        alert("Los datos han sido guardados correctamente, te estaremos contactando.");
    })
    .catch(err => {
        console.error(err)
        alert("Ha habido un error, por favor refrescar la página e intentar nuevamente.");
    });

}