let items = [
    { name: "Smartphone", category: "Electronics", price: 700 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 30 },
    { name: "Shoes", category: "Clothing", price: 50 },
    { name: "Headphones", category: "Electronics", price: 100 },
    { name: "Jacket", category: "Clothing", price: 80 }
];

function averagePriceByCategory(arr) {
    const calculoSoma = arr.reduce((media, item) => {
        if(!media[item.category]) {
            media[item.category] = {soma: 0, total: 0}
        } 

        media[item.category].soma += item.price;
        media[item.category].total++

        return media
    }, {})

    for(let categoria in calculoSoma) {
        calculoSoma[categoria] = (calculoSoma[categoria].soma / calculoSoma[categoria].total).toFixed(2)
    }

    return calculoSoma;
}

console.log(averagePriceByCategory(items));
// { Electronics: 666.67, Clothing: 53.33 }
