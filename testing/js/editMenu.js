let testLink = document.getElementById("link1")
document.getElementById("desc").innerHTML = testLink.href + " - " + testLink.innerHTML

function editBookmarks() {
	document.getElementById("editContainer").style.visibility = "visible";
	document.getElementById("mainContainer").style.visibility = "hidden";
	document.getElementById("editContainer").style.opacity = "1";
	document.getElementById("mainContainer").style.opacity = "0";
}

function backToHome() {
	document.getElementById("editContainer").style.visibility = "hidden";
	document.getElementById("mainContainer").style.visibility = "visible";
	document.getElementById("editContainer").style.opacity = "0";
	document.getElementById("mainContainer").style.opacity = "1";
}
