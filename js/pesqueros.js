
const backBtn = document.getElementById("backBtn")

const container = document.getElementById("contenedor")

const clave = localStorage.getItem('departamento')

const seccion = localStorage.getItem('numero')

const JSON = `js/${clave}.json`


//El boton lleva atras
backBtn.addEventListener("click", () => {
    window.location = "departamento.html"
})

//Evento al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {

    //Cargar datos del pesquero
    fetch(JSON)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const titulo = data[seccion].nombre ;
            const profundidad = data[seccion].profundidad ;
            const enganche = data[seccion].enganche;

            container.innerHTML = `
    <h1>${titulo}</h1>
    <img src="Fotos/index${data[seccion].departamento.toLowerCase()}.jpg">
    <p>${data[seccion].descripcion}</p>
    <table>
    <th>Caracteristicas</th>
    <tr><td>Profundidad:</td> <td id="info">${profundidad}</td></tr>
    <tr><td>Enganche:</td><td>${enganche}</td><tr/>
    </table>
    
    `;

    color("profundidad", profundidad)


        })        
})

    
function color(idElemento, valor){
const elemento = document.querySelector('');
if (!elemento) return;

const num = Number(valor)

elemento.classList.remove("poco", "medio", "mucho");

    if (num > 0 && num < 2) {
        elemento.classList.add("rojo");
      } else if (profundidad === 3) {
        elemento.classList.add("amarillo");
      } else {
        elemento.classList.add("verde");
      }
    }

 /*   function escala(numero) {
    if (numero = 1) {
        lugar.classList.add("poco");
        return "Nada"
    } else {
        return "algo";
    }
}*/



