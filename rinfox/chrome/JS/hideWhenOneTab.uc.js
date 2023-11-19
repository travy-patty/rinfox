const tabBarItems = ["#alltabs-button", "#tiptab_william_wong-BAP"]; // DOM Elements that will be hidden when there's one tab
const tabBarObserver = new MutationObserver(hideTabBarItems);
const tabsToolbar = document.getElementById("TabsToolbar");

if (tabsToolbar) {
	tabBarObserver.observe(tabsToolbar, { childList: true, subtree: true });
}

function hideTabBarItems() {
	const tabCount = gBrowser.tabs.length;

	tabBarItems.forEach((item) => {
		const element = document.querySelector(item);
		if (tabCount <= 1) {
			element.style.display = "none";
		}
		else {
			element.style.display = "";
		}
	});
}