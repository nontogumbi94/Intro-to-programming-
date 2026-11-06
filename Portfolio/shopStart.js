
var nums = [1, 2, 3, 4, 5, 6];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta", "NikNaks", "Tennis"];
var prices = [7.5, 9.5, 8.5, 7.5, 5, 10.5];
var quantities = [0, 0, 0, 0, 0, 0];
var totals = [0, 0, 0, 0, 0, 0];
var totalOrderAmt = 0;


// ADD BUTTON
function add_selection(x) {
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    display_all();
}


// REMOVE BUTTON
function remove_selection(x) {
    // Only remove an item if its quantity is greater than zero
    if (quantities[x] > 0) {
        quantities[x] = quantities[x] - 1;
    }

    // Recalculate the total for this item
    totals[x] = prices[x] * quantities[x];

    display_all();
}


// CHECKOUT BUTTON
function checkout() {
    totalOrderAmt = 0;

    // Add the totals of all items in the cart
    for (var i = 0; i < items.length; i++) {
        totalOrderAmt = totalOrderAmt + totals[i];
    }

    // Display the final order total
    document.getElementById("total").innerHTML =
        "Total Order Amount: R" + totalOrderAmt.toFixed(2);
}


// DISPLAY THE SHOPPING CART
function display_all() {
    var myTable = "<table border='1' cellpadding='8'>";

    myTable += "<tr>";
    myTable += "<th>Num</th>";
    myTable += "<th>Item</th>";
    myTable += "<th>Price</th>";
    myTable += "<th>Quantity</th>";
    myTable += "<th>Total</th>";
    myTable += "<th>Add</th>";
    myTable += "<th>Remove</th>";
    myTable += "</tr>";

    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";

        myTable += "<td>" + nums[i] + "</td>";
        myTable += "<td>" + items[i] + "</td>";
        myTable += "<td>R" + prices[i].toFixed(2) + "</td>";
        myTable += "<td>" + quantities[i] + "</td>";
        myTable += "<td>R" + totals[i].toFixed(2) + "</td>";

        myTable += "<td><button onclick='add_selection(" + i + ")' style='background-color: cadetblue;;'>Add</button></td>";

        myTable += "<td><button onclick='remove_selection(" + i + ")' style='background-color: rgb(189, 11, 11);'>Remove</button></td>";

        myTable += "</tr>";
    }

    myTable += "</table>";

    document.getElementById("demo").innerHTML = myTable;
}


// DISPLAY THE CART WHEN THE PAGE LOADS
window.onload = function() {
    display_all();
};
