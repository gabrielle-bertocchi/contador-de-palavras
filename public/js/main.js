var frase = $(".frase").text();//posso usar jQuery ou $, .text ele acessa o texto do elemento
var numeroPalavras = frase.split(" ").length;//split(espaços da frase) .length(mostar tamanho no console)
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text("900");//.text nesse caso substitui a informaçao na var (no html)



