function checkSmallBorderHackStatus() {
    try {
        return Services.prefs.getBoolPref("RinFox.Option.SmallerInnerBordersHack");
    } catch (error) {
        return false;
    }
}

const isSmallBorderBool = checkSmallBorderHackStatus();

function applySmallBorderHack() {
	if (isSmallBorderBool) {
		document.documentElement.setAttribute('chromemargin', '2,2,2,2');
	}
}