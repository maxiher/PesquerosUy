const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("JSON/especies.json")
  .then(res => res.json())
  .then(data => {
    const especie = data.especies.find(e => e.id === id);
    if (!especie) return;

    const container = document.getElementById("detalleEspecie");

    container.innerHTML = `
      <div class="row">
        <div class="col-md-4">
          <img src="img/especies/${especie.imagen}" class="img-fluid rounded">
        </div>

        <div class="col-md-8">
          <h1>${especie.nombre_comun}</h1>
          <h4 class="fst-italic">${especie.nombre_cientifico}</h4>

          <p>${especie.descripcion}</p>

          <ul class="list-group mt-3">
            <li class="list-group-item"><strong>Hábitat:</strong> ${especie.habitat}</li>
            <li class="list-group-item"><strong>Métodos:</strong> ${especie.metodos_de_pesca.join(", ")}</li>
            <li class="list-group-item"><strong>Carnadas:</strong> ${especie.carnadas.join(", ")}</li>
            <li class="list-group-item"><strong>Temporada:</strong> ${especie.temporada}</li>
            <li class="list-group-item"><strong>Interés gastronómico:</strong> ${especie.interes_gastronomico}</li>
          </ul>
        </div>
      </div>
    `;
  });
