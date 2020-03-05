$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

  
$(".divback").on("mouseenter", function(){
    $(this).find('.text-block').html ('<span class="header"><i class="fas fa-plus-square fa-3x"></i></span> ');
    $(this).addClass("prova");
}); 
$(".divback").on("mouseleave", function(){ 
    $(this).removeClass("prova");
    $(this).find('.text-block').html("");}); 


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
