function playerRankUp(points) {
    if (points >= 100) return 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up'

    return false;
}

console.log(playerRankUp(64)); // "false"
console.log(playerRankUp(101)); // "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."