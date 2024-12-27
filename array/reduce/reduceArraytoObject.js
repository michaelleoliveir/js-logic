function arrayTobject(arr) {
    return arr.reduce((acumulador, nome) => {
        acumulador[nome.id] = nome.nome;
        return acumulador
    }, {})
}

let arrayTeste = [
    { id: 1, nome: "João" }, 
    { id: 2, nome: "Maria" }
]
console.log(arrayTobject(arrayTeste))