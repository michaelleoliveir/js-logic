const produtos = [
    "Mesa de madeira",
    "Cadeira de plástico",
    "Estante de ferro",
    "Mesa dobrável",
    "Cadeira de madeira"
];

function filtrarProdutos(produtos, palavraChave) {
    return produtos.filter((produto) => produto.includes(palavraChave))
}

console.log(filtrarProdutos(produtos, "madeira")); 
// ["Mesa de madeira", "Cadeira de madeira"]
