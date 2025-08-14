class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives === 0) {
            throw new Error("already dead");
        }
        
        if (this.number === n) {
            return true;
        } else {
            if (this.lives !== n) {
                this.lives =- 1;
                return false;
            }
        }
    }
}


let guesser = new Guesser(5, 3);
guesser.guess(5); // returns true
guesser.guess(3); // returns false
guesser.guess(2); // returns false