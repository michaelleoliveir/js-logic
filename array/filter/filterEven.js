// o método filter() passa por todos os elementos de uma array e retorna aqueles que atendem a "condição" explicitada pelo usuário 

function filterEven(arr) {
    return arr.filter(pares => (pares % 2) == 0)
}

let arrayTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(filterEven(arrayTeste))