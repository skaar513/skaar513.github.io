toggleEngine();

function editBookmarks() {
	document.getElementById("editContainer").style.display = "inline";
	document.getElementById("mainContainer").style.opacity = "0.25";
	document.getElementById("mainContainer").style["pointer-events"] = "none";
}

function backToHome() {
	document.getElementById("editContainer").style.display = "none";
	document.getElementById("mainContainer").style.opacity = "1";
	document.getElementById("mainContainer").style["pointer-events"] = "auto";
}

function editSettings() {
	document.getElementById("editContainer2").style.display = "inline";
	document.getElementById("mainContainer").style.opacity = "0.25";
	document.getElementById("mainContainer").style["pointer-events"] = "none";
}

function backToHome2() {
	document.getElementById("editContainer2").style.display = "none";
	document.getElementById("mainContainer").style.opacity = "1";
	document.getElementById("mainContainer").style["pointer-events"] = "auto";
}
