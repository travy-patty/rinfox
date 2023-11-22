function checkSmallBorderHackStatus() {
    try {
        return Services.prefs.getBoolPref("RinFox.Option.SmallerInnerBordersHack");
    } catch (error) {
        return false;
    }
}

const isSmallBorderBool = checkSmallBorderHackStatus();

function applySmallBorderBack() {
	if (isSmallBorderBool) {
		document.documentElement.setAttribute('chromemargin', '2,2,2,2');
	}
}