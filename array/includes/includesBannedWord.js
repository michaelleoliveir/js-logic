function proibidoUsarPalavras(frase, palavrasProibidas) {
    for (let palavra of palavrasProibidas) {
        if(frase.includes(palavra)) {
            return true
        }
    }

    return false
}

console.log(proibidoUsarPalavras("Eu amo programar", ["odeio", "cansado"])); // false
console.log(proibidoUsarPalavras("Eu estou cansado", ["odeio", "cansado"])); // true