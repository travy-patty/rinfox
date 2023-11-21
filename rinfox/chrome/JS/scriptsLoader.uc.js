// ==UserScript==
// @name			Scripts Loader
// @description 	Loads resources required for RinFox
// @author			Travis
// @include			main
// ==/UserScript==

const { ctypes } = ChromeUtils.import("resource://gre/modules/ctypes.jsm");

function executeFunctions() {
	getAndSetTitleBarHeight();
	moveBookmarksBar();
	hideTabBarItems();
	changeLibraryButtonText();
	changeFirefoxButtonText();
	changeUnifiedExtensionsText();
	changeSearchBarPlaceholder();
	createHelpButton();
	convertCheckboxesToNativeLook()
	openRinFoxWizardWindow(true);
    console.info("Functions executed.");
}

window.addEventListener("load", function () {
    executeFunctions();  
})