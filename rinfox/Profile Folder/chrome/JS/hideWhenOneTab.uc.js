// ==UserScript==
// @name			Hide When One Tab
// @description 	Hides Tip Tab and All Tabs button when there's only one tab
// @author			Travis
// @include			main
// ==/UserScript==

const tabBarItems = ["#alltabs-button", "#tiptab_william_wong-BAP"]; // DOM Elements that will be hidden when there's one tab
const tabBarObserver = new MutationObserver(hideTabBarItems);
const tabsToolbar = document.getElementById("TabsToolbar");

if (tabsToolbar) {
	tabBarObserver.observe(tabsToolbar, { childList: true, subtree: true });
}



function hideTabBarItems() {
	const tabCount = gBrowser.tabs.length;
	
	try {
		tabBarItems.forEach((item) => {
			const element = document.querySelector(item);
			if (tabCount <= 1) {
				element.style.display = "none";
			}
			else {
				element.style.display = "";
			}
		});
    } catch (error) {
        console.log("Failed to hide DOM Elements.");
    }
}