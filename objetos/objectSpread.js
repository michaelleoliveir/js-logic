let pessoa1 = {
    nome: "Michaelle",
    idade: 21,
    contato: 892819283
}

let contato = {
    email: "teste@gmail.com",
    telefone: 324354
}

let dadosCompletos = {
    ...pessoa1,
    ...contato
}

console.log(JSON.stringify(dadosCompletos))

let pessoa2 = {...pessoa1}
pessoa2.idade = 25

console.log(JSON.stringify(pessoa2))