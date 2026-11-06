//Create an array to store the number of each item
var nums = [1, 2, 3, 4, 5, 6];

//Create an array to store the names of the items
var items = ["Lunch bar", "KitKat", "Doritos", "Tennis", "Coke", "Fanta"];

//Create an array to store the prices of each tem
var prices = [17.5, 12.9, 28.5, 32.5, 15.5, 14.6];

//Create an array to store quantities selected by the user (Initially set to 0)
var quantities = [0, 0, 0, 0, 0, 0];

//Create an array to store the total price for each item (Initially set to 0)
var totals = [0, 0, 0, 0, 0, 0];

//Create a variable to store the total amount of the order
var totalOrderAmt = 0;

//Add item - This function adds one item to the shopping cart
//x represents the position(index) of the selected item in the arrays
function add_selection(x){
    //Increase the quantity of the selected item by 1
    quantities[x] = quantities[x] + 1;

    //Calculate the total price of that item
    totals[x] = prices[x] * quantities[x];

    //Refresh the shopping cart table to show the updated information
    display_all();
}

//Remove item - This function removes one item from the shopping cart
function remove_selection(x){
    //Check if the quantity is greater than 0
    if(quantities[x] > 0){
        
        //Decrease the quantity by 1
        quantities[x] = quantities[x] - 1;
    }
    //Recalculate the total
    totals[x] = prices[x] * quantities[x];

    //Refresh the shopping cart table
    display_all();
}

//Checkout - This function calculates the total amount of all items in the cart
function checkout(){
    //Reset the total order amount to zero befor calculating
    totalOrderAmt = 0;

    //Loop through all the items in the shopping cart
    for(var i = 0; i < items.length; i++){
        //Add the total price of each item to the order amount
        totalOrderAmt = totalOrderAmt + totals[i]
    }

    //Display the final order amount on the webpage
    //toFixed(2) ensures that the amount displays two decimal places
    document.getElementById("total").innerHTML = "Total Order Amount R:" + totalOrderAmt.toFixed(2);
}

//Display all items - This function creates and displays the shopping cart table
function display_all(){
    //Creates the opening HTML table tag
    var myTable = "<table border='1' cellpadding='8'>";

    //Create the first table row
    myTable += "<tr>";

    //Add the table headings
    myTable += "<th>Num</th>";
    myTable += "<th>Item</th>";
    myTable += "<th>Price</th>";
    myTable += "<th>Quantity</th>";
    myTable += "<th>Total</th>";
    myTable += "<th>Add</th>";
    myTable += "<th>Remove</th>";
    //Close the table row
    myTable += "</tr>";

    //Use a for loop to go throu all the items in the arrays
    for(var i = 0; i < items.length; i++){
        //Start a new table row
        myTable += "<tr>";
        myTable += "<td>" + nums[i] + "</td>";
        myTable += "<td>" + items[i] + "</td>";
        myTable += "<td>" + prices[i].toFixed(2) + "</td>";
        myTable += "<td>" + quantities[i] + "</td>";
        myTable += "<td>" + totals[i].toFixed(2) + "</td>";
        //Create an Add button
        //onclick call add_selection() when the button is clicked
        myTable += "<td><button onclick='add_selection( " + i + ")' style='background-color: green;'>Add</button></td>";
        //Create a Remove bottom
        //onclick calls remove_selection() when the button is clicked
         myTable += "<td><button onclick='remove_selection( " + i + ")' style='background-color: red;'>Remove</button></td>";
        myTable += "</tr>";
    }

    //Close the HTML table
    myTable += "</table>";
    //Display the completed table inside the HTML element with id="demo"
    document.getElementById("demo").innerHTML = myTable ;
}
//Window onload
window.onload = function(){
    //Call display_all() to  show ths shopping cart table
    display_all();
}
