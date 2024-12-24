function titleCase(arr) {
    let palavras = arr.split(" ");
    let palavrasCorretas = palavras.map((palavra) => {
        return palavra[0].toUpperCase() + palavra.slice(1)
    })

    const fraseCorreta = palavrasCorretas.join(" ");
    return fraseCorreta;
}

let fraseTeste = "testando para ver se dá certo"
console.log(titleCase(fraseTeste))