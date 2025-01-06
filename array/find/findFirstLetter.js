function firstLetter(arr){
    return arr.find((palavra) => palavra[0] === "a")
}

const palavras = ["banana", "maçã", "abacaxi", "laranja"];
console.log(firstLetter(palavras))