// o slice() serve para "cortar" um array => colocamos como parâmetro o índice em que se inicia esse corte

function cloneArray(arr) {
    return arr.slice(0)
}

let arrayTeste = [1, 3, 4, [3, 4, 5]]
console.log(cloneArray(arrayTeste))