var MovePersonalBars = {
  init: function() {
	document.getElementById("titlebar").insertBefore(document.getElementById("PersonalToolbar"), document.getElementById("TabsToolbar"));
	
  }

}

document.addEventListener("DOMContentLoaded", MovePersonalBars.init(), false);