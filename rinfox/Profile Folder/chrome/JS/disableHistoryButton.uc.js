let navBar = document.getElementById("nav-bar");
let backButton = document.getElementById("back-button");
let forwardButton = document.getElementById("forward-button");
let observer = new MutationObserver(disableHistoryButton);

if (backButton) {
	observer.observe(backButton, { attributes: true });
}
else {
	observer.observe(forwardButton, { attributes: true });
}

function disableHistoryButton() {
	let isBackDisabled = backButton.hasAttribute('disabled');
	let isForwardDisabled = forwardButton.hasAttribute('disabled');
	let historyButton = document.getElementById("history-panelmenu");
	
	if (isBackDisabled == true && isForwardDisabled == true) {
		historyButton.setAttribute("disabled", "true");
	}
	else {
		historyButton.removeAttribute("disabled");
	}

}