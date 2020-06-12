//mobile navigation 
function appear() {
    var hamburger = document.getElementById("icon-hamburger");
    var close = document.getElementById("icon-close");
    var navArea = document.getElementById("nav-area");
    var navHead = document.getElementById("nav-head");
    var logo = document.getElementById("logo");
    var logoc = document.getElementById("logoc");
    var logoi = document.getElementById("logoi");
    logo.style.fill = "white";
    logoc.style.fill = "white";
    logoi.style.fill = "hsl(229, 31%, 21%)";
    hamburger.style.display = "none";
    close.style.display = "block";
    navArea.style.display = "block";
    navArea.style.backgroundColor = "hsl(229, 31%, 21%)";
    navHead.style.backgroundColor = "hsl(229, 31%, 21%)";
}
function disappear() {
    var hamburger = document.getElementById("icon-hamburger");
    var close = document.getElementById("icon-close");
    var navArea = document.getElementById("nav-area");
    var navHead = document.getElementById("nav-head");
    var logo = document.getElementById("logo");
    var logoc = document.getElementById("logoc");
    var logoi = document.getElementById("logoi");
    logo.style.fill = "#242A45";
    logoc.style.fill = "#5267DF";
    logoi.style.fill = "white";
    hamburger.style.display = "block";
    close.style.display = "none";
    navArea.style.display = "none";
    navArea.style.backgroundColor = "transparent";
    navHead.style.backgroundColor = "transparent";
}
//Features
function bookmarkF() {
    var feature1 = document.getElementById("bookmark");
    var feature2 = document.getElementById("searching");
    var feature3 = document.getElementById("sharing");
    var border1 = document.getElementById("bookmarkButton");
    var border2 = document.getElementById("searchButton");
    var border3 = document.getElementById("shareButton");
    feature1.style.display = "flex";
    feature2.style.display = "none";
    feature3.style.display = "none";
    border1.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    border2.style.borderBottom = "none";
    border3.style.borderBottom = "none";
}
function searchingF() {
    var feature1 = document.getElementById("bookmark");
    var feature2 = document.getElementById("searching");
    var feature3 = document.getElementById("sharing");
    var border1 = document.getElementById("bookmarkButton");
    var border2 = document.getElementById("searchButton");
    var border3 = document.getElementById("shareButton");
    feature1.style.display = "none";
    feature2.style.display = "flex";
    feature3.style.display = "none";
    border1.style.borderBottom = "none";
    border2.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    border3.style.borderBottom = "none";
}
function sharingF() {
    var feature1 = document.getElementById("bookmark");
    var feature2 = document.getElementById("searching");
    var feature3 = document.getElementById("sharing");
    var border1 = document.getElementById("bookmarkButton");
    var border2 = document.getElementById("searchButton");
    var border3 = document.getElementById("shareButton");
    feature1.style.display = "none";
    feature2.style.display = "none";
    feature3.style.display = "flex";
    border1.style.borderBottom = "none";
    border2.style.borderBottom = "none";
    border3.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
}

function borderN() {
    var test = document.getElementById("collapse");
    var testClass = test.collapsed;

    switch (testClass) {
        case "collapsed":
            test.style.borderBottom = "none";
            break;
        default:
            test.style.borderBottom = "1px solid #dee2e6";
    }
}