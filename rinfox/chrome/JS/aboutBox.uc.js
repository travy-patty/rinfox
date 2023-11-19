// ==UserScript==
// @include			chrome://browser/content/aboutDialog.xhtml
// @exclude			main
// ==/UserScript==

(function () {

var aboutDialog = document.getElementById("aboutDialog");
var aboutDialogContainer = document.getElementById("aboutDialogContainer");

function setAttributes(element, attributes) {
		Object.keys(attributes).forEach(attr => {
		element.setAttribute(attr, attributes[attr]);
	});
}

// Title of About Window
var aboutDialogTitle = "About Internet Explorer";

// Properly check if the user chose Internet Explorer 7 or Internet Explorer 8 appearance
//
// We need to put these "getBool/Int/StringPref" in a try and catch block or
// Firefox will throw an error if the bool was not yet created by the user (meaning
// the bool is nonexistent in about:config) causing the code to stop, it's the reason why on
// fresh installs the aboutDialog would look "half-themed", displaying Firefox icon and
// information but with a white background. Only userContent was working.
// - Bruno
function checkIE8Status() {
    try {
        return Services.prefs.getBoolPref("RinFox.Appearance.IE8");
    } catch (error) {
        return false;
    }
}

const isIE8Bool = checkIE8Status();

aboutDialog.setAttribute("title", ""+aboutDialogTitle+"");

// createElement because xhtml is dogshit 

// Windows Internet Explorer Banner
const aboutboxbanner = document.createElement("img");
let bannersrc;
if (isIE8Bool) {
	bannersrc = "chrome://userchrome/content/images/banner-ie8.png";
} else {
	bannersrc = "chrome://userchrome/content/images/banner.png";
}
const aboutboxbannerattributes = {
	"class": "aboutBoxBanner",
	"src": ""+bannersrc+"",
	"width": "314px",
	"height": "76px"
};

// Internet Explorer Information
const aboutboxinfolist = document.createElement('ul');
let aboutboxinfoversion;
let aboutboxinfostregnth;
let aboutboxinfoid;
let aboutboxinfoupdate;
if (isIE8Bool) {
	aboutboxinfoversion = "Version: 8.0.6001.18702";
	aboutboxinfostregnth = "Cipher Stregnth: 256-bit";
	aboutboxinfoid = "Product ID: 01404-014-0000025-714000";
	aboutboxinfoupdate = "Update Versions: 0";
} else {
	aboutboxinfoversion = "Version: 7.0.6002.18005";
	aboutboxinfostregnth = "Cipher Stregnth: 256-bit";
	aboutboxinfoid = "Product ID: 89580-014-0000025-71495";
	aboutboxinfoupdate = "Update Versions:0";
}
const aboutboxinfo = [
	""+aboutboxinfoversion+"", 
	""+aboutboxinfostregnth+"", 
	""+aboutboxinfoid+"", 
	""+aboutboxinfoupdate+""
];
	
for (i = 0; i <= aboutboxinfo.length - 1; i++) {
	const li = document.createElement('li');
	li.innerHTML = aboutboxinfo[i];
	aboutboxinfolist.appendChild(li);
};

// Text Area Legal Notice
const legalnotice = document.createElement('textarea');
const legalnoticestring = document.createTextNode("Warning: This computer program is protected by copyright law and international treaties. Unauthorized reproduction or distribution of this program, or any portion of it, may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under the law.");
legalnotice.appendChild(legalnoticestring);


// Windows Flag
const windowsflag = document.createElement("img");
const windowsflagattributes = {
	"class": "windowsFlag",
	"src": "chrome://userchrome/content/images/windows-flag.png",
	"width": "38px",
	"height": "38px"
};

// Copyright link
const copyrightlink = document.createElement("a");
let copyrightlinktext;
if (isIE8Bool) {
	copyrightLinkText = "©2009 Microsoft Corporation";
} else {
	copyrightLinkText = "©2006 Microsoft Corporation";
}
var copyrightLinkNode = document.createTextNode(copyrightLinkText);
copyrightlink.appendChild(copyrightLinkNode);
copyrightlink.addEventListener("click", (event) => {
	_ucUtils.loadURI(window,{
		url: "http://go.microsoft.com/fwlink/?LinkId=54758",
		where: "window"
	});
});

// Close Button
const closebutton = document.createElement("button");
const closebuttontext = document.createTextNode("OK");
closebutton.appendChild(closebuttontext);
closebutton.addEventListener("click", (event) => { window.close() });

// Set Attributes
setAttributes(aboutboxbanner, aboutboxbannerattributes);
setAttributes(windowsflag, windowsflagattributes);
aboutboxinfolist.setAttribute("class", "aboutBoxInfoList");
legalnotice.setAttribute("class", "legalNotice");
closebutton.setAttribute("class", "closeButton");
copyrightlink.setAttribute("class", "copyrightLink");

const footercontainer = document.createElement("div");
footercontainer.setAttribute("class", "footerContainer");

// Clear HTML and append new HTML
aboutDialogContainer.innerHTML = '';
aboutDialogContainer.appendChild(aboutboxbanner);
aboutDialogContainer.appendChild(aboutboxinfolist);
aboutDialogContainer.appendChild(legalnotice);
aboutDialogContainer.appendChild(footercontainer);
footercontainer.appendChild(windowsflag);
footercontainer.appendChild(copyrightlink);
footercontainer.appendChild(closebutton);

})();