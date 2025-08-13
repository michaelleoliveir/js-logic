const rps = (p1, p2) => {
    // if(p1 === p2) {
    //     return 'Draw!'
    // } else if((p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper') && (p2 === 'rock')) {
    //     return 'Player 1 won!'
    // } else {
    //     return 'Player 2 won!'
    // };

    const wins = {
        rock: 'paper',
        paper: 'scissors',
        scissors: 'rock'
    };

    return wins[p1] === p2 ? 'Player 2 won!' : 'Player 1 won!' 
};

console.log(rps('rock', 'scissors')); // Player 1 won!
console.log(rps('paper', 'rock')); // Player 1 won!
console.log(rps('scissors', 'paper')); // Player 1 won!
console.log(rps('rock', 'paper')); // Player 2 won!
console.log(rps('paper', 'scissors')); // Player 2 won!     
