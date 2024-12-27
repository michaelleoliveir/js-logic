function bigger(arr) {
    return arr.reduce((maior, numero) => {
        return numero > maior ? numero : maior;
    }, arr[0])
}

let arrayTeste = [4, 7, 1, 9, 15]
console.log(bigger(arrayTeste))