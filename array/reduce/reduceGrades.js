let students = [
    { name: "John", grade: 8 },
    { name: "Jane", grade: 4 },
    { name: "Joe", grade: 6 },
    { name: "Jill", grade: 7 },
    { name: "Jack", grade: 3 }
];

function passFailCount(arr) {
    return arr.reduce((total, aluno) => {
        if(aluno.grade >= 6) {
            total.passed++
        } else {
            total.failed++
        };

        return total
    }, {
        passed: 0,
        failed: 0
    })
}

console.log(passFailCount(students));
// Saída esperada:
// { passed: 3, failed: 2 }
