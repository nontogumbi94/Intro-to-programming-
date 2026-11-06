
//Generating a random number from 1 to 20
var secret = Math.floor(Math.random() * 20) + 1;

//Max number of attempts
var maxAttempts = 10;

//Ask the user to enter the number from 1 to 20 and convert the input into a number
var guess = parseInt(prompt("Please enter the secret number from 1 to 20. You have " +maxAttempts + " tries."));

//Tracking attempts
var attempts = 1;

//Loop until the correct guess
while (guess !== secret && attempts < maxAttempts){
    //Check if the guess is low
    if (guess < secret){
        alert("Incorrect, The number is too low");
    }
    //check if the guess is high
    else if (guess > secret){
       alert("Incorrect, The number is too high");
    }
    //Ask the user to try again and display the number of remaining attempts
    guess = parseInt(prompt("Try again. You have " + (maxAttempts - attempts) + " attempts remaining. "));

    //Increase counter of attempts
    attempts++;
}
//Final outcome
if (guess === secret){
    alert("Correct guess!");
}
else{
    alert("Out of attempts. The secret number was " + secret);
}