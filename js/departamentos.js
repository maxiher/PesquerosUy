const clave = localStorage.getItem('departamento');
const subtitulo = document.getElementById("subtitulo");

/* Opcional: Poner el nombre del departamento en el h2
subtitulo.innerText = clave ? `Pesqueros en ${clave.toUpperCase()}` : "Nuestros Pesqueros";*/

fetch(`JSON/${clave}.json`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('container');
        container.innerHTML = ""; 

        data.forEach(element => {
            const col = document.createElement("div");
            col.classList.add("col", "d-flex", "justify-content-center"); // Centra la card dentro de la columna

            const imagen = element.imagenes[0];

            col.innerHTML = `
                <div class="card h-100 shadow-sm border-0 pesquero-card" style="cursor: pointer; width: 100%; max-width: 300px;">
                    <img src="${imagen}" class="card-img-top" loading="lazy" alt="${element.nombre}" style="height: 150px; object-fit: cover; border-radius: 8px 8px 0 0;">
                    <div class="card-body text-center p-3">
                        <h6 class="card-title fw-bold mb-1" style="color: #0047AB;">${element.nombre}</h6>
                        <p class="text-muted mb-0" style="font-size: 0.8rem;">Click para ver más</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 pb-3 px-3">
                         <button class="btn btn-sm w-100" style="background-color: #40E0D0; color: #0047AB; font-weight: bold; font-size: 0.75rem;">VER MÁS</button>
                    </div>
                </div>
            `;

            col.querySelector('.card').addEventListener("click", () => {
                localStorage.setItem("numero", element.seccion);
                window.location.href = "./pesqueros.html";
            });

            container.appendChild(col);
        });
    });