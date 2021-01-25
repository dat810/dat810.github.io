// My Greeting Message :)
(function() {
    console.log("Hello, strangers!")
})();

// START (Open / close side nav)
var sideNav = document.getElementById("sideNav");
/**
 * A simple function for opening the side navigation.
 */
function openSideNav() {
    sideNav.style.width = "250px";
    sideNav.style.borderLeft = "4px solid var(--white-0)";
}

/**
 * A simple function for closing the side navigation.
 */
function closeSideNav() {
    sideNav.style.width = "0";
    sideNav.style.borderLeft = "0px solid var(--white-0)";
}

// END (Open / close side nav)

// Hide header when scrolling down, show when up
var prevScroll = window.pageYOffset;
window.onscroll = function() {
    var crntScroll = window.pageYOffset;
    var topNav = document.getElementById("topNav");
    if (prevScroll > crntScroll) {
        topNav.style.top = "0";
    } else {
        topNav.style.top = "-68px";
    }
    prevScroll = crntScroll;
}

// Toggle accordions
var acc = document.getElementsByClassName("accordion");
for (var el = 0; el < acc.length; el++) {
    acc[el].addEventListener("click", function() { 
        /* Accordion buttons' state toggle without the 
        traditional toggle() method */
        if (this.className === "accordion") {
            this.className += " acc-on";
        } else {
            this.className = "accordion";
        }
        // Panel toggle. Same as above.
        var accTxt = this.nextElementSibling;
        if (accTxt.className === "accordion-txt") {
            accTxt.className += " acc-txt-on";
        } else {
            accTxt.className = "accordion-txt";
        }
    });
}
