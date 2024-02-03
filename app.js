/**
 *  ? Guessing Game
 *      User enters a max number and then tries to guess a random generated number between 1 to max.
 */

const max = prompt("Guess a random number between 1 to max");


let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if (guess == "quit"){
        console.log("User quit the game.")
        break;
    }

    if (guess == random){
        console.log("You are right ! congrats!! random number was", random);
        break;
    }else{
        guess = prompt("Your guess was wrong. please try again")
    }
}

