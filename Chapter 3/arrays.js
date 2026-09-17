//1.Creating a fruits array
var fruits = ["apple", "banana", "orange", "cherry"]

//2. Finding the fruits length
console.log("The fruits length: ", fruits.length);

//3. Choosing one item from the array using index
console.log("After inderxing: ", fruits[2])

//4. Replacing an existing item with a new one
fruits[2] = "blueberry"
console.log("The updated array: ", fruits)

//5. Adding an item to the back of the array using push command
fruits.push("peach")
console.log("After pushing to the array: ", fruits)

//6. Adding an item in the array using splice method
fruits.splice(2, 0, "lime")
console.log("After adding lime: ", fruits)

//7. adding item at the biginning of the array using unshift method
fruits.unshift("mango")
console.log("After adding at the beginning: ", fruits)

//8. removing an item at the end of array using the pop method
console.log("What is being removed: ", fruits.pop())
console.log("After popping: ", fruits)

//9. Creating a mixed array
var mixedArray = [true, "red", 32, ["cat", "dog", "cow"], "yellow"]
console.log("1. After indexing of mixedArray: ", mixedArray[3])
console.log("2. After indexing of mixedArray: ", mixedArray[3][2])

//10 Joining arrays using concat
var joinedArray = mixedArray.concat(fruits)
console.log("Concat array: ", joinedArray)