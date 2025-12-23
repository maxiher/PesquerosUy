document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">

        <a class="navbar-brand d-flex align-items-center" href="index.html" id="logotipe">
            <img src="Fotos/General/logov2 1.png" id="logo">
            <img src="Fotos/General/titulo1.png" id="nombrelogo">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html"><strong>Pesqueros</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="especies.html"><strong>Especies</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tecnicasyequipos.html"><strong>Técnicas y Equipos</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contacto.html"><strong>Contactanos</strong></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;