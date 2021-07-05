var anuncios = document.querySelectorAll(".anuncio");

var tabela = document.querySelector("#tabela-anuncios");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
