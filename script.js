/** @format */
$(window).scroll(function () {
  // sticky navbar on scroll script
  if (this.scrollY > 80) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});

// owl carousel script
$(".carousel1").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    800: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
    1200: {
      items: 4,
      nav: false,
    },
  },
});
