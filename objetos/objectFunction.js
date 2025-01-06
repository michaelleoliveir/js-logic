const carro = {
    marca: 'Yaris',
    ano: 2023,
    estado: 'bom',
    descricao: function() {
        return `O carro ${this.marca} é muito bom! Ele é do ano ${this.ano}`
    }
}

console.log(carro.descricao())