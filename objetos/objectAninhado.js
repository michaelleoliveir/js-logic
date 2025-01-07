let empresa = {
    nome: "Softpar",
    endereco: {
        rua: "Qualquer",
        numero: 7070,
        cidade: "Curitiba"
    }
}

console.log(empresa.endereco.cidade)

empresa.endereco.numero = 77

console.log(JSON.stringify(empresa))

let { cidade } = empresa.endereco
console.log(cidade)