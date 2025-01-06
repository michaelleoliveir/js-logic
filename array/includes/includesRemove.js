const palavras = [
    "carro",
    "bicicleta",
    "avião",
    "motocicleta",
    "trem"
];

function removerIndesejados(lista, indesejado) {
    return lista.filter((item) => !item.includes(indesejado))
}

console.log(removerIndesejados(palavras, "cicleta")); 
// ["carro", "avião", "trem"]
