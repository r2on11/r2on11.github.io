$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

$(".div1back").on("mouseenter", function(){
    $(".div1back").text("Click to redirect").addClass("prova")}); 
$(".div1back").on("mouseleave", function(){ 
    $(".div1back").text("").removeClass("prova")}); 

    $(document).ready(function() {
        $(".div1back").click(function() {
            var someId = $(this).attr("id");
            window.open('imggallery/imgindex.html#'+someId);
              });})
           



$(".div2back").on("mouseenter", function(){ 
    $(".div2back").text("Click to redirect").addClass("prova")});
$(".div2back").on("mouseleave", function(){
    $(".div2back").text("").removeClass("prova")}); 

    $(document).ready(function() {
        $('.div2back').click(function() {
            var someId = $(this).attr("id");
            window.open('perfect/perfindex.html#'+someId);
              });})
    


$(".div3back").on("mouseenter", function(){ 
    $(".div3back").text("Click to redirect").addClass("prova")});
$(".div3back").on("mouseleave", function(){
    $(".div3back").text("").removeClass("prova")}); 

    $(document).ready(function() {
        $('.div3back').click(function() {
            var someId = $(this).attr("id");
            window.open('candy/index.html#'+someId);
              });})
    



    $(".div4back").on("mouseenter", function(){
    $(this).css({
        background: "black",
        color: "white"
    });
    $(".div4back").text("U selected")});
  
$(".div4back").on("mouseleave", function(){
    $(this).css({
        background: "gray",
        color: "white"
    }); $(".div4back").text("Projekti 4");})

    $(".div5back").on("mouseenter", function(){
    $(this).css({
        background: "black",
        color: "white"
    });
    $(".div5back").text("U selected")});
  
$(".div5back").on("mouseleave", function(){
    $(this).css({
        background: "gray",
        color: "white"
    }); $(".div5back").text("Projekti 5");})

    $(".div6back").on("mouseenter", function(){
        $(this).css({
            background: "black",
            color: "white"
        });
        $(".div6back").text("U selected")});
      
    $(".div6back").on("mouseleave", function(){
        $(this).css({
            background: "gray",
            color: "white"
        }); $(".div6back").text("Projekti 6");})
        

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
        
        