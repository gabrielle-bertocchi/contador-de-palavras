var frase = $(".frase").text();//posso usar jQuery ou $, .text ele acessa o texto do elemento
var numeroPalavras = frase.split(" ").length;//split(espaços da frase) .length(mostar tamanho no console)
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text("900");//.text nesse caso substitui a informaçao na var (no html)

var campo = $(".campo-digitacao");

campo.on("input",function(){ //on() funcao de clique, function () anonima, input = sem clicar
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length -1; // /\S+/ = expressao regular nao conta todos os espaços
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
} )



