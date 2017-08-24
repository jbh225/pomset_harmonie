function myFunction() {
    var x = document.getElementById("navy");
    if (x.className === "navbar-default") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
