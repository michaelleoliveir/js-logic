function isArray(arr){
    if(!Array.isArray(arr)) {
        return false;
    } else {
        return true
    }
}

let arrayTeste = [1, 2, 3, 4, 4]
console.log(isArray(arrayTeste))