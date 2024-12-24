function filterCities(arr) {
    return arr.filter(cities => (cities[0].toLowerCase() === "s")
    )
}

let arrayTeste = ["São Paulo", "Taubaté", "São José", "Belo Horizonte", "salvador"];
console.log(filterCities(arrayTeste))