
const backBtn = document.getElementById("backBtn")

const container = document.getElementById("contenedor")

const clave = localStorage.getItem('departamento')

const seccion = localStorage.getItem('numero')

const JSON = `js/${clave}.json`

console.log(JSON)


//El boton lleva atras
backBtn.addEventListener("click", () => {
window.location = "departamento.html"
})


document.addEventListener("DOMContentLoaded", () => {

//Cargar datos del pesquero
fetch(JSON)
.then(res => res.json())
.then(data => {
    container.innerHTML = `
    <h1>${data[seccion].nombre}</h1>
    <p>${data[seccion].descripcion}</p>
    
    `

    })
    
})