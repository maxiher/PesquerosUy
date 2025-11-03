

const clave = localStorage.getItem('departamento')

const titulo = document.getElementById("nombreDepto")

const boton = document.getElementById("boton")

//Volver al index




fetch(`js/${clave}.json`)
    .then(res => res.json())
    .then(data => {
        // CAMBIO EL TITULO
        titulo.textContent = `${clave.toUpperCase()}`

        console.log(data)

        const container = document.getElementById('container');
        container.classList.add("grid")

        data.forEach(element => {

            const card = document.createElement("div");
            card.classList.add("card");

            const imagen = element.imagenes[0];

            //TARJETA CON IMAGEN
            card.innerHTML = `
    <img src="${imagen}" loading="lazy" alt="Playa de ${element.nombre}">
    <h3>${element.nombre}</h3>
    `
            // Guardo numero de seccion en localStorage y redirijo a la pagina del pesquero.
            card.addEventListener("click", () => {
                localStorage.setItem("numero", element.seccion);
                window.location.href = "./pesqueros.html"
            })


            container.appendChild(card);
        });


    });

