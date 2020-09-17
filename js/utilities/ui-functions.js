/* ------------------ SHOW ONLY ONE DROP-DOWN MENU ------------------ */

var a;
function showHideStroke() {
    if (a == 1) {
        document.getElementById("stroke-items").style.display = "none";
        return a = 0;
    } else {
        document.getElementById("stroke-items").style.display = "block";
        document.getElementById("shape-items").style.display = "none";
        document.getElementById("tool-items").style.display = "none";
        return a = 1;
    }
}

function showHideShape() {
    if (a == 1) {
        document.getElementById("shape-items").style.display = "none";
        return a = 0;
    } else {
        document.getElementById("shape-items").style.display = "block";
        document.getElementById("stroke-items").style.display = "none";
        document.getElementById("tool-items").style.display = "none";
        return a = 1;
    }
}

function showHideTools() {
    if (a == 1) {
        document.getElementById("tool-items").style.display = "none";
        return a = 0;
    } else {
        document.getElementById("tool-items").style.display = "block";
        document.getElementById("stroke-items").style.display = "none";
        document.getElementById("shape-items").style.display = "none";
        return a = 1;
    }
}

/* ------------------ DARK & PARTY MODES ------------------ */

function partyMode() {
    var element = document.body;
    element.classList.toggle("bodyPartyMode");
}

function showHideParrot() {
    if (a == 1) {
        document.getElementById("parrotContainer").style.display = "none";
        return a = 0;
    } else {
        document.getElementById("parrotContainer").style.display = "block";
        return a = 1;
    }
}

function bwLogo(){
    var element = document.getElementById("logo");
    element.classList.toggle("h1BWToggle");
}

function darkMode(){
    var element = document.body;
    element.classList.toggle("bodyDarkMode");
}