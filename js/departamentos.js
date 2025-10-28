



const clave = localStorage.getItem('departamento')

const titulo = document.getElementById("nombreDepto")



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

            //TARJETA CON IMAGEN
            card.innerHTML = `
    <img src="Fotos/${element.img}.jpg">
    <h3>${element.nombre}</h3>
    `

            container.appendChild(card);
        });


    });

