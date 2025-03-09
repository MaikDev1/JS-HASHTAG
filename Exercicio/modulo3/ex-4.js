//true

let quantidadeProduto = String("20");
let estoque = Number(20);

let total = quantidadeProduto <= estoque;
console.log(`A quantidade no estoque é suficiente: ${total} `); // true

// false

let quantidadeProduto2 = String("30");
let estoque2 = Number(20);

let total2 = quantidadeProduto <= estoque;
console.log(`A quantidade no estoque é suficiente: ${total} `); // true
