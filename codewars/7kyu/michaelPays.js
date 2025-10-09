/**
 * 1. se a pizza custar menos de 5, o Michael paga tudo
 * 2. se a pizza custar mais de 5, a Kate vai pagar 1/3 (mas só até 10)
 */

function michaelPays(costs) {

    if (costs < 5) {
        return costs;
    }

    let katePays = Math.min(costs/3, 10);
    let michaelPays = costs - katePays;

    return michaelPays % 1 === 0 ? michaelPays : Number(michaelPays.toFixed(2));
}

console.log(michaelPays(15));
console.log(michaelPays(4));
console.log(michaelPays(4.325));
console.log(michaelPays(5.9181));