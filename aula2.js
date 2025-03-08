// Redeclaraçaõ de variáveis
let nome = "João";
const nomePai = "José";
const nomeMae = "Maria";

var menssagem = "Ola";
console.log(menssagem);
var mensssagem = "Tudo bem com voce ?";
console.log(mensssagem);

// retribuição de variáveis
nome = "Maik";
console.log(nome);

menssagem = "Olá, Tudo bem com voce ? ";
console.log(menssagem);

//hoisting
console.log(segundoNome);
var segundoNome = "Maik";
console.log(segundoNome);

//visibilidade de variáveis

{
  console.log("Bloco de código");
  let nome = "Maik";
  let idade = 20;
  const sobreNome = "Alves da Silva";

  console.log(nome + " " + sobreNome);
  console.log(idade);
}
