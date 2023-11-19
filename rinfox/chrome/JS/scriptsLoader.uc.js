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