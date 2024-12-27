/*
Crie um array de objetos representando produtos de uma loja online. Cada produto possui propriedades como nome, preço, categoria e um array de tags.
Utilize o filter() para encontrar todos os produtos que:
Possuam a tag "promoção"
Sejam da categoria "eletrônicos" e tenham um preço superior a R$1000.
Tenham pelo menos duas tags específicas.
*/

function verificacao(arr) {
    return arr.filter((produto) => {
        return (
            produto.tags.includes("Promoção") === true &&
            produto.categoria === "Eletrônicos" &&
            produto.preco > 1000
        )
    });
}

let arrayTeste = [
    {
        nome: "Televisão",
        preco: 1500,
        categoria: "Eletrônicos",
        tags: ["TV", "Entretenimento", "4K"],
    },
    {
        nome: "Smartphone",
        preco: 2500,
        categoria: "Eletrônicos",
        tags: ["Celular", "Comunicação", "Promoção"],
    },
    {
        nome: "Fones de Ouvido",
        preco: 300,
        categoria: "Eletrônicos",
        tags: ["Áudio", "Música"],
    },
    {
        nome: "Livro",
        preco: 50,
        categoria: "Livros",
        tags: ["Leitura", "Promoção"],
    },
    {
        nome: "Camiseta",
        preco: 50,
        categoria: "Roupas",
        tags: ["Vestuário", "Casual"],
    },
    {
        nome: "Smartphone Gama Alta",
        preco: 1500,
        categoria: "Eletrônicos",
        tags: ["Promoção", "Smartphone", "5G"],
    },
    {
        nome: "Televisão 4K Smart",
        preco: 2000,
        categoria: "Eletrônicos",
        tags: ["Promoção", "TV", "4K", "Smart"],
    },
];
console.log(verificacao(arrayTeste));
