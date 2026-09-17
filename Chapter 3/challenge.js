//1. New insult

var bodyParts = ["mouth", "eyes", "nose", "teeth"];
var adjectives = ["smelly", "ugly", "weird", "disgusting"];

var randomBodyPart = bodyParts[Math.floor(Math.random() * 4)];
var randomAdjective = adjectives[Math.floor(Math.random() * 4)];

console.log("Your " + randomBodyPart + " is " + randomAdjective + "!");

//2. More words
var bodyParts = ["nose", "ears", "hair", "feet"];
var adjectives = ["smelly", "ugly", "weird", "disgusting"];
var animals = ["monkey", "pig", "goat", "chicken"];

var bodyPart = bodyParts[Math.floor(Math.random() * 3)];
var adjective = adjectives[Math.floor(Math.random() *  4)];
var animal = animals[Math.floor(Math.random() * 5)];

console.log("Your " + bodyPart + " is so " + adjective + " like " + animal );


//3.Using the + operator

var bodyParts = ["nose", "ears", "hair", "feet"];
var adjectives = ["smelly", "ugly", "weird", "disgusting"];
var animals = ["monkey", "pig", "goat", "chicken"];
var animalBodyParts = ["tail", "ears", "hooves", "beak"];

var bodyPart = bodyParts[Math.floor(Math.random() * 4)];
var adjective = adjectives[Math.floor(Math.random() * 4)];
var animal = animals[Math.floor(Math.random() * 4)];
var animalBodyPart = animalBodyParts[Math.floor(Math.random() * 4)];

console.log(
  "Your " + bodyPart + " is " + adjective +
  " like a " + animal + "'s " + animalBodyPart + "."
);

//4 Joining Numbers
var numbers = [5, 4, 3];
console.log(numbers.join(" is bigger than "))