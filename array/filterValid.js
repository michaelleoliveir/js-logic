// filtra somente os objetos que possuem id válidos

function filterValid(arr) {
    return arr.filter(objeto => ((typeof objeto.id) === 'number') && (!isNaN(objeto.id)))
}

let produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {},
    {id: null },
    {id: NaN},
    {id: 'undefined' },
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
]
console.log(filterValid(produtos))
