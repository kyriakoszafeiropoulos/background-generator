const input1 = document.getElementById("col1");
const input2 = document.getElementById("col2");
const background1 = document.getElementById("background1");
const displayCSS = document.getElementById("displayCSS");
const Randomize = document.getElementById("Randomize");

input1.addEventListener("input", colChange);
input2.addEventListener("input", colChange);

colChange();


function colChange() {
	background1.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
	displayCSS.textContent = background1.style.background + ";";
}

Randomize.addEventListener("click", randomColor);

function randomColor() {
	input1.value = generateRandomHexCode();
	input2.value = generateRandomHexCode();
	colChange();
}



function generateRandomHexCode() {
    var hexCode = "#" 

    while ( hexCode.length < 7 ) {
      hexCode += (Math.round(Math.random() * 15)).toString(16) 
    }

    return hexCode 
  }