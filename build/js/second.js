$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      loop: true,
      margin: 5,
      responsive:{
        0:{
          items:4
        },
        768:{
          items:4
        },
        1920:{
          items:4
        }
      }
    });
  });
