function lucro(arr) {
    return arr.reduce((total, produto) => {
        return total + (produto.preco * produto.quantidade)
    }, 0)
}

let arrayTeste = [
    { preco: 10, quantidade: 2 }, 
    { preco: 15, quantidade: 1 }
]
console.log(lucro(arrayTeste))
