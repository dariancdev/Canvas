/* ------------------ SHOW ONLY ONE DROP-DOWN MENU ------------------ */
//changed the drop down menu so it works on one click instead of two
let a;
let strokeItems =  document.getElementById("stroke-items")
let shapeItems =  document.getElementById("shape-items")
let toolItems =  document.getElementById("tool-items")
let modeItems = document.getElementById("mode-items")

function showHideStroke() {
    if (a === 1 && strokeItems.style.display === "block") {
        strokeItems.style.display = "none";
        a = 0;
    } else {
        strokeItems.style.display = "block";
        shapeItems.style.display = "none";
        toolItems.style.display = "none";
        modeItems.style.display = "none";
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
        modeItems.style.display = "none";
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
        modeItems.style.display = "none";
        a = 1;
    }
}

function showHideMode() {
    if (a === 1 && modeItems.style.display === "block") {
        modeItems.style.display = "none";
        a = 0;
    } else {
        modeItems.style.display = "block";
        toolItems.style.display = "none";
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

let parrotContainer = document.getElementById("parrotContainer")

function showHideParrot() {
    if (a === 1 && parrotContainer.style.display === "block") {
        parrotContainer.style.display = "none";
        a = 0;
    } else {
        parrotContainer.style.display = "block";
        a = 1;
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