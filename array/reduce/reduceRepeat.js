function repeatString(arr){
    return arr.reduce((contador, palavra) => {
        contador[palavra] = (contador[palavra] || 0) + 1
        return contador
    }, {})
}

let arrayTeste = [
    "maçã", "banana", "maçã", "laranja", "banana", "maçã"
]
console.log(repeatString(arrayTeste))