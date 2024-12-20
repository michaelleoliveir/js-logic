function findMissingNumber(arr) {
    const n = arr.length + 1; // um número está faltando
    const somaEsperada = (n * (n + 1)) / 2;
    const somaAtual = arr.reduce((sum, num) => sum + num, 0);
    /* 
    sum e num são os callback do reduce => o sum vai armazenar a conta e o num representa os números da array

    o sum começa com o valor 0 e vai somando com os números
    */

    return somaEsperada - somaAtual;
}

let teste = [1, 2, 3, 4]
console.log(findMissingNumber(teste))