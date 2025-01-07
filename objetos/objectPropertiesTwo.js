let aluno = {
    nome: "Michaelle",
    idade: 21,
    curso: "Desenvolvimento FullStack"
}

aluno.matricula = 250;
delete aluno.idade;

console.log(JSON.stringify(aluno))