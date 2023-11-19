// ==UserScript==
// @name			Scripts Loader
// @description 	Loads resources required for RinFox
// @author			Travis
// @include			main
// ==/UserScript==

function executeFunctions() {
	moveBookmarksBar();
	hideTabBarItems();
	changeLibraryButtonText();
	changeFirefoxButtonText();
	changeUnifiedExtensionsText();
	changeSearchBarPlaceholder();
	createHelpButton();
	launchRinFoxWizard();
    console.info("Functions executed.");
}

window.addEventListener("load", function () {
    executeFunctions();  
})