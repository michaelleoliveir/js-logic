// function betterThanAverage(classPoints, yourPoints) {
//     let sum = 0;

//     for(let i = 0; i < classPoints.length; i++) {
//         sum += classPoints[i];
//     }

//     let average = (sum / classPoints.length);
    
//     return yourPoints > average
// }

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > (classPoints.reduce((acumulador, atual) => acumulador + atual, 0) / classPoints.length)
}

console.log(betterThanAverage([2, 3], 5)); // true
console.log(betterThanAverage([100, 40, 34, 57, 90], 80)); // false
