$(document).ready(function () {

    /* When the user scrolls down, hide the navbar.
    When the user scrolls up, show the navbar */

    var prevScrollPos = window.pageYOffset;
    var viewportWidth = $(window).width();

    window.onscroll = function () {

        var currentScrollPos = window.pageYOffset;
        
        if (prevScrollPos > currentScrollPos && viewportWidth > 768) {
            $("#navBar").css("top", "0");
        }
        else if (prevScrollPos < currentScrollPos && viewportWidth > 768) {
            $("#navBar").css("top", "-85px");
        }
        else if (prevScrollPos > currentScrollPos && viewportWidth < 769) {
            $("#navBar").css("top", "0");
        }
        else {
            $("#navBar").css("top", "-127px");
        }
        prevScrollPos = currentScrollPos;

    };

});