function notString(arr) {
    return arr.find((elemento) => !(typeof elemento === 'string'))
}

const elementos = ["texto", "mais texto", 42, true];
console.log(notString(elementos))