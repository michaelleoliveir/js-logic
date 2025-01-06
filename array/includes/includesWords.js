const frases = [
    "Eu gosto de JavaScript",
    "O Python é muito popular",
    "A programação é divertida"
];

function verificaPalavra(frases, palavra) {
    for(let word of frases) {
        if(word.includes(palavra)) {
            return true
        }
    }

    return false
}

console.log(verificaPalavra(frases, "Python")); // true
console.log(verificaPalavra(frases, "Java")); // false
