var numSquares = 6;
var colors = generateRandomColors(numSquares); /*Random Farben die den Squares zugewiesen werden */
var squares = document.querySelectorAll(".square"); /*Choose squares*/
var pickedColor = pickColor(); /*Farbe die eraten werden muss = farbe die gewählt wurde*/
var colorDisplay = document.getElementById("colorDisplay"); /* choose span RGB*/
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); /* Easy and Hard button */

for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        // if(this.textContent === "Easy"){
        //     numSquares = 3;
        // } else {
        //     numSquares = 6;
        // }

        reset();
        // figure ot how many squares to show
        // pick new colors
        // pick a new picked Color
        // update page to reflect changes
    });
}

function reset(){
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor
    resetButton.textContent = "New Colors"; /* reset button vhanges from "play again" to New Colors" */
    messageDisplay.textContent = ""; /* "Correct!" disappears after pushing reset button */
    // change colors of squares
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];  
        }  else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected"); /*wenn easy button geclickt wird,  hard button von der class "selected" removed */
//     easyBtn.classList.add("selected"); /*wenn easy button geclickt wird, wird easy button von der class "selected" geadded */
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor; /* ändert die angezeigte RGB Farbe (span im html file) in die Farbe die eraten werden muss  */
//     for(var i=0; i<squares.length; i++){
//         if(colors[i]){ /* Loop through squares. We have decided above that colors have 3 items in it. Wenn eine color mit index i,
//             das jeweilige square nimmt die Farbe von color i an  */
//             squares[i].style.backgroundColor = colors[i]; /* Der Loop führt dazu, dass sich nur die erste obere reihe bei clicken des Button
//             verändert */
//         } else {
//             squares[i].style.display = "none"; /* dadruch wird die untere reihe der squares im easy 
//             modus versteckt*/
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected"); /*wenn hard  button geclickt wird,  wird hard button von der class "selected" geadded */
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor; /* ändert die angezeigte RGB Farbe (span im html file) in die Farbe die eraten werden muss  */
//     for(var i=0; i<squares.length; i++){
//             squares[i].style.backgroundColor = colors[i]; 
//             squares[i].style.display = "block"; /* dadruch wird die untere reihe der squares im hard 
//             modus wieder angezeigt*/
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
    // // generate all new colors
    // colors = generateRandomColors(numSquares);
    // // pick a new random color from array
    // pickedColor = pickColor();
    // // change colorDisplay to match picked color
    // colorDisplay.textContent = pickedColor
    // this.textContent = "New Colors"; /* reset button vhanges from "play again" to New Colors" */
    // messageDisplay.textContent = ""; /* "Correct!" disappears after pushing reset button */
    // // change colors of squares
    // for(var i=0; i<squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];   
    // }
    // h1.style.backgroundColor = "#steelblue";
})

colorDisplay.textContent = pickedColor; /* RGB in h1 hat die selbe Farbe wie das vierte Feld */

// Loop through each sqaure
for(var i=0; i<squares.length; i++){
    // füge startfarbe zu den einzelnen Feldern hinzu
    squares[i].style.backgroundColor = colors[i];

    // füge clickEvent zu den einzelnen Feldern hinzu
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor; /* this bezieht sich auf das angeclickte Square , es wird eine neue variable 
        erstellt */
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"; /*if wrong color clicked field turns into grey*/
            messageDisplay.textContent = "Try Again"
        }

    });
}

function changeColors(color){
    // loop through all squares
    for(var i=0; i<squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length); /*Math.floor generates random  decimal numbers . 
    Math.floor chops of the decimal; multiplied by the numbers of arrays through colors.length */
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = []
    // repeat num times
    for (var i=0; i<num; i++){
        // get random color and push into array
        arr.push(randomColor())
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a "red from 0-255"
    var r = Math.floor(Math.random() * 256);
    // pick a "green from 0-255"
    var g = Math.floor(Math.random() * 256);
    // pick a "blue from 0-255"
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
