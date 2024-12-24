function filterObject(arr) {
    return arr.filter(objeto => (objeto.categoria == "Eletrônico"))
}

let arrayTeste = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"}
]
console.log(filterObject(arrayTeste))

