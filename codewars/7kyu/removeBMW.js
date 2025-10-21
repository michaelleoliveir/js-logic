function removeBMW(str) {
    if(typeof str !== 'string') {
        return 'This program only works for text'
    }

    return str.replace(/[BMW]/gi, '');
}

console.log(removeBMW('A BMW is a car brand')) // 'A  is a car brand'
console.log(removeBMW('bmw bMw BmW')) // '   '
console.log(removeBMW(12345)) // 'This program only works for text' 