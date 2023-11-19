// ==UserScript==
// @name			Move Bookmarks Bar
// @description 	Moves the Bookmarks Bar to the top of the Tabs Bar
// @author			Travis
// ==/UserScript==

function moveBookmarksBar() {
	document.getElementById("titlebar").insertBefore(document.getElementById("PersonalToolbar"), document.getElementById("TabsToolbar"));
}