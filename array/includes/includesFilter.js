function filtrarItens(itens, palavra) {
    return itens.filter((item) => item.includes(palavra))
}

const lista = ["banana", "maçã", "abacaxi", "laranja", "abacate"];
console.log(filtrarItens(lista, "aba")); // ["abacaxi", "abacate"]
