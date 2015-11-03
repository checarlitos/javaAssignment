/**
 * changes the text on a text that says "here"
 **/
function clickEvent() {
	document.getElementById("firstP").innerHTML = "What did you do!?!?!?!? where did the paragraph go?.";
}

/**
 * changes the font type when moused over
 **/
function mouseOver() {
	document.getElementById("secondP").style.fontSize ="large";
}

/**
 * changes background color when moused out
 **/
function mouseOut() {
	document.getElementById("secondP").style.fontColor = "blue";
}

/**
 * hides/shows the textarea when the checkbox is unchecked/checked
 **/
function showMoreInfo() {
	if(document.getElementById("moreInfo").style.display === "block")
	{
		document.getElementById("moreInfo").style.display = "none";
	} else {
		document.getElementById("moreInfo").style.display = "block";
	}
}

/**
 * shows a modal window when clicked
 **/
function popUp() {
	document.getElementById("signUp").style.display = "block";
}

/**
 * closes the modal window when clicked
 **/
function closeSignUp() {
	document.getElementById("signUp").style.display = "none";
}

/**
 * generates a kitty based on the dimensions entered =^.^=
 **/
function resizeKitty() {
	var dimension = document.getElementById("dimension").value;
	var imageUrl  = "http://placekitten.com/g/" + dimension + "/" + dimension;
	document.getElementById("dimensionValue").innerHTML = dimension;
	document.getElementById("kitten").src = imageUrl;
}