function addExtra(listOfNumbers) {
    listOfNumbers.push(Math.random())
    let newArray = listOfNumbers.slice();
    
    return newArray;
}

console.log(addExtra([1, 2, 3, 4])); // [1, 2, 3, 4, 0.123456789] --- IGNORE ---
console.log(addExtra([5, 6, 7, 8])); // [5, 6, 7, 8, 0.987654321] --- IGNORE ---    