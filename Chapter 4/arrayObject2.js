//1. Creating 3 objects
var friends = [
{
    name: "Cindy",
    age: 20,
    luckynumbers: [1, 2, 3, 4, 5]
},
{
    name: "Amanda",
    age: 12,
    luckynumbers: [2, 4, 6, 8]
},

{
    name: "Zoe",
    age: 21,
    luckynumbers:  [3, 6, 9, 12]
}
]

//Accessing an object
console.log("Accessing a friend: ", friends[1])

//Accessing properties inside an object
console.log("Acessing my friends name: ", friends[0].name)

//Accessing from the luckynumbers array
console.log("Accessing a luckynumber array: ", friends[2].luckynumbers[3])