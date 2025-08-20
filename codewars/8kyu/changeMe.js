function changeMe(moneyIn) {
    let result = [];
    let coins = {
        "£5": 500,
        "£2": 200,
        "£1": 100,
        "50p": 50,
        "20p": 20
    };
    let amount = coins[moneyIn];

    if(!coins[moneyIn]) return moneyIn;

    if(moneyIn === '20p') {
        return '10p 10p';
    }

    while(amount >= 20) {
        result.push('20p');
        amount -= 20;
    }

    while(amount >= 10) {
        result.push('10p');
        amount -= 10;
    }

    return result.join(' ');
}

console.log(changeMe('£1')); 
console.log(changeMe('Money')); 