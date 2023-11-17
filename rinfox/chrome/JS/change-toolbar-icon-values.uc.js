var ChangeValues = {
  init: function() {

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('#PanelUI-button').then((elm) => {
	const find = document.getElementById("PanelUI-button");
	const tabtoolbarcustomization = document.getElementById("TabsToolbar-customization-target");
	const findlabel = document.querySelector("#PanelUI-menu-button label.toolbarbutton-text");
	tabtoolbarcustomization.appendChild(find);
	findlabel.setAttribute("value", "Tools");
});

waitForElm('#unified-extensions-button').then((elm) => {
	const addon = document.getElementById("unified-extensions-button");
	const tabtoolbarcustomization = document.getElementById("TabsToolbar-customization-target");
	const addonlabel = document.querySelector("#unified-extensions-button label.toolbarbutton-text");
	tabtoolbarcustomization.appendChild(addon);
	addonlabel.setAttribute("value", "Add-ons");
});

setTimeout(function () {
	waitForElm('#searchbar').then((elm) => {
		const searchplaceholder = document.querySelector(".searchbar-textbox");
		searchplaceholder.setAttribute("placeholder", "Live Search");
	});
}, 0);

}
}

document.addEventListener("DOMContentLoaded", ChangeValues.init(), false);