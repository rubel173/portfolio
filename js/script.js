AOS.init({
  offset: 100,
  delay: 50,
  duration: 500,
  easing: 'linear'

});


// slick_slider
$(document).ready(function function_name(argument) {
  $('.s_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

})
$('document').ready(function function_name(argument) {
  var mixer = mixitup('.filter', {
      animation: {
          duration: 300
      }
  });
});
