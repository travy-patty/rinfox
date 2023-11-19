function launchBeautyFoxWizard() {
    var features = "chrome,centerscreen,resizeable=no,dependent,modal";
    window.openDialog('chrome://userchrome/content/windows/rinFoxWizard/rinFoxWizard.xhtml', "Set Up RinFox", features); 
}

launchBeautyFoxWizard()