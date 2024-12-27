function mediaNumeros(arr) {
    const somaTotal = arr.reduce((total, numero) => total + numero, 0)

    return somaTotal / arr.length;
}

let arr = [10, 20, 30, 40, 50];
console.log(mediaNumeros(arr)); // Saída: 30