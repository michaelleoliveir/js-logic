function verificaElemento(array, valor) {
    return array.includes(valor)
}

console.log(verificaElemento([1, 2, 3, 4], 3)); // true
console.log(verificaElemento([1, 2, 3, 4], 5)); // false