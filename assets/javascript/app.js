// Add Clock

// Scroll functions for menu
$(document).ready(function () {
    $("#view-work").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".portfolio").offset().top
        }, 'slow');
    });

    // Menu Event Handlers
    $(".menu").on("click", function() {
        document.getElementById("toggler").checked = false;
    });
    $("#menu-home").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".showcase").offset().top
        }, 'slow');
    });
    $("#menu-about").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 'slow');
    });
    $("#menu-portfolio").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".portfolio").offset().top
        }, 'slow');
    });
    $("#menu-contact").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".contact").offset().top
        }, 'slow');
    });
});