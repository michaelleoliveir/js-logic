function openOrSenior(data) {
    const result = data.map((data) => {
        if(data[0] >= 55 && data[1] > 7) {
            return "Senior"
        } else {
            return "Open"
        }
    });

    return result;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])) // ["Open", "Senior", "Open", "Senior"]