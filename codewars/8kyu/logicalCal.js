function logicalCalc(array, op) {
    switch (op) {
        case 'AND':
            if(array.includes(false)) {
                return false;
            }
            break;
        case 'OR':
            if(!array.includes(true)) {
                return false;
            }
            break;
        case 'XOR':
            return array.reduce((acc, curr) => acc !== curr);
        default:
            break;
    }

    return true;
}

console.log(logicalCalc([true, true, true, false], "AND")); // false
console.log(logicalCalc([true, true, true, false], "OR")); // true
console.log(logicalCalc([true, true, false, false], "XOR")); // false