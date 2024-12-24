function filterPrimes(arr) {
    return arr.filter(primo => {
        if(primo <= 1) return false;

        for(let i = 2; i <= Math.sqrt(primo); i++){
            if(primo % i === 0) {
                return false // o número primo não pode ser divisível por qualquer número
            }
        }

        return true;
    })
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(filterPrimes(arr)); // [2, 3, 5, 7, 11]