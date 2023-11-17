(function() {

try {
  Components.utils.import("resource:///modules/CustomizableUI.jsm");
  var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
  var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
  var appversion = parseInt(Services.appinfo.version);
  
  var button_label = "Help";
 
  CustomizableUI.createWidget({
	id: "help-button", // button id
	defaultArea: CustomizableUI.AREA_TABSTRIP,
	removable: true,
	label: button_label, // button title
	tooltiptext: button_label, // tooltip title
	onClick: function(event) {
	  if(event.button=='0') {
		openHelpLink('firefox-help');
	  }
	},
	onCreated: function(button) {
	  return button;
	}
		
  });
  
} catch (e) {
	Components.utils.reportError(e);
};

})();