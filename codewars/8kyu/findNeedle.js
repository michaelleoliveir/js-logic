function findNeedle(haystack) {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === 'needle') {
            return `found the needle at position ${i}`;
        }
    }
    
    return "Your function didn't return anything";
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])); // "found the needle at position 5"    
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'randomJunk'])); // "Your function didn't return anything"