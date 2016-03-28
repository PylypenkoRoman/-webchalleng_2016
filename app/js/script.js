$(document).ready(function(){
    $('a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});

$(document).ready(function(){
    function showCategory(categoryId) {
        var $allDivs = $('.works__item[data-postcat]');
        var $selectedDiv = $allDivs.filter('[data-postcat='+categoryId+']');

        $allDivs.hide();
        $selectedDiv.show();
    }

    function showAll() {
        var $allDivs = $('.works__item');
        $allDivs.show();
    }

    $(document).on('click', '.works__filter-item', function(event) {
        $(this).addClass("works__filter-item_active");
        $(this).siblings(".works__filter-item").removeClass("works__filter-item_active");
        var categoryId = event.target.getAttribute('data-category');

        if (categoryId == "all"){
            showAll();
        } else{
            showCategory(categoryId);
        }

        event.preventDefault();
    });

    $("#nav-btn").click(function(){
        $(this).toggleClass("nav-btn_active")
        $("#nav").toggleClass("nav_active")
    });

    $('#slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        autoplay: true
    });

});