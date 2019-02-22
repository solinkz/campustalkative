$(document).ready(function(){

    // limit news-card text
    $(".news-card-text").each(function (i) {
        len = $(this).text().length;
        if (len > 300) {
            $(this).text($(this).text().substr(0, 300) + '...');
            $(this).parent().next().find('.more').show();
        }
    });


});