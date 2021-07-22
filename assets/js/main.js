/*****************************************************************************

*/
function switchModetest() {

    var styles = window.getComputedStyle(document.body);

    var fgColor = styles.color;
    var bgColor = styles.backgroundColor;

    fgColor = invertColor(fgColor);
    bgColor = invertColor(bgColor);

    document.body.style.color = fgColor;
    document.body.style.backgroundColor = bgColor;
}


function switchMode() {

    let x = document.getElementsByClassName("dark-mode");

    for (let i = 0; i < x.length; i++) {

        var styles = window.getComputedStyle(x[i]);

        let fgColor = styles.color;
        let bgColor = styles.backgroundColor;
        let bcColor = styles.borderColor;


        fgColor = invertColor(fgColor);
        bgColor = invertColor(bgColor);
        bcColor = invertColor(bcColor);

        x[i].style.color = fgColor;
        x[i].style.backgroundColor = bgColor;
        x[i].style.borderColor = bcColor;
    }
}

function invertColor(rgb) {

    var sep = rgb.indexOf(",") > -1 ? "," : " ";
    console.log("'" + sep + "'");

    rgb = rgb.substr(rgb.indexOf("(") + 1).split(")")[0].split(sep);

    for (let i = 0; i < rgb.length; i++) {
        console.log("rgb[" + i + "] =", rgb[i]);
    }

    let rgbI = "rgb(" +
        (255 - parseInt(rgb[0])) + ", " +
        (255 - parseInt(rgb[1])) + ", " +
        (255 - parseInt(rgb[2])) + ")";

    console.log(rgbI);
    return rgbI;
}
