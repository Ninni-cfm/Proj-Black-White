/*****************************************************************************

*/
function switchMode() {

    invertForeAndBackgroundColors("dark-mode");

}




function invertForeAndBackgroundColors(className) {

    // get all elements with the given class name
    let x = document.getElementsByClassName(className);

    // invert colors for each element
    for (let i = 0; i < x.length; i++) {

        // get the computed style for the element
        var styles = window.getComputedStyle(x[i]);

        // apply the inverted colors
        x[i].style.color = invertColor(styles.color);
        x[i].style.backgroundColor = invertColor(styles.backgroundColor);
        x[i].style.borderColor = invertColor(styles.borderColor);
    }
}


function invertColor(rgb) {

    // are the color channels sparated by comma or space?
    var sep = rgb.indexOf(",") > -1 ? "," : " ";

    // remove everything but the color values from the string [rgb(]r, g, b[)]
    rgb = rgb.substr(rgb.indexOf("(") + 1).split(")")[0].split(sep);

    let rgbInverted = "rgb(" +
        (255 - parseInt(rgb[0])) + ", " +
        (255 - parseInt(rgb[1])) + ", " +
        (255 - parseInt(rgb[2])) + ")";

    // debugLog("rgbInverted = " + rgbInverted);
    return rgbInverted;
}

function debugLog(...params) {

    // return;
    console.log(params);
}
