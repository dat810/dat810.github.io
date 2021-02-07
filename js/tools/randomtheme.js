// Dropdown navigation
function toggleDropdown() {
    document.getElementById("ddcontent").classList.toggle("nav-active");
}

// Random theme color
var color = Math.floor(Math.random() * 361);
var theme = document.querySelector(":root");
theme.style.setProperty("--theme", color);

// Random background gradient on refresh
var html = document.getElementsByTagName("html")[0];
html.style.backgroundImage = 
"linear-gradient(to bottom, hsl(var(--theme), 100%, 50%), hsl(calc(var(--theme) + " + 
Math.floor(Math.random() * 181 + 90) + "), 100%, 50%))";

// A button for random theme color
function randomTheme() {
    let color = Math.floor(Math.random() * 361);
    theme.style.setProperty("--theme", color);
    html.style.backgroundImage = 
    "linear-gradient(to bottom, hsl(var(--theme), 100%, 50%), hsl(calc(var(--theme) + " + 
    Math.floor(Math.random() * 181 + 90) + "), 100%, 50%))";
}

// Auto-footer
var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;