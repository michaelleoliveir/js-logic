function findPerson(arr) {
    return arr.find((pessoa) => pessoa.idade === 25)
}

const pessoas = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 25 },
    { nome: "Ana", idade: 30 },
];
console.log(findPerson(pessoas))