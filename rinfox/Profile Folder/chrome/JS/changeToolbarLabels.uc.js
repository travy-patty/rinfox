// ==UserScript==
// @name			Change Toolbar Labels
// @description 	Changes the label of Toolbar Buttons
// @author			Travis
// @include			main
// ==/UserScript==

const TabToolbarCustomization = document.getElementById("TabsToolbar-customization-target");

function changeLibraryButtonText() {
	try {
		const LibraryButton = document.getElementById("library-button");
		const LibraryButtonLabel = document.querySelector("#library-button label.toolbarbutton-text");
		
		LibraryButtonLabel.setAttribute("value", "Favorites");
	} catch(error) {
		console.log("Can't rename ToolbarButton.");
	}
};

function changeFirefoxButtonText() {
	try {
		const PanelUIButton = document.getElementById("PanelUI-button");
		const PanelUIButtonLabel = document.querySelector("#PanelUI-menu-button label.toolbarbutton-text");
			
		TabToolbarCustomization.appendChild(PanelUIButton);
		PanelUIButtonLabel.setAttribute("value", "Tools");
	} catch(error) {
		console.log("Can't rename ToolbarButton.");
	}
};

function changeUnifiedExtensionsText() {
	try {
		const UnifiedExtensionsButton = document.getElementById("unified-extensions-button");
		const UnifiedExtensionsButtonLabel = document.querySelector("#unified-extensions-button label.toolbarbutton-text");
		
		TabToolbarCustomization.appendChild(UnifiedExtensionsButton);
		UnifiedExtensionsButtonLabel.setAttribute("value", "Add-ons");
	} catch(error) {
		console.log("Can't rename ToolbarButton.");
	}
};

function changeSearchBarPlaceholder() {
	try {
		const searchBarPlaceHolder = document.querySelector(".searchbar-textbox");
		
		searchBarPlaceHolder.setAttribute("placeholder", "Live Search");
	} catch(error) {
		console.log("Can't rename ToolbarButton.");
	}
}