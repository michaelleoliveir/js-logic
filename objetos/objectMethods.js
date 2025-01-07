let pessoa = {
    nome: "Michaelle",
    idade: 21,
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))