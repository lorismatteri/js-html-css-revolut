$(function() {
    var menu = $('.to_open');

    menu.each(function () { 
        $(this).hover(function () { 
            $('.nav_right a').css('color', 'black');
            $('.dropdown').css('opacity', '1');
        }, function() {
            $('.nav_right a').css('color', 'grey');
            $('.dropdown').css('opacity', '0');
        });
    });
});