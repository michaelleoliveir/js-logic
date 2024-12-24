function filterLength(arr) {
    return arr.filter(palavra => (palavra.length <= 5))
}

let arrayTeste = ["dog", "wolf", "by", "family", "eaten", "camping"]
console.log(filterLength(arrayTeste))