function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

console.log(disemvowel("This website is for losers LOL!"));