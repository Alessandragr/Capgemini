var titulo = document.querySelector(".titulo");
titulo.textContent = "Desafio Capgemini";

var anuncios = document.querySelectorAll(".anuncio");

function calculaInvestimento(dataInicio, dataFim, investimentoDiario) {
    var diff = moment(dataFim,"DD/MM/YYYY").diff(moment(dataInicio,"DD/MM/YYYY"));

    var dias = moment.duration(diff).asDays() + 1;

    investimentoTotal = dias * investimentoDiario;

    return investimentoTotal.toFixed(2);
}

function calculaVisualizacoes(dataInicio, dataFim, investimentoDiario) {
    var diff = moment(dataFim,"DD/MM/YYYY").diff(moment(dataInicio,"DD/MM/YYYY"));

    var dias = moment.duration(diff).asDays() + 1;

    investimentoTotal = dias * investimentoDiario;

    var qtdeVisualizacoes = investimentoTotal * 30;

    return qtdeVisualizacoes.toFixed(0);
}

function calculaCliques(dataInicio, dataFim, investimentoDiario) {
    var diff = moment(dataFim,"DD/MM/YYYY").diff(moment(dataInicio,"DD/MM/YYYY"));

    var dias = moment.duration(diff).asDays() + 1;

    investimentoTotal = dias * investimentoDiario;

    var qtdeVisualizacoes = investimentoTotal * 30;

    var pessoasQueClicam =  Math.floor(qtdeVisualizacoes * 12 / 100); 

    return pessoasQueClicam.toFixed(0);
}

function calculaCompartilhamentos(dataInicio, dataFim, investimentoDiario) {
    var diff = moment(dataFim,"DD/MM/YYYY").diff(moment(dataInicio,"DD/MM/YYYY"));

    var dias = moment.duration(diff).asDays() + 1;

    investimentoTotal = dias * investimentoDiario;

    var pessoasQueVisualizam ;

    var pessoasQueClicam;
    
    var pessoasQueCompartilham;
    
    var pessoasQueVisualizam = investimentoTotal * 30;
    
    for (let i = 0; i < 4; i++) {
        //console.log('********** loop ' + i + '************')
        //console.log("pessoasQueVisualizam parcial: " + pessoasQueVisualizam);
        pessoasQueClicam =  Math.floor(pessoasQueVisualizam * 12 / 100); 
        //console.log("pessoasQueClicam parcial: " + pessoasQueClicam);
        pessoasQueCompartilham = Math.floor(pessoasQueClicam * 3 / 20);
        //console.log("pessoasQueCompartilham parcial: " + pessoasQueCompartilham);
        //console.log("pessoasQueVisualizam conta: " + (pessoasQueCompartilham * 40));
        pessoasQueVisualizam = pessoasQueVisualizam + (pessoasQueCompartilham * 40);
        //console.log("pessoasQueVisualizam parcial final loop: " + pessoasQueVisualizam);
    }
    
    return pessoasQueVisualizam.toFixed(0);
}
