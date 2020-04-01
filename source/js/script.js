$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 28,
      dots: true,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        1920:{
          items:4
        }
      }
    });
  });

  