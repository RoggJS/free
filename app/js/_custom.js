$(function() {


//1 фото в ширину, слайдер
    $('.main-header-slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        accessibility: false
    });

//smooth scroll
    $(".navigate-btn").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        $('.hidden-menu').removeClass('show-menu');
        $('.menu-burger').toggleClass('hidden');
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.toggle-button').click(function(){
        $('.menu-burger').toggleClass('hidden');
        $('.hidden-menu').toggleClass('show-menu');
        $('body').toggleClass('no-scroll');
    });



    $(".mobile-show-button").on("click", function (event) {
        event.preventDefault();

        $('.hidden-mobile-gallery').show(300);
        $(this).hide();

    });


//scroll-top
        let element = $('#back-top');
    $(window).scroll(function(){
            element['fade'+ ($(this).scrollTop() > 200 ? 'In': 'Out')](500);
        });


//show more

        var list = $("#portfolioList .portfolio-item-counter");
        var numToShow = 9;
        var button = $("#showMoreButton");
        var numInList = list.length;
        list.hide();
        if (numInList > numToShow) {
            button.show();
        }
        list.slice(0, numToShow).show();
        button.click(function(){
            var showing = list.filter(':visible').length;
            list.slice(showing - 1, showing + numToShow).fadeIn();
            var nowShowing = list.filter(':visible').length;
            if (nowShowing >= numInList) {
                button.hide();
            }
        });



    var list2 = $("#portfolioList2 .portfolio-item-counter");
    var numToShow2 = 4;
    var button2 = $("#showMoreButton2");
    var numInList2 = list2.length;
    list2.hide();
    if (numInList2 > numToShow2) {
        button2.show();
    }
    list2.slice(0, numToShow2).show();
    button2.click(function(){

        var showing2 = list2.filter(':visible').length;
        list2.slice(showing2 - 1, showing2 + numToShow2).fadeIn();
        var nowShowing = list2.filter(':visible').length;
        if (nowShowing >= numInList2) {
            button2.hide();
        }
    });



    $('.parallax-window').parallax({
        mirrorContainer: '.guarantee-section',

    });


    $(document).on('click', '.video-wrapper', function() {
        var $video = $('#video'),
            src = $video.attr('src');
        $('#videoOpacity').opacity(1);
        $('#videoStart').opacity(0);

        $video.attr('src', src + '&autoplay=1');
    });


    let currentItem = $('.part-1').offset().top - 400;
    let destItem = $('.part-2').offset().top - 400;

    $(window).scroll(function (){

        let posY = window.scrollY; // сколько уже прокрутили
        $('.part-3').hide();
        if (posY > currentItem ){
            $('.part-1').addClass('tn_active');
        } else{
            $('.part-1').removeClass('tn_active');
        }
        if ( posY > destItem ){
            $('.part-1').hide();
            $('.part-2').hide();
            $('.part-3').show();
        } else{
            $('.part-1').show();
            $('.part-2').show();
        }


    });







});


