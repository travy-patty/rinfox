const TabToolbarCustomization = document.getElementById("TabsToolbar-customization-target");

function changeLibraryButtonText() {
	const LibraryButton = document.getElementById("library-button");
	const LibraryButtonLabel = document.querySelector("#library-button label.toolbarbutton-text");
	
	LibraryButtonLabel.setAttribute("value", "Favorites");
};

function changeFirefoxButtonText() {
	const PanelUIButton = document.getElementById("PanelUI-button");
	const PanelUIButtonLabel = document.querySelector("#PanelUI-menu-button label.toolbarbutton-text");
		
	TabToolbarCustomization.appendChild(PanelUIButton);
	PanelUIButtonLabel.setAttribute("value", "Tools");
};

function changeUnifiedExtensionsText() {
	const UnifiedExtensionsButton = document.getElementById("unified-extensions-button");
	const UnifiedExtensionsButtonLabel = document.querySelector("#unified-extensions-button label.toolbarbutton-text");
	
	TabToolbarCustomization.appendChild(UnifiedExtensionsButton);
	UnifiedExtensionsButtonLabel.setAttribute("value", "Add-ons");
};

function changeSearchBarPlaceholder() {
	const searchBarPlaceHolder = document.querySelector(".searchbar-textbox");
	
	searchBarPlaceHolder.setAttribute("placeholder", "Live Search");
}