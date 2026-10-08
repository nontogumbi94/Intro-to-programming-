var replaceButton = document.getElementById("replaceButton");

replaceButton.addEventListener("click", replaceIt);

function replaceIt() {

    var storyDiv = document.getElementById("story");

    var adj1 = "<span class='replacement'>" +
        document.getElementById("adj1").value +
        "</span>";

    var verbIng = "<span class='replacement'>" +
        document.getElementById("verbIng").value +
        "</span>";

    var theStory = "<h1>My Dance Party</h1>";

    theStory += "One " + adj1 + " day, ";
    theStory += "I was " + verbIng + " at my dance party.";

    storyDiv.innerHTML = theStory;
}