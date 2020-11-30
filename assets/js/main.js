$(function() {
    var menu = $('.to_open');

    menu.each(function () { 
        $(this).mouseenter(function () { 
            $('.nav_right a').css('color', 'black');
            $('.dropdown').css('opacity', '1');
        });
        $(this).mouseleave(function () { 
            $('.nav_right a').css('color', 'grey');
            $('.dropdown').css('opacity', '0');
        });
    });
});

