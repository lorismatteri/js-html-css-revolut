$(function() {
    var menu = $('.to_open');
    var drop = $('.dropdown');
    
    menu.each(function (i, element) {
        // element == this
        $(this).hover(function () { 
            $(menu[i]).css('color', 'black');
            $(drop[i]).css('opacity', '1');
        }, function() {
            $(menu[i]).css('color', 'grey');
            $(drop[i]).css('opacity', '0');
        });
    });
});