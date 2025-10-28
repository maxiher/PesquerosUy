const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const clave = card.dataset.clave;
        localStorage.setItem("departamento", clave);
        window.location.href = "departamento.html";
        
    })
})