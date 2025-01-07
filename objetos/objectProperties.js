let carro = {
    marca: "Toyota",
    modelo: "Yaris",
    ano: 2023
}

console.log(`Carro da marca ${carro.marca} e modelo ${carro.modelo}`)

carro.ano = 2022

console.log(`O ano do carro é ${carro.ano}`)

carro.cor = "vermelho"

console.log(`A cor do carro é ${carro.cor}`)
console.log(JSON.stringify(carro))