//1. If statement
var name = "Nonto";
console.log("My name is: ", name);

//Statement 1 = true
if(name.length > 3){
console.log("Your name is long");
}

//statement 2 = false
if(name.length > 7){
console.log("Your name is not that long");
}

//Using If statement with else
    if(name.length > 6){
console.log("Your name is long");
}
else{
console.log("Your name is not that long");
}

// If statement, else, else if

    if(name.length > 6){
console.log("Your name is long");
}
else if(name.length > 7){
console.log("Your name is less than 7")
}
else if(name.length > 8){
console.log("Your name is less than 8")
}
else if(name.length > 4){
console.log("Your name is bigger than 4")
}
else{
console.log("Your name is not that long");
}