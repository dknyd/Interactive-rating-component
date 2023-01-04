"use strict"
let rating;
function saveUserData(ratingNum) {
	console.log(ratingNum);
	rating = ratingNum;
}

function thankYouState(){
	document.getElementById("mainText").style.visibility = "hidden";
	document.getElementById("altText").style.visibility = "visible";

	document.getElementById("mainText").style.zindex = 1;
	document.getElementById("altText").style.zindex = 2;

	document.getElementById("ratingElement").innerHTML = rating;
}

