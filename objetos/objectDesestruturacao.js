let pessoa = {
    nome: "Michaelle",
    idade: 21,
    profissao: "Frontend Developer"
}

let { nome, idade } = pessoa;
console.log(nome + " " + idade)

let livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    paginas: 350
}

function exibirInfo({ titulo, autor }) {
    console.log(`O título do livro é ${titulo}, cujo autor é ${autor}`)
}

exibirInfo(livro)