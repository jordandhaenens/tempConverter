function toFahrenheit(num) {
	var fahrenheit = (num * 1.8) + 32;
	return fahrenheit;
}

function toCelsius(num) {
	var celsius = (num -  32) / 1.8;
	return celsius;
}

function checkTypeDegree() {
	clearColorClass();
	console.log("cleared");
	var answer = document.getElementById("outputArea");
	var numToConvert = document.getElementById("numToConvert").value;
	if (document.getElementById("celsius").checked) {
		console.log("celsius", answer);
		answer.innerHTML = toCelsius(numToConvert);
	} else if (document.getElementById("fahrenheit").checked) {
		answer.innerHTML = toFahrenheit(numToConvert);
	}
	colorText();
}

function colorText() {
	var tempText = document.getElementById("outputArea");
	if (document.getElementById("celsius").checked) {
		console.log("colorFunction");
		if (tempText.innerHTML > 32) {
			tempText.classList.add("red");
		} else if (tempText.innerHTML < 0) {
			tempText.classList.add("blue");
		} else {
		tempText.classList.add("green");
		}

	} else if (document.getElementById("fahrenheit").checked) {
		console.log("fahrenheit checked");
		if (tempText.innerHTML > 90) {
			tempText.classList.add("red");
		} else if (tempText.innerHTML < 32) {
			tempText.classList.add("blue");
		} else {
		tempText.classList.add("green");
		}
	}
}

function clearColorClass() {
	var tempText = document.getElementById("outputArea");
	tempText.classList.remove("red", "green", "blue");
}


var submitButton = document.getElementById("convert");
var clearButton = document.getElementById("clear");

submitButton.addEventListener("click", checkTypeDegree);
clearButton.addEventListener("click", function(){
	console.log("clear is almost working");
	document.getElementById("numToConvert").value = "";
});


var wrapper = document.getElementById("wrapper");

wrapper.addEventListener("keyup", function(e){
	if (e.keyCode === 13) {
		console.log("hi");
		checkTypeDegree();
	}
});











