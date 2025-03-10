let produto = Boolean(true);
let quantidade = 17;
let estoque = 15;

let final = quantidade <= estoque;

// console.log(produto && estoque >= quantidade); // true

console.log(`O produto está disponível e tem quantidade suficiente: ${
  produto && estoque >= quantidade
} ” e “'O
produto está indisponível: ${!produto || estoque > quantidade}`);
