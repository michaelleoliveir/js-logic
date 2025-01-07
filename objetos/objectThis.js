let produto = {
    nome: "Notebook",
    preco: 3000,
    mostrarPreco: () => {
        return `O preco do produto ${produto.nome} é de ${produto.preco}`
    }
}

console.log(produto.mostrarPreco())