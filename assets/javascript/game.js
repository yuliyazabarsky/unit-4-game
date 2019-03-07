var wins = 0;
var losses = 0;
var target;
var yourScore = 0;
var numberOptions = [];
var imageOptions = ["assets/images/blue.jpg", "assets/images/pink.jpg", "assets/images/white.jpg",
    "assets/images/yellow.png"
];


for (var i = 0; i <= 3; i++) {
    var randomNum = Math.floor(Math.random() * 12 + 1);
    numberOptions.push(randomNum);
}

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", imageOptions[i]);



    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}

// functions

function restartGame() {
    yourScore = 0;
    $("#yourScore").text(yourScore);
    target = Math.floor(Math.random() * 101 + 19)
    $("#target").text(target);
}

$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    yourScore += crystalValue;
    // counter = counter + cxrys

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + yourScore);
    $("#yourScore").text(yourScore);

    if (yourScore === target) {
        wins++;
        $("#wins").text(wins);
        restartGame();
    } else if (yourScore >= target) {
        losses++;
        $("#losses").text(losses);
        restartGame();
    }
    return;

});
restartGame();