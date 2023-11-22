// ==UserScript==
// @name			RinFox Wizard
// @description 	Opens the RinFox Wizard on first-time installs
// @author			Travis
// @include			main
// ==/UserScript==

function openRinFoxWizardWindow(verifyFirstRun) {
    if (verifyFirstRun) {
        let isRinFoxFirstRunFinished = false;
        try {
            isRinFoxFirstRunFinished = Services.prefs.getBoolPref("RinFox.parameter.isFirstRunFinished");
        } catch (error) {}
        
        if (!isRinFoxFirstRunFinished) {
            Services.prefs.setBoolPref('RinFox.parameter.isFirstRunFinished', false)

            launchRinFoxWizard();
        }
    } else {
        launchRinFoxWizard();
    }
}

function launchRinFoxWizard() {
    var features = "chrome,centerscreen,resizeable=no,dependent,modal";
    window.openDialog('chrome://userchrome/content/windows/rinFoxWizard/rinFoxWizard.xhtml', "Set Up RinFox", features); 
};