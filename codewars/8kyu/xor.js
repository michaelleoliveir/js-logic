function xor(a, b) {
    if(a === true && b === true) {
        return false;
    } else if (a === true || b === true) {
        return true
    } else {
        return false
    }
}

console.log(xor(true, false)); // true
console.log(xor(false, false)); // false
console.log(xor(true, true)); // false
