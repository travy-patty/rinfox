// ==UserScript==
// @name			rinFox :: Layout
// @description 	Creates the layout for rinFox
// @author			travy-patty
// @github          https://github.com/travy-patty
// @include			main
// @loadOrder       0
// @ignorecache
// ==/UserScript==

let g_RinfoxLayoutManager;

{
    var { LocaleUtils, waitForElement, setAttributes } = ChromeUtils.importESModule("chrome://userscripts/content/rinfox_utils.sys.mjs");
    waitForElement = waitForElement.bind(window);

    class RinfoxLayoutManager {
        static alreadyRan = false;

        _navToolboxElem = document.getElementById("navigator-toolbox");
        _browserElem = document.getElementById("browser");
        _navBarElem = document.getElementById("nav-bar");
        _personalToolbarElem = document.getElementById("PersonalToolbar");
        _tabsToolbar = document.getElementById("TabsToolbar");

        get forwardButtonFragment() {
            return `
                <menupopup />
                <toolbarbutton id="forward-button-toolbarbutton" command="Browser:ForwardOrForwardDuplicate" tooltip="forward-button-tooltip" context="backForwardMenu" />
                <toolbarbutton id="forward-button-dropdown" class="toolbarbutton-menu-dropdown" />
            `;
        }
        
        async init() {
            if (this.alreadyRan)
            {
                return;
            }

            await new Promise(resolve => {
                let delayedStartupObserver = (aSubject, aTopic, aData) => {
                    Services.obs.removeObserver(delayedStartupObserver, "browser-delayed-startup-finished");
                    resolve();
                };
                Services.obs.addObserver(delayedStartupObserver, "browser-delayed-startup-finished");
            });

            document.body.insertBefore(this._navBarElem, this._browserElem);
            document.getElementById("tabbrowser-tabbox").insertBefore(this._navToolboxElem, document.getElementById("tabbrowser-tabbox").firstChild);
            document.getElementById("titlebar").insertBefore(this._personalToolbarElem, this._tabsToolbar);

            this._initForwardButton();

            this.alreadyRan = true;
        }

        _initForwardButton() {
            let backButton = document.getElementById("back-button");
            let forwardButton = document.getElementById("forward-button");
            let menu = document.getElementById("backForwardMenu");

            forwardButton.innerHTML = "";
            forwardButton.appendChild(MozXULElement.parseXULToFragment(this.forwardButtonFragment));
            
            let forwardButtonDropdown = document.getElementById("forward-button-dropdown");

            forwardButtonDropdown.addEventListener("mousedown", (e) => {
                if (!forwardButton.hasAttribute("disabled")) {

                    menu.openPopup(backButton, "after_start");

                    forwardButton.setAttribute("open", "true");
                }
            });

            menu.addEventListener("popuphidden", (e) => {
                forwardButton.removeAttribute("open");
            });

            forwardButtonDropdown.addEventListener("mouseenter", (e) => {
                forwardButton.setAttribute("dropdown-hover", "true");
            });

            forwardButtonDropdown.addEventListener("mouseout", (e) => {
                forwardButton.removeAttribute("dropdown-hover");
            });
        }
    }

    g_RinfoxLayoutManager = new RinfoxLayoutManager;
    g_RinfoxLayoutManager.init();
}