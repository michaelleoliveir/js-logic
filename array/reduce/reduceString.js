function concatenacao(arr) {
    return arr.reduce((final, atual) => {
        return final + " " + atual;
    }, "")
}

let arrayTeste = ["Aprender", "JavaScript", "é", "divertido"]
console.log(concatenacao(arrayTeste))