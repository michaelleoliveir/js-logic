// nesse exemplo, coloco todos os elementos de algumas arrays em uma nova utilizando o spreadOperator
const segundaTerca = ["segunda", "terca"]
const quartaQuinta = ["quarta", "quinta"]
const sextaSabado = ["sexta", "sabado"]
const diasSemana = [...segundaTerca, ...quartaQuinta, ...sextaSabado]
console.log(diasSemana)

// nesse exemplo, utilizo o Spread Operator para passar por todos os elementos da array, sem a necessidade de utilizar o laço FOR
const numeros = [1, 2, 3, 20, 5, 6]
const numeroMaximo = Math.max(...numeros)
console.log(numeroMaximo)