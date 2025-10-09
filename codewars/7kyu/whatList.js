function whatListAmIOn(actions) {
    const nice = ['g', 's', 'n'];
    const naughty = ['b', 'f', 'k'];
    const letters = actions.map(a => a[0]);

    const count = letters.reduce((acc, letter) => {
        if (naughty.includes(letter)) {
            acc.bad++
        }

        if (nice.includes(letter)) {
            acc.good++;
        }

        return acc;
    }, { good: 0, bad: 0 })

    if (count.good > count.bad) return 'nice';
    if (count.bad > count.good) return 'naughty';
    return 'naughty';
}

let bad_actions = ["broke someone's window", "fought over a toaster", "killed a bug"],
    good_actions = ["got someone a new car", "saved a man from drowning", "never got into a fight"],
    actions = ["broke a vending machine", "never got into a fight", "tied someone's shoes"];

console.log(whatListAmIOn(bad_actions))
console.log(whatListAmIOn(good_actions))
console.log(whatListAmIOn(actions))