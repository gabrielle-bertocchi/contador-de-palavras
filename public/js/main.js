var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);

});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();//posso usar jQuery ou $, .text ele acessa o texto do elemento
    var numeroPalavras = frase.split(" ").length;//split(espaços da frase) .length(mostar tamanho no console)
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text("900");//.text nesse caso substitui a informaçao na var (no html)
}


function inicializaContadores(){
    campo.on("input",function(){ //on() funcao de clique, function () anonima, input = sem clicar
        var conteudo = campo.val();
    
        var qtdPalavras = conteudo.split(/\S+/).length -1; // /\S+/ = expressao regular nao conta todos os espaços
        $("#contador-palavras").text(qtdPalavras);
    
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro(){
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        var cronometroID = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroID);
            }
        }, 1000);
    });
}


function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}









