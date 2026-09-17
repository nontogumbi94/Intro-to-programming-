var randomBodyParts = ["Eyes", "Mouth", "Hair", "Theet"]
var randomAdjectives = ["Boring", "Stupid", "Smelly"]
var randomWords = ["Cow", "Pig", "Goat", "Dog", "Snail"]


//picking a random body part using math.random and math.floor
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)]

//picking a random body adjective using math.random and math.floor
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]

//picking a random body word using math.random and math.floor
var randomWord = randomWords[Math.floor(Math.random() * 5)]

//genetaing a sentence
var randomInsult = "Your " + randomBodyPart +  " is like a " + randomAdjective + " " + randomWord
console.log(randomInsult)