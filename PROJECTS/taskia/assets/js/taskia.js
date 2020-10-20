$(window).scroll(function() {
    $(".hideMe").each( function() {
        if( $(window).scrollTop() > $(this).offset().top - 600 ) {
            $(this).animate({'opacity':'1'},500);        }
    }); 
    });


    
$('#cardnr2').hover(
    function() {
        $(this).toggleClass("hovered");
        $('#cardnr3').toggleClass("testing");
        $('#cardnr1').toggleClass("testing");

    });
$('#cardnr1').hover(
    function() {
        $(this).toggleClass("hovered");
        $('#cardnr2').toggleClass("testing");
        $('#cardnr3').toggleClass("testing");

    });
$('#cardnr3').hover(
    function() {
        $(this).toggleClass("hovered");
        $('#cardnr1').toggleClass("testing");
        $('#cardnr2').toggleClass("testing");

    });       
