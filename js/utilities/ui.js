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