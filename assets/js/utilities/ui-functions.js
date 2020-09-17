/* ------------------ SHOW ONLY ONE DROP-DOWN MENU ------------------ */
//changed the drop down menu so it works on one click instead of two
let a;
let strokeItems =  document.getElementById("stroke-items")
let shapeItems =  document.getElementById("shape-items")
let toolItems =  document.getElementById("tool-items")

function showHideStroke() {
    if (a === 1 && strokeItems.style.display === "block") {
        strokeItems.style.display = "none";
        a = 0;
    } else {
        strokeItems.style.display = "block";
        shapeItems.style.display = "none";
        toolItems.style.display = "none";
        a = 1;
    }
}

function showHideShape() {
    if (a === 1 && shapeItems.style.display === "block") {
        shapeItems.style.display = "none";
        a = 0;
    } else {
        shapeItems.style.display = "block";
        strokeItems.style.display = "none";
        toolItems.style.display = "none";
        a = 1;
    }
}

function showHideTools() {
    if (a === 1 && toolItems.style.display === "block") {
        toolItems.style.display = "none";
        a = 0;
    } else {
        toolItems.style.display = "block";
        strokeItems.style.display = "none";
        shapeItems.style.display = "none";
        a = 1;
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