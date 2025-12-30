const jsonURL = "JSON/especies.json"

fetch(jsonURL)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cardsEspecies");

    data.especies.forEach(especie => {
      const card = document.createElement("div");
      card.className = "col-md-4 col-lg-3 mb-4";

      card.innerHTML = `
        <div class="card h-100 especie-card">
          <img src="${especie.imagen}" class="card-img-top" alt="${especie.nombre_comun}">
          <div class="card-body">
            <h5 class="card-title">${especie.nombre_comun}</h5>
            <p class="fst-italic">${especie.nombre_cientifico}</p>
            <p><strong>Hábitat:</strong> ${especie.habitat}</p>
            <a href="especie.html?id=${especie.id}" class="btn btn-primary w-100">
              Ver ficha completa
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));