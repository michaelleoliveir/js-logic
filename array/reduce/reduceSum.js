function soma (arr){
    return arr.reduce((total, numero) => total + numero, 0)
}

let arrayTeste = [1, 2, 3, 4, 5]
console.log(soma(arrayTeste))