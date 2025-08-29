function padIt(str, n) {
    let result = str;
    let count = 0;

    while(count < n) {
        if(count % 2 === 0) {
            result = '*' + result;
        } else {
            result = result + '*';
        }

        count++;
    }

    return result;
}

console.log("a", 1) // *a
console.log("a", 2) // *a*
console.log("a", 3) // **a*