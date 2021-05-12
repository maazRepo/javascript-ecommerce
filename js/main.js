// first slider

$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: " .site-slider .slider-btn .next"
});


// Second slider

$(".slider-two")
.not(".slick-intialized")
.slick({
    slidesToShow:5,
    slidesToScroll:1,
    prevArrow: ".site-slider-two .prev",
    nextArrow: " .site-slider-two .next",
    autoplaySpeed:3000
});