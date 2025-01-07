let aluno = {
    nome: "Michaelle",
    idade: 21,
    curso: "Desenvolvimento FullStack",
    descrever: function () {
        return `Meu nome é ${this.nome} e estou cursando ${this.curso}`
    }
}

console.log(aluno.descrever())