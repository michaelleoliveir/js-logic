function promocao(arr) {
    return arr.find((produto) => produto.promocao === true)
}

const produtos = [
    { nome: "Celular", preco: 1500, promocao: false },
    { nome: "Notebook", preco: 3000, promocao: true },
    { nome: "Tablet", preco: 1200, promocao: false },
];
console.log(promocao(produtos))