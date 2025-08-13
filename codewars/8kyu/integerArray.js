// function filter_list(l) {
//     let integers = [];

//     l.map((item) => {
//         if (typeof item === 'number') integers = [...integers, item];
//     })

//     return integers;
// }

function filter_list(l) {
    return l.filter(item => typeof item === 'number')
}

console.log(filter_list([1, 2, 'a', 'b'])); // [1, 2]