//button for mobie version
let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body');

if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++){
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
       arrow[i].addEventListener('mouseover', function() {
           subMenu.classList.toggle('open');
           thisArrow.classList.toggle('active');
       });
    }
}else{
    body.classList.add('mouse');
}

$(function () {
//menu fixed
    menu_top = $('.header').offset().top;        // запоминаем положение меню
    $(window).scroll(function () {             // отслеживаем событие прокрутки страницы
        if ($(window).scrollTop() > menu_top) {  // если прокрутка дошла до меню
            if ($('.header').css('position') != 'fixed') {  // проверяем, если меню еще не зафиксировано
                $('.header').css('position', 'fixed');  // задаем блоку меню свойство position = fixed
                $('.header').css('top', '0');           // положение в самом верху
                $('.banner').css('margin-top', '100px'); // делаем отступ, чтобы контент не "скакал" в момент фиксации меню
            }
        } else {                                 // прокрутка страницы обратно вверх достигла место "перехода" меню
            if ($('.header').css('position') == 'fixed') {  // если меню зафиксировано
                $('.header').css('position', '');
                $('.header').css('top', '');
                $('.banner').css('margin-top', '');
            }
        }
    });

//banner slider  
var $status = $('.banner__slider-content__numbering-slide');
/* var $statusTotal = $('.banner__slider-content__numbering-slide-total'); */
var $slickElement = $('.banner__slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
    
});

$slickElement.slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    adaptiveHeight: true,
    appendArrows: $('.banner__slider-arrows'),
    prevArrow: '<button id="prev" type="button" class="btn-slider btn-juliet"><span class="icon-chevron-left"></span></button>',
    nextArrow: '<button id="next" type="button" class="btn-slider btn-juliet"><span class="icon-chevron-right"></span></button>'

});



//filter
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 50000,
        values: [4000, 15000],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + " ₽" + "  -  " + ui.values[1] + " ₽");
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + " ₽" +
        "  -  " + $("#slider-range").slider("values", 1) + " ₽");
});


   


