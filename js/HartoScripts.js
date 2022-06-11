
$(document).ready(function(){
  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 350,
    cssEase: 'ease-out',
    autoplay: true,
    autoplaySpeed: 9000,
  });

  $('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  });

});
