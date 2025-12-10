
const backBtn = document.getElementById("backBtn")

const container = document.getElementById("contenedor")

const clave = localStorage.getItem('departamento')

const seccion = localStorage.getItem('numero')

const JSON = `JSON/${clave}.json`


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
            const titulo = data[seccion].nombre;
            const profundidad = data[seccion].profundidad;
            const enganche = data[seccion].enganche;
            const foto = data[seccion].imagenes
            const departamento = data[seccion].departamento
            const acceso = data[seccion].acceso
            const latitud = data[seccion].ubicacion.lat
            const longitud = data[seccion].ubicacion.lng

            
            container.innerHTML = `
            <div class="info-grid">

            <div class="info-text">
    <h1>${titulo}</h1>
    
    <p id="desc">${data[seccion].descripcion}</p>

    <span class="tag" id="acceso">Accesibilidad: ${acceso}</span>
    <span class="tag" id="profundidad">Profundidad: ${profundidad}</span>
    <span class="tag" id="enganche">Enganche: ${enganche}</span>
    </div>

    <div class="info-img">
    <img src="${foto}">
    </div>

    <div class="map">
        <iframe
          width="100%"
          height="200"
          frameborder="0"
          src="https://maps.google.com/maps?q=${latitud},${longitud}&z=15&output=embed">
        </iframe>
        <p>Lat: ${latitud}, Lng: ${longitud}</p>
    </div>

    <div></div>
    `;

            color('profundidad', profundidad)
            color('enganche', enganche, true)
            color('acceso', acceso)
        })
})


function color(elementId, valor, invertir = false) {
    const elemento = document.getElementById(elementId);
    if (!elemento) return;

    elemento.classList.remove("rojo", "amarillo", "verde", "verdeclaro");

    if (typeof valor === "string") {
        const acceso = valor.toLowerCase();

        if (acceso === "facil") {
            elemento.classList.add("verde");
        } else if (acceso === "medio") {
            elemento.classList.add("amarillo");
        } else if (acceso === "dificil") {
            elemento.classList.add("rojo");
        }

        return; 
    }

    const num = Number(valor);

    if (!invertir) {
        // Modo normal: más alto = verde
        if (num < 2) {
            elemento.classList.add("rojo");
        } else if (num === 2) {
            elemento.classList.add("amarillo");
        } else if (num === 3) {
            elemento.classList.add("verdeclaro");
        } else {
            elemento.classList.add("verde");
        }
    } else {
        // Modo invertido: más alto = rojo
        if (num < 2) {
            elemento.classList.add("verde");
        } else if (num >= 2 && num < 4) {
            elemento.classList.add("amarillo");
        } else {
            elemento.classList.add("rojo");
        }
    }
}

/*function color(elementId, num, invertir = false) {
    const elemento = document.getElementById(elementId);


    console.log(elemento)

    if (!elemento) return;

    elemento.classList.remove("rojo", "amarillo", "verde", "amarillo", "verdeclaro");

    if (!invertir) {
        if (num < 2) {
            elemento.classList.add("rojo");
        } else if (num === 2 || num.textContent === "Medio") {
            elemento.classList.add("amarillo");
        } else if (num === 3) {
            elemento.classList.add("verdeclaro")
        } else {
            elemento.classList.add("verde");
        }
    } else {
        if (num < 2) {
            elemento.classList.add("verde");
        } else if (num >= 2 && num < 4) {
            elemento.classList.add("amarillo");
        } else {
            elemento.classList.add("rojo");
        }

    }
}

function paraAcceso(data[seccion].acceso){
    const elemento = 
    if (acceso === "Facil") {

    }
}*/



