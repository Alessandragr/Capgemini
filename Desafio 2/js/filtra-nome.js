var campoFiltro = document.querySelector("#filtrar-tabela-nome");

campoFiltro.addEventListener("input", function() {
    var anuncios = document.querySelectorAll(".anuncio");

    if (this.value.length > 0) {
        for (var i = 0; i < anuncios.length; i++) {
            var anuncio = anuncios[i];
            var tdNome = anuncio.querySelector(".info-nome-cliente");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                anuncio.classList.add("invisivel");
            } else {
                anuncio.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < anuncios.length; i++) {
            var anuncio = anuncios[i];
            anuncio.classList.remove("invisivel");
        }
    }
});
