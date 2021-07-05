var campoFiltro = document.querySelector("#filtrar-tabela-data");

campoFiltro.addEventListener("input", function() {
    var anuncios = document.querySelectorAll(".anuncio");

    if (this.value.length > 0) {
        for (var i = 0; i < anuncios.length; i++) {
            var anuncio = anuncios[i];
            var tdDataInicio = anuncio.querySelector(".info-data-inicio");
            var dataInicio = tdDataInicio.textContent;
            var tdDataFim = anuncio.querySelector(".info-data-fim");
            var dataFim = tdDataFim.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(dataInicio) && !expressao.test(dataFim)) {
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
