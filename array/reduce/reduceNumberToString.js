function stringConcat(arr) {
    return arr.reduce((numero, proxNumero) => numero + proxNumero, ""
    )
}

let arrayTeste = [1, 2, 3];
console.log(stringConcat(arrayTeste))