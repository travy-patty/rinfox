// ==UserScript==
// @name			Favicon In UrlBar
// @description 	Adds Favicon of the current website to the UrlBar
// @author			Travis
// @include			main
// ==/UserScript==

var default_favicon = 'chrome://userchrome/content/images/ie_page.png';

var FaviconInUrlbar = {
 init: function() {
   try {
	   
	var favimginurlbar = document.createElement("img");
	favimginurlbar.setAttribute("id","favimginurlbar");  
	
	document.getElementById('urlbar-input-container').insertBefore(favimginurlbar, document.getElementById('identity-box'));

	document.addEventListener("TabAttrModified", updateIcon, false);
	document.addEventListener('TabSelect', updateIcon, false);
	document.addEventListener('TabOpen', updateIcon, false);
	document.addEventListener('TabClose', updateIcon, false);
	document.addEventListener('load', updateIcon, false);
	updateIcon();


	function updateIcon() {
		
	 setTimeout(function(){ // timeout fixes wrong icon detection in some cases
	  
	  var favicon_in_urlbar = gBrowser.selectedTab.image;
	  
	  // if current tab offers no icon, use selected icon (icon_for_pages_without_favicon)
	  if(!gBrowser.selectedTab.image || gBrowser.selectedTab.image == null)
		if(!default_favicon) favicon_in_urlbar = default_favicon;
		  else favicon_in_urlbar = default_favicon;
		  
	  document.querySelector('#favimginurlbar').setAttribute("src", ""+favicon_in_urlbar+"");
	  
	 },1);

	}

  } catch(e) {}
 }
};

// initiate script after DOM/browser content is loaded
document.addEventListener("DOMContentLoaded", FaviconInUrlbar.init(), false);
