var botaoAdicionar = document.querySelector("#adicionar-anuncio");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var anuncio = obtemAnuncioDoFormulario(form);

    var erros = validaAnuncio(anuncio);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaAnuncioNaTabela(anuncio);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemAnuncioDoFormulario(form) {

    var anuncio = {
        nome: form.nome.value,
        cliente: form.cliente.value,
        dataInicio: form.dataInicio.value,
        dataFim: form.dataFim.value,
        investimentoDiario: form.investimento.value,
        investimentoTotal: calculaInvestimento(form.dataInicio.value, form.dataFim.value, form.investimento.value),
        qtdeVisualizacoes: calculaVisualizacoes(form.dataInicio.value, form.dataFim.value, form.investimento.value),
        qtdeCliques: calculaCliques(form.dataInicio.value, form.dataFim.value, form.investimento.value),
        qtdeCompartilhamentos: calculaCompartilhamentos(form.dataInicio.value, form.dataFim.value, form.investimento.value)
    }

    return anuncio;
}

function montaTr(anuncio) {
    var anuncioTr = document.createElement("tr");
    anuncioTr.classList.add("anuncio");

    anuncioTr.appendChild(montaTd(anuncio.nome, "info-nome"));
    anuncioTr.appendChild(montaTd(anuncio.cliente, "info-cliente"));
    anuncioTr.appendChild(montaTd(anuncio.dataInicio, "info-data-inicio"));
    anuncioTr.appendChild(montaTd(anuncio.dataFim, "info-data-fim"));
    anuncioTr.appendChild(montaTd(anuncio.investimentoDiario, "info-investimento-diario"));
    anuncioTr.appendChild(montaTd(anuncio.investimentoTotal, "info-investimento-total"));
    anuncioTr.appendChild(montaTd(anuncio.qtdeVisualizacoes, "info-qtde-visualizacoes"));
    anuncioTr.appendChild(montaTd(anuncio.qtdeCliques, "info-qtde-cliques"));
    anuncioTr.appendChild(montaTd(anuncio.qtdeCompartilhamentos, "info-qtde-compartilhamentos"));

    return anuncioTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaAnuncio(anuncio) {

    var erros = [];

    if (anuncio.nome.length == 0) {
        erros.push("O nome do anúncio não pode ser em branco");
    }

    if (anuncio.cliente.length == 0) {
        erros.push("O nome do cliente não pode ser em branco");
    }

    if (anuncio.dataInicio.length == 0) {
        erros.push("A data de início não pode ser em branco");
    }

    if (anuncio.dataFim.length == 0) {
        erros.push("A data de fim não pode ser em branco");
    }

    if (anuncio.investimentoDiario.length == 0) {
        erros.push("O investimento diário  não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaAnuncioNaTabela(anuncio) {
    var anuncioTr = montaTr(anuncio);
    var tabela = document.querySelector("#tabela-anuncios");
    tabela.appendChild(anuncioTr);
}
