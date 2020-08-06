// This function makes all elements with the .card class type, have their columns match height, so should one
// card contain more text than the next card, both cards will still be the same height
// Found help for this at:
// https://scotch.io/bar-talk/different-tricks-on-how-to-make-bootstrap-columns-all-the-same-height

$(function() {
    $('.card').matchHeight();
});

// jQuery allows for the navbar to collapse when clicking outside of the navbar,
// rather than just on navbar-toggler button click
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

// The jQuery allows for detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    let last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

