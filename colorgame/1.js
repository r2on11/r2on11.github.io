var numSquares = 6;
var colors = generateRandomColors(numSquares);


//     // "rgb(255 , 0, 0)",
//     // "rgb(255 , 255, 255)",
//     // "rgb(0, 255, 0)",
//     // "rgb(0, 255, 255)",
//     // "rgb(0, 0, 255)",
//     // "rgb(255, 0, 255)"            hardcodeddd
// ]

var squares = document.querySelectorAll (".square");

// var pickedColor = colors [3]; kjo per hard coded
var pickedColor = pickColor();
var colorDisplay = document.getElementById ("colorDisplay");
var clickedColor;
var messageDisplay = document.querySelector ("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector ("#reset");
var easy = document.querySelector ("#easy");
var hard = document.querySelector ("#hard");
var numSquares = 6;


colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
    //mi shtu ngjyrat niher
    squares[i].style.backgroundColor = colors[i];

    //eventi click
    squares[i].addEventListener("click", function(){
        //grab color of square
        clickedColor = this.style.backgroundColor;
         //compare that color
        if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = (pickedColor);
        resetButton.textContent = "PLAY AGAIN!";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        };
         
        //compare that color
    });
}
colorDisplay.textContent = pickedColor;




function changeColors(color){
    //looop trhough all suares
    for (var i=0;i<squares.length;i++)
    squares[i].style.backgroundColor = color;
}

function pickColor(){ //per me caktu cilen ngjyre po lypet
   var random = Math.floor(Math.random()*colors.length);
   return colors[random];
}
function generateRandomColors(num){
    //array 
    //add num to arra and return it
    var arr=[];
    for (var i=0;i<num;i++){
        //get random caolors and push into arr
        arr.push(randomColor());

    }
    return arr;
}
function randomColor (){
    //pick a ":RED" from 0 to 255
    var r= Math.floor(Math.random() * 256);
    //pick a ":green" from 0 to 255
    var g= Math.floor(Math.random() * 256);
    //pick a ":blue" from 0 to 255
    var b= Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}





easy.addEventListener ("click", function(){
    hard.classList.remove("selected");
    this.classList.add("selected");
    numSquares = 3;

    //generate new color, pick new random color and then
//cchange the color of the squares
colors=generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "";
for (var i=0; i <squares.length;i++){
    if (colors[i]){
    squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
    
};})


hard.addEventListener ("click", function(){
    easy.classList.remove("selected");
    this.classList.add("selected");
    
    //generate new color, pick new random color and then
//cchange the color of the squares
numSquares = 6;
colors=generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "";


//color display me match picked color
for (var i=0; i <squares.length;i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].style.display = "block";

    
}})

resetButton.addEventListener ("click", function(){
    //generate new color, pick new random color and then
    //cchange the color of the squares
    colors=generateRandomColors(numSquares);
    pickedColor = pickColor();
    //color display me match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i=0; i <squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "steelblue";
        resetButton.textContent = "New Colors";
    
    }
    })
