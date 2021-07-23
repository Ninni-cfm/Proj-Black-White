/*****************************************************************************
    functions to switch the website into a "dark mode" and vice versa
*/
function switchMode() {

    invertForeAndBackgroundColors("dark-mode");

    // some elements with '-webkit-text-stroke': 4px black;'
    // disabled until we know how to access the colors of this prpoperty
    // invertForeAndBackgroundColors("dark-mode-span");

    let isDarkMode = document.body.style.backgroundColor == "rgb(0, 0, 0)" ? true : false;
    debugLog("isDarkMode:", isDarkMode);

    if (isDarkMode) {
        document.getElementById("img-1").src = 'assets/darkmode-img/image_12.jpg';
        document.getElementById("img-2").src = 'assets/darkmode-img/image_4.jpg';
        document.getElementById("img-3").src = 'assets/darkmode-img/image_5.jpg';
        document.getElementById("project-1").src = 'assets/darkmode-img/project-1.jpg';
        document.getElementById("project-2").src = 'assets/darkmode-img/project-2.jpg';
        document.getElementById("project-3").src = 'assets/darkmode-img/project-3.jpg';
        document.getElementById("project-4").src = 'assets/darkmode-img/project-4.jpg';
        document.getElementById("project-5").src = 'assets/darkmode-img/project-5.jpg';
    } else {
        document.getElementById("img-1").src = 'assets/img/image_12.png';
        document.getElementById("img-2").src = 'assets/img/image_4.png';
        document.getElementById("img-3").src = 'assets/img/image_5.jpg';
        document.getElementById("project-1").src = 'assets/img/project-1.png';
        document.getElementById("project-2").src = 'assets/img/project-2.png';
        document.getElementById("project-3").src = 'assets/img/project-3.png';
        document.getElementById("project-4").src = 'assets/img/project-4.png';
        document.getElementById("project-5").src = 'assets/img/project-5.png';
    }
}


function invertForeAndBackgroundColors(className) {

    // get all elements with the given class name
    let x = document.getElementsByClassName(className);
    debugLog("found", x.length, "Elements with class name '" + className + "'.");

    // invert colors for each element
    for (let i = 0; i < x.length; i++) {

        // get the computed style for the element
        var styles = window.getComputedStyle(x[i]);

        // apply the inverted colors
        x[i].style.color = invertColor(styles.color);
        x[i].style.backgroundColor = invertColor(styles.backgroundColor);

        // todo: extend function invertColor() to work with multiple colors!
        // borderColor is special, it contains 4 rgb values
        // x[i].style.borderColor = invertColor(styles.borderColor);
    }
}


function invertColor(rgb) {

    // are the color channels sparated by comma or space?
    var sep = rgb.indexOf(",") > -1 ? "," : " ";

    // remove everything but the color values from the string [rgb(]r, g, b[)]
    rgb = rgb.substr(rgb.indexOf("(") + 1).split(")")[0].split(sep);

    // build the new color property: 
    //  if an alpha channel exists: rgba( r, g, b, a)
    //  if no alpha channel exists: rgb( r, g, b)
    let rgbInverted = rgb.length == 4 ? "rgba(" : "rgb(";

    // append the  inverted color channels
    rgbInverted += (255 - parseInt(rgb[0])) + ", ";
    rgbInverted += (255 - parseInt(rgb[1])) + ", ";
    rgbInverted += (255 - parseInt(rgb[2]));

    // the alpha channel must not be inverted!
    if (rgb.length == 4) rgbInverted += ", " + parseInt(rgb[3]);

    // final parenthesis
    rgbInverted += ")";

    // return the inverted color property
    return rgbInverted;
}

// if you don't need any more debug output in the console window, 
// just comment the console.log command ;-)
function debugLog(...params) {
    console.log(params);
}
