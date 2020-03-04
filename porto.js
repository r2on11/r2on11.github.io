$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

$(".div1back").on("mouseenter", function(){
    $(".div1back").html('<span class="header"><i class="fas fa-plus-square fa-3x"></i></span> ').addClass("prova")}); 
$(".div1back").on("mouseleave", function(){ 
    $(".div1back").text("").removeClass("prova")}); 

    $(document).ready(function() {
        $(".div1back").click(function() {
            var someId = $(this).attr("id");
            window.open('PROJECTS/todo/index.html#'+someId);
              });})
              
  

$(".div2back").on("mouseenter", function(){ 
    $(".div2back").html('<span class="header"><i class="fas fa-plus-square fa-3x"></i></span> ').addClass("prova")});
$(".div2back").on("mouseleave", function(){
    $(".div2back").text("").removeClass("prova")}); 

    $(document).ready(function() {
        $('.div2back').click(function() {
            var someId = $(this).attr("id");
            window.open('PROJECTS/colorgame/index.html#'+someId);
        });})

           

$(".div3back").on("mouseenter", function(){ 
    $(".div3back").html('<span class="header"><i class="fas fa-plus-square fa-3x"></i></span> ').addClass("prova")});
$(".div3back").on("mouseleave", function(){
    $(".div3back").text("").removeClass("prova")}); 

    $(document).ready(function() {
        $('.div3back').click(function() {
            var someId = $(this).attr("id");
            window.open('PROJECTS/perfect/perfindex.html#'+someId);
              });})
    


$(".div4back").on("mouseenter", function(){ 
    $(".div4back").html('<span class="header"><i class="fas fa-plus-square fa-3x"></i></span> ').addClass("prova")});
$(".div4back").on("mouseleave", function(){
    $(".div4back").text("").removeClass("prova")}); 
$(document).ready(function() {
        $('.div4back').click(function() {
            var someId = $(this).attr("id");
            window.open('PROJECTS/candy/index.html#'+someId);
              });})

$(".div5back").on("mouseenter", function(){
    $(".div5back").html('<span class="header"><i class="fas fa-plus-square fa-3x"></i></span> ').addClass("prova")}); 
$(".div5back").on("mouseleave", function(){ 
    $(".div5back").text("").removeClass("prova")}); 

    $(document).ready(function() {
        $(".div5back").click(function() {
            var someId = $(this).attr("id");
            window.open('PROJECTS/imggallery/imgindex.html#'+someId);
              });})
              

    




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
