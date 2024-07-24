const prompt = require('prompt-sync')({sigint:true});

let targetNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;

while (guess !== targetNumber) {

    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (guess > targetNumber) {
        console.log("그것보다 작아요!");
    } else if (guess < targetNumber) {
        console.log("그것보다는 커요!");
    } else {
        console.log("정답이에요!");
        break;
    }   
}
