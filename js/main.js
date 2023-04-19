$(function() {

    //Arrow to back to Top

    $(document).scroll(function() {
        if (window.pageYOffset >= 500)
            $(".arrow").css("display", "block");
        else
            $(".arrow").css("display", "none");
    });

    $('.arrow').on('click', function() {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });

    //Navbar hide in Footer Section

    $(document).scroll(function() {
        if (window.pageYOffset >= 4900)
            $(".navbar").css("display", "none");
        else
            $(".navbar").css("display", "block");
    });

    //Navbar BackGround
    $(document).scroll(function() {

        if (window.pageYOffset >= 200)
            $(".navbar").css("background-color", "#222");
        else
            $(".navbar").css("background-color", "rgba(255, 255, 255, 0.1)");

    });

    //Toggle Active Class

    $(".navbar .navbar-nav li").on('click', function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //Toggle Active Class IN Restarent Menu Section && Toggle Between Restarnet Menu pages

    $(".nav ul li").on('click', function() {
        event.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        $(".menu div.mains,.menu div.desserts,.menu div.drinks").hide();
        $($(this).data("class")).fadeIn();
    });

    //Gallary => Click Zoom Button to Zoom Image 
    $(".gallary_img .zoom_btn").on('click', function() {
        $src = $(this).data('class');
        console.log($src);
        $('.show_zomm_image').css('display', 'block');
        $('.show_zomm_image img').attr('src', $src);
    });

    //Close Zoom Image

    $(".show_zomm_image,.clsoe_btn").on('click', function() {
        $(".show_zomm_image").css('display', 'none');
        $('.show_zomm_image img').attr('src', '');
    });

    //Stop carousel Auto Silde

    $('.carousel').carousel({
        interval: false,
    });


    // Page Loading Overlay

    $(document).ready(function() {
        "use strict";
        $(".spinner-container").fadeOut(6000,
            function() {
                $("#fullpageloading").fadeOut(2000);
            });
    });

});