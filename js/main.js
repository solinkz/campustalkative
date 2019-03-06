$(document).ready(function(){

    // limit news-card text
    $(".news-card-text").each(function (i) {
        
        len = $(this).text().length;
        if (len > 300) {
            $(this).text($(this).text().substr(0, 300) + '...');
            $(this).parent().next().find('.more').show();
        }
    });

    $('.news-card .more').click(function (e) {
        e.preventDefaul();
        $(this).parent().prev().find('.news-card-text').toggleClass('news-card-text news-card-text--full');
    })
    // toggle liked icon on click

    $(".like").on('click', function(){
        $(this).find(".material-icons").toggleClass('liked');
    });


    // word counter on compose
    (
        function composeCounter() {
            var composer = {
                limit: 1000,
                count: {
                    box : $('.compose-count'), 
                    display : $('.word-count')
                },
                warning: function () {
                    // 20% of the compose limit
                    return (this.limit - ( (3 / 100) * this.limit) ) .toFixed(0);
                },
                area: $('#compose-area')
            }

            // alert(data.warning());

            //  update the data limit on the view
            $('.word-length').text(composer.limit);

            // update data-limit on the textarea
            composer.area.attr('maxlength', composer.limit);

            composer.area.keyup(function(){
                let composed = $(this).val();
                let composedLength = composed.length;


                // increments the counter on field
                composer.count.display.text(composedLength);

                if(composedLength >= composer.warning()){
                    composer.count.box.addClass('text-danger');
                }else{
                    composer.count.box.removeClass('text-danger');
                }
               
           });
        }
    )();



    // SEARCH FUNCTIONALITIES

    var search = {
        toggle  : $('.search-toggle'),
        close   : $('.search-close'),
        form    : $('.nav-search'),
        formEl  : $('.nav-search-form'),
        container : $('#search'),
        query   : $('.search-query-val')
        
    }

    search.toggle.click(function(){
        search.form.css('display','flex');
    });


    // click close
    search.close.click(function(){
        search.form.css('display','none'),
        search.container.fadeOut(),
        search.formEl.val(null),
        search.query.text('');
        // clearInterval(search.queryCheck);
        
    });

    search.formEl.click(function(){

        search.container.fadeIn();

    });

    search.formEl.on('keyup touchend', function () {
        let val = search.formEl.val();
        search.query.text(val);
    })

  
});