document.write("<strong>-------Friends Array-------</strong><br>");

var friends = ["Thabo", "Lerato", "Sipho", "Naledi", "Zanele", "Kagiso"];

document.write("1. The Friends Array: " + friends + "<br><br>");

// Changing a value
friends[0] = "Ayanda";

document.write("2. After changing the value: " + friends + "<br>");

// Using valueOf()
document.getElementById("peopleIKnow").innerHTML = friends.valueOf();


document.write("<br><strong>-------Other Friends Array-------</strong><br>");

var otherFriends = [
    "Bongani",
    "Nomsa",
    "Themba",
    "Palesa",
    "Mandla",
    "Busisiwe"
];

document.write("3. The Other Friends Array: " + otherFriends + "<br>");


document.write("<br><strong>-------My Friends Array-------</strong><br>");

var myFriends = friends.concat(otherFriends);

document.write("1. My new combined array: " + myFriends + "<br><br>");


// indexOf()
var pp = friends.indexOf("Sipho");

document.write("2. Index of Sipho: " + pp + "<br><br>");


// join()
var joinedFriends = friends.join(" # ");

document.write("3. Joined friends with #: " + joinedFriends + "<br><br>");


// lastIndexOf()
var lastIndexLerato = friends.lastIndexOf("Lerato");

document.write("4. Last index of Lerato: " + lastIndexLerato + "<br><br>");


// pop()
var removedFriend = friends.pop();

document.write("5. Removed last friend: " + removedFriend + "<br>");
document.write("After pop: " + friends + "<br><br>");


// push()
friends.push("Kamo");

document.write("6. After pushing 'Kamo': " + friends + "<br><br>");


// reverse()
friends.reverse();

document.write("7. After reversing: " + friends + "<br><br>");


// shift()
var shiftedFriend = friends.shift();

document.write("8. Removed at the beginning: " + shiftedFriend + "<br>");
document.write("After shift: " + friends + "<br><br>");


// unshift()
friends.unshift("Refilwe");

document.write("9. After adding to the beginning: " + friends + "<br><br>");


// slice()
var friends1 = friends.slice(0, 3);

document.write("10. After slice (0 to 3): " + friends1 + "<br><br>");


// sort()
var friends2 = friends.sort();

document.write("11. After sort: " + friends2 + "<br><br>");


// splice()
friends.splice(1, 0, "Dineo");

document.write("12. After splice (insert 'Dineo' at index 1): " + friends + "<br>");