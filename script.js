/** @format */
// sticky navbar on scroll script
$(window).scroll(function () {
  if (this.scrollY > 80) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});
$(document).ready(function () {
  $(".member-btn-1").click(function () {
    $(".team-details-1").slideToggle();
    $(".team-details-2").slideUp();
    $(".team-details-3").slideUp();
    $(".member-btn-1 .fa-caret-down").toggleClass("rotate");
    $(".member-btn-2 .fa-caret-down").removeClass("rotate");
    $(".member-btn-3 .fa-caret-down").removeClass("rotate");
  });
  $(".member-btn-2").click(function () {
    $(".team-details-2").slideToggle();
    $(".team-details-1").slideUp();
    $(".team-details-3").slideUp();
    $(".member-btn-1 .fa-caret-down").removeClass("rotate");
    $(".member-btn-2 .fa-caret-down").toggleClass("rotate");
    $(".member-btn-3 .fa-caret-down").removeClass("rotate");
  });
  $(".member-btn-3").click(function () {
    $(".team-details-3").slideToggle();
    $(".team-details-1").slideUp();
    $(".team-details-2").slideUp();
    $(".member-btn-1 .fa-caret-down").removeClass("rotate");
    $(".member-btn-2 .fa-caret-down").removeClass("rotate");
    $(".member-btn-3 .fa-caret-down").toggleClass("rotate");
  });
});
