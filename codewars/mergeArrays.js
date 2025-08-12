// function mergeArrays(arr1, arr2) {
//     let arr3 = [];

//     for(let i = 0; i < arr1.length; i++) {
//         arr3.push(arr1[i])
//     };

//     for(let i = 0; i < arr2.length; i++) {
//         arr3.push(arr2[i])
//     };

//     return arr3;
// }

function mergeArrays(arr1, arr2) {
    let arr3 = [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
    return arr3;
}
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]