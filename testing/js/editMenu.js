toggleEngine();
let testLink = document.getElementById("link1");
document.getElementById("engine0Name").innerHTML = allEngines[0].name
document.getElementById("engine0Name").style.color = allEngines[0].color
document.getElementById("engine0Preposition").innerHTML = "Search \"" + allEngines[0].preposition + "\""
document.getElementById("engine0Url").innerHTML = "https://" + allEngines[0].url + "{...}" + allEngines[0].urlFilters

document.getElementById("engine1Name").innerHTML = allEngines[1].name
document.getElementById("engine1Name").style.color = allEngines[1].color
document.getElementById("engine1Preposition").innerHTML = "Search \"" + allEngines[1].preposition + "\""
document.getElementById("engine1Url").innerHTML = "https://" + allEngines[1].url + "{...}" + allEngines[1].urlFilters

document.getElementById("engine2Name").innerHTML = allEngines[2].name
document.getElementById("engine2Name").style.color = allEngines[2].color
document.getElementById("engine2Preposition").innerHTML = "Search \"" + allEngines[2].preposition + "\""
document.getElementById("engine2Url").innerHTML = "https://" + allEngines[2].url + "{...}" + allEngines[2].urlFilters

function editBookmarks() {
	document.getElementById("editContainer").style.display = "initial";
	document.getElementById("mainContainer").style.opacity = "0.25";
	document.getElementById("mainContainer").style["pointer-events"] = "none";
}

function backToHome() {
	document.getElementById("editContainer").style.display = "none";
	document.getElementById("mainContainer").style.opacity = "1";
	document.getElementById("mainContainer").style["pointer-events"] = "auto";
}

function editSettings() {
	document.getElementById("editContainer2").style.display = "initial";
	document.getElementById("mainContainer").style.opacity = "0.25";
	document.getElementById("mainContainer").style["pointer-events"] = "none";
}

function backToHome2() {
	document.getElementById("editContainer2").style.display = "none";
	document.getElementById("mainContainer").style.opacity = "1";
	document.getElementById("mainContainer").style["pointer-events"] = "auto";
}
