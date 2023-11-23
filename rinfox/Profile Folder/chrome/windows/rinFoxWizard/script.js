var currentPage = 0; // Default to the first page

function updateNavBackButton() {
    var navBackButton = document.getElementById('backButton');

    if (navBackButton) {
        // Disable the button if currentPage is 0, enable otherwise
        navBackButton.disabled = (currentPage === 0);

        // Assign a function to the onclick property
        navBackButton.onclick = function() {
            // Check if currentPage is IE10+ feature specific page
            if (currentPage == 3) {
                showPage(1);
            }
            // Check if currentPage is greater than 0
            else if (currentPage > 0) {
                // Call showPage with the previous page number
                showPage(currentPage - 1);
            }
        };
    } else {
        console.log('The wizard back navigation button was not found.');
    }
}

function showPage(pageNumber) {
    var pageId = 'page' + pageNumber;
    var selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        // Hide all pages
        var pages = document.querySelectorAll('.page');
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = 'none';
        }

        // Show the selected page
        selectedPage.style.display = 'flex';
        currentPage = pageNumber; // Update the currentPage variable
    } else {
        console.error('Page not found: ' + pageId);
    }
    
    updateNavBackButton()
}

var chosenIEAppearance = 0;
var smallerInnerBordersHack = 1;

function setOptions() {
    let isRinFoxFirstRunFinished = false;
    try {
        isRinFoxFirstRunFinished = Services.prefs.getBoolPref("RinFox.parameter.isFirstRunFinished");
    } catch (error) {}

    if (!isRinFoxFirstRunFinished) {
        Services.prefs.setBoolPref('toolkit.legacyUserProfileCustomizations.stylesheets', true);        // Enables chrome themes;
        Services.prefs.setIntPref('browser.display.windows.non_native_menus', 0);                       // Disables non-native menus;
        Services.prefs.setBoolPref('widget.non-native-theme.enabled', false);                           // Disables non-native-looking controls;
        Services.prefs.setBoolPref('browser.tabs.tabmanager.enabled', true);                            // Removes tabs dropdown;
        Services.prefs.setBoolPref('browser.theme.dark-private-windows', false);                        // Disables dark theme in Private window;
        Services.prefs.setBoolPref('nglayout.enable_drag_images', false);                               // Disables thumbnail preview when dragging tab;
        Services.prefs.setIntPref('browser.newtabpage.activity-stream.topSitesRows', 2);                // Enables two rows for the new tab page;
        Services.prefs.setBoolPref('browser.taskbar.previews.enable', true);                            // Enables taskbar tabs previews;
        Services.prefs.setBoolPref('browser.download.always_ask_before_handling_new_types', true);      // Enables legacy download dialog;
        Services.prefs.setIntPref('security.dialog_enable_delay', 0);                                   // Disables OK button delay in the legacy download dialog;
		Services.prefs.setIntPref('browser.tabs.inTitlebar', 0);										// Disable Tabs in Titlebar;

        Services.prefs.setBoolPref('RinFox.parameter.isFirstRunFinished', true)
    }
	
	switch (chosenIEAppearance) {
	case 0:
		// IE7
		Services.prefs.setBoolPref('RinFox.Appearance.IE8', false)
		break;
	case 1:
		// IE8
		Services.prefs.setBoolPref('RinFox.Appearance.IE8', true)
		break;
    }
	
	switch (hideInnerBorders) {
	case 0:
		// Show Inner Borders
		Services.prefs.setBoolPref('RinFox.Option.HideInnerBorders', false)
		break;
	case 1:
		// Hide Inner Borders
		Services.prefs.setBoolPref('RinFox.Option.HideInnerBorders', true)
		break;
    }
	
	switch (smallerInnerBordersHack) {
	case 0:
		// Smaller Inner Borders Hack Enabled
		Services.prefs.setBoolPref('RinFox.Option.SmallerInnerBordersHack', true)
		break;
	case 1:
		// Smaller Inner Borders Hack Disabled
		Services.prefs.setBoolPref('RinFox.Option.SmallerInnerBordersHack', false)
		break;
    }
}

function checkForExpress() {
	let group = document.querySelector("radiogroup");
	let sel = group.querySelector("[selected=\"true\"]").id;

	if (sel == "expressSettings")
	{
		hideInnerBorders = 0;
		smallerInnerBordersHack = 0;
		
		showPage(5);
	}
	else if (sel == "customSettings")
	{
		showPage(3);
	}
}

showPage(currentPage);
updateNavBackButton();

var restartNow = document.getElementById('restartNow');
restartNow.addEventListener("click", function() {
	setOptions();
	
    _ucUtils.restart(true);
}); 

var restartLater = document.getElementById('restartLater');
restartLater.addEventListener("click", function() {
	setOptions();
	
    window.close();
}); 