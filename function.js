
const targetNumber = Math.floor(Math.random() * 100) + 1;

let guess;
while (guess!=targetNumber) { 
 
  guess = parseInt(prompt("Enter your guess"));

  if (guess < targetNumber) {
    console.log("Too low ");
  } else if (guess > targetNumber) {
    console.log("Too high");
  } else {
    console.log("Congratulations");
    break; 
  }
}