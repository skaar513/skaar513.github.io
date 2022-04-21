	var activeEngine, url;
	var x = -1;

	function toggleEngine() { x = (x == allEngines.length - 1) ? -1:x; 
		x = x + 1;
		activeEngine = allEngines[x];
//		document.getElementById('toggleButton').style.color = activeEngine.color;
		document.getElementById('searchInput').placeholder = "Search with " + activeEngine.name;
		url = activeEngine.url; 
		document.getElementById('searchInput').focus(); };

	function search() {let realVal = document.getElementById('searchInput').value.replace("%","%25").replace(/#/g,"%23").replace(/&/g,"%26").replaceAll("+","%2B").replace("/","%2F").replace("?","%3F").replace("=","%3d").replace("_","%5F").replace(/:/g,"%3A");
			let noSpaceVal = realVal.replace(/\s/g, "");
			{if (noSpaceVal == "") {window.location.reload(false);} else {window.open("https://" + url + realVal, "_self");}
				}
				  };
	function clearInput() { document.getElementById("searchInput").value = "";
				document.getElementById('searchInput').focus();
				hideClearButton(); };

	function editBookmarks() { let editContainer = document.getElementById("editContainer");
				   document.getElementById("book").placeholder = "hi, i work" ;};

	function hideClearButton() {
			document.getElementById("clearButton").style.display = (document.getElementById("searchInput").value == "") ? "none":"inline";
		};

//	function backToStart() { let editContainer = document.getElementById("editContainer");
//				   editContainer.style. ;};
