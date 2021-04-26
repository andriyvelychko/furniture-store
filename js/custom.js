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
/* 
$(".banner__slider").on("init afterChange", function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(".banner__slider-content__numbering-slide span").text(i);
});

$('.banner__slider').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    adaptiveHeight: true

}); */
   


