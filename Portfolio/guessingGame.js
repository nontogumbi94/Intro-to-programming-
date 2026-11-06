 /* Specs:

var secret = 7;

var answer = prompt (“Please guess the secret number (1-20)”);

// Convert the string guess to an integer so that we can compare
var guess = parseInt (answer);

/////////////////////////////////////////////////////////

Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!

How can you combine line 2 and 3 into one line

Expand the program to do this in a while loop, only exiting when the guess was correct

While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.

When you are done make the secret number random.*/

//Generate a random number between 1 to 20
var secret = Math.floor(Math.random() * 20) + 1;

//Maximum number of attempts
var maxAttempts = 5;

//Ask the user for first guess and convert the input into a number and  displaying the number of attempts
var guess = parseInt(prompt("Please guess the secret number (1-20). You have " + maxAttempts + " attempts"));

//Tracking attempts

var attempts = 1;

//Loop until correct guess 
while (guess !== secret && attempts < maxAttempts){
    // Checking if number is low
    if (guess < secret){
        alert("Incorrect, too low");
    }
    //Checking if number is high
    else if ( guess > secret) {
        {
            alert("Incorrect, too high");
        }
    }
    //Ask a user to try again and displaying the remaining attempts
    guess = parseInt(prompt("Try again. You have " + (maxAttempts - attempts) + " remaining."));

    //increasing counter
    attempts++;
}
//final outcome
if (guess === secret){
    alert("Correct Guess!!")
}
else{
    alert("Out of attempts. The secret number was " + secret)
}