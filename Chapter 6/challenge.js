//Awesome animals
var awsomeAnimals = ["cat", "dog", "fish", "rabbit", "goat"];
for (i =0; i < awsomeAnimals.length; i++){
    console.log("Awesome ", awsomeAnimals[i])
}

//Random string generator
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

while (randomString.length < 10) {
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
}

console.log(randomString);

//h4ck3r sp34k 
var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "o") {
        output += "0";
    } else {
        output += input[i];
    }
}

console.log(output);
