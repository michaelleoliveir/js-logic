function aliasGen(first, last) {
    let inicialFirst = first[0].toUpperCase();
    let inicialLast = last[0].toUpperCase();

    if (!/[A-Z]/.test(inicialFirst) || !/[A-Z]/.test(inicialLast)) {
        return "Your name must start with a letter from A - Z."
    }

    return `${firstName[inicialFirst]} ${surname[inicialLast]}`
}