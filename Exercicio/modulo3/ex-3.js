//Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto é R$ 300,00.
let orcamento = 250;
let desconto = 50;
let custoProduto = 220;

let custoFinal = custoProduto - desconto;

console.log(
  `Preço com desconto: ${custoFinal}` +
    (custoFinal <= orcamento
      ? "Está dentro do orçamento"
      : " fora do orçamento")
);
