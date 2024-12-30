let products = [
    { name: "Smartphone", category: "Electronics", quantitySold: 10 },
    { name: "Laptop", category: "Electronics", quantitySold: 5 },
    { name: "Shirt", category: "Clothing", quantitySold: 15 },
    { name: "Shoes", category: "Clothing", quantitySold: 7 },
    { name: "Headphones", category: "Electronics", quantitySold: 8 },
    { name: "Jacket", category: "Clothing", quantitySold: 3 }
];

function totalSalesByCategory(arr) {
    return arr.reduce((total, vendas) => {
        if(total[vendas.category]) {
            total[vendas.category] += vendas.quantitySold
        } else {
            total[vendas.category] = vendas.quantitySold
        };

        return total
    }, {})
}

console.log(totalSalesByCategory(products));
// Saída esperada:
// { Electronics: 23, Clothing: 25 }
