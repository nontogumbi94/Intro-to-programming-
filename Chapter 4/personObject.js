//1.Creating a person object
const person ={
    name: "Ntando",
    surname: "Gumbi",
    age: 3,
    height: 2,
    "fave color": "blue"
}

//2. Accessing values using dot notation or bracket
const age = person.age
console.log("Persons age is: ", age)

const name = person["name"]
console.log("Person name is: ", name)

//3. Retrieving all the keys from the object
const keys = Object.keys(person)
console.log("All the keys: ", keys)

//4. Retriving all the values from the object
const values = Object.values(person)
console.log("All the values: ", values)

//5. Creating a new key and value
person["country"] = "South Africa"
console.log("After adding a new key and value: ", person)

//6. changing an existing  an existing value
person.name = "Nonto"
console.log("After changing the name: ", person)