$(document).ready(function () {

    /* When the user scrolls down, hide the navbar.
    When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    var viewportWidth = $(window).width();
    console.log(`viewport width: ${$(window).width()}`);
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos && viewportWidth > 768) {
            $("#navBar").css("top", "0");
        }
        else {
            $("#navBar").css("top", "-85px");
        }
        if (prevScrollpos > currentScrollPos && viewportWidth <= 768) {
            $("#navBar").css("top", "0");
        }
        else {
            $("#navBar").css("top", "-127px");
        }
        prevScrollpos = currentScrollPos;
    };

});