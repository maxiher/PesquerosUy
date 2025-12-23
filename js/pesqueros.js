
const backBtn = document.getElementById("backBtn")

const container = document.getElementById("contenedor")

const clave = localStorage.getItem('departamento')

const seccion = localStorage.getItem('numero')

const jsonURL = `JSON/${clave}.json`

//Evento al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {

    //Cargar datos del pesquero
    fetch(jsonURL)
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
                    <h1><strong>${titulo}</strong></h1>
    
                    <p id="desc">${data[seccion].descripcion}</p>

                    <div class="indicadores">
                        <span class="tag" id="acceso">Accesibilidad: ${acceso}</span>
                        <span class="tag" id="profundidad">Profundidad: ${profundidad}</span>
                        <span class="tag" id="enganche">Enganche: ${enganche}</span>
                    </div>

                    <h3 class="mt-5 mb-3"><strong>Especies habituales</strong></h3>
                    <div class="table-responsive">
                        <table class="table table-sm table-bordered align-middle text-center">
                            <thead class="table-dark">
                                <tr>
                                    <th>Especie</th>
                                    <th>Frecuencia</th>
                                </tr>
                            </thead>
                            <tbody id="tabla-especies"></tbody>
                        </table>
                    </div>
                </div>

                <div class="info-img mt-3">
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
            </div>

    `;

            color('profundidad', profundidad)
            color('enganche', enganche, true)
            color('acceso', acceso)

            renderTablaEspecies(data[seccion].especies)
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


function renderTablaEspecies(especies) {
  const tbody = document.getElementById("tabla-especies");

  if (!tbody || !Array.isArray(especies)) return;
  tbody.innerHTML = "";

  especies.forEach(e => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="text-start">${e.nombre}</td>
      <td>${renderIndicador(e.nivel)}</td>
    `;

    tbody.appendChild(tr);
  });
}

function renderIndicador(nivel) {
  const indicadores = {
    4: "🟢🟢🟢🟢",
    3: "🟢🟢🟢",
    2: "🟡🟡",
    1: "🔴",
    0: "⚪"
  };

  return indicadores[nivel] || "";
}



