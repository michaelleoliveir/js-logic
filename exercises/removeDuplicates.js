// o "new Set()" serve para tirar os elementos repetidos de uma array e, além do mais, colocar uma sort nele, ou seja, organizar os números em ordem crescente

function removeDuplicates(arr){
    const arrayNova = [... new Set(arr)]
    return arrayNova;
}

arrayTeste = [1, 2, 2, 3, 4, 5, 5]

console.log(removeDuplicates(arrayTeste))