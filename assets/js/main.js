$(function() {
    var menu = $('.to_open');
    var drop = $('.dropdown');
    var title = $('.nav_right a.to_open');
    
    menu.each(function (i, element) {
        // element == this
        $(this).hover(function () { 
            $(title[i]).css('color', 'black');
            $(drop[i]).css('opacity', '1');
        }, function() {
            $(title[i]).css('color', 'grey');
            $(drop[i]).css('opacity', '0');
        });
    });
});