$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

$(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
    $('.navbar').addClass("navscr")
    } else {
         $('.navbar').removeClass("navscr")
        }
        });     

$(document).ready(function() {
     $('.navbar-toggler').click(function() {
        $("nav").toggleClass("navbar-mobclick",2000);});})
