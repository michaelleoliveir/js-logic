function howManyLightsabersDoYouOwn(name) {
    switch (name) {
        case 'Zach':
            return 18;    
        default:
            return 0;
    }
}

console.log(howManyLightsabersDoYouOwn("Zach")); // 18
console.log(howManyLightsabersDoYouOwn("Adam")); // 0
console.log(howManyLightsabersDoYouOwn("John")); // 0