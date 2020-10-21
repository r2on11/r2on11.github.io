$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

   

$(document).ready(function() {
     $('.navbar-toggler').click(function() {
        $("nav").toggleClass("navbar-mobclick",2000);});})

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});