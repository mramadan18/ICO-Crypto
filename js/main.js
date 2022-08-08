$(function () {
  // Scroll Navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(".navbar").height()) {
      $(".navbar").css({
        backgroundColor: "#fff",
      });

      $(".navbar").removeClass("navbar-dark").addClass("navbar-light");

      $(".navbar .navbar-brand img").eq(0).css({
        display: "none",
      });

      $(".navbar .navbar-brand img").eq(1).css({
        display: "block",
      });

      $(".nav-link").css({
        color: "#415076",
      });
    } else {
      $(".navbar").css({
        backgroundColor: "transparent",
      });

      $(".navbar").removeClass("navbar-light").addClass("navbar-dark");

      $(".navbar .navbar-brand img").eq(0).css({
        display: "block",
      });

      $(".navbar .navbar-brand img").eq(1).css({
        display: "none",
      });

      $(".nav-link").css({
        color: "#fff",
      });
    }
  });

  // Header Size
  $(".header").height($(window).height());

  $(document).ready(function () {
    $(".loading").fadeOut(1000);

    $(".home-loading").delay(1000).fadeOut(1000);

    $(".background").addClass("animate");
  });
});
