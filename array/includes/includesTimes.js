function contarOcorrencias(texto, palavra) {
    let contador = 0
    let palavrasSeparadas = texto.split(" ");

    for(let word of palavrasSeparadas) {
        if(word.includes(palavra)) {
            contador++
        }
    }

    return contador
}

const texto = "A linguagem JavaScript é muito poderosa. O JavaScript é usado no front-end e no back-end.";
console.log(contarOcorrencias(texto, "JavaScript")); // 2
console.log(contarOcorrencias(texto, "Python")); // 0
