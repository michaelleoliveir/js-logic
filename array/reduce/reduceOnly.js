function onlyNumber(arr) {
    return arr.reduce((repeat, numero) => {
        if(!repeat.includes(numero)) {
            repeat.push(numero)
        }

        return repeat
    }, [])
}

let arrayTeste = [1, 2, 2, 3, 4, 4, 5]
console.log(onlyNumber(arrayTeste))