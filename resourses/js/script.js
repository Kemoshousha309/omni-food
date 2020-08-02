$(document).ready(function (){

    /**************************
    sticky nav */
    $(".js--features-sec").waypoint (function (direction){
        if(direction == "down"){
            $("nav").addClass("sticky")
        }else {
            $("nav").removeClass("sticky")
        }
    },{
         offset:'15%'
    })

     /**********************************************************************************
      scroll buttons*/
    $(".js--btn-orange").click(function (){
        $("html, body").animate({scrollTop: $(".js--pricing-plans").offset().top}, 1000)
    });

    $(".js--btn-full").click(function (){
        $("html, body").animate({scrollTop: $(".js--features-sec").offset().top}, 1000)
    });

    //*********************************************************************************
    // we can scroll by this way =>

    $("#food_delivery").click(function (){
        $("html, body").animate({scrollTop: $(".js--features-sec").offset().top}, 1000)
    });

    $("#how-works").click(function (){
        $("html, body").animate({scrollTop: $(".js--how-works").offset().top}, 1000)
    });

    $("#cities").click(function (){
        $("html, body").animate({scrollTop: $(".js--cities-sec").offset().top}, 1000)
    });

    $("#sing-up").click(function (){
        $("html, body").animate({scrollTop: $(".js--sumbit-sec").offset().top}, 1000)
    });

    //***********************************************************************************
    // we also can use by this trick (using a id link inside the same page) =>

    // Select all links with hashes
//    $('a[href*="#"]')
//      // Remove links that don't actually link to anything
//      .not('[href="#"]')
//      .not('[href="#0"]')
//      .click(function(event) {
//        // On-page links
//        if (
//          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//          &&
//          location.hostname == this.hostname
//        ) {
//          // Figure out element to scroll to
//          var target = $(this.hash);
//          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//          // Does a scroll target exist?
//          if (target.length) {
//            // Only prevent default if animation is actually gonna happen
//            event.preventDefault();
//            $('html, body').animate({
//              scrollTop: target.offset().top
//            }, 1000, function() {
//              // Callback after animation
//              // Must change focus!
//              var $target = $(target);
//              $target.focus();
//              if ($target.is(":focus")) { // Checking if the target was focused
//                return false;
//              } else {
//                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//                $target.focus(); // Set focus again
//              };
//            });
//          }
//        }
//      });


    //*********************************************************************|
    // Animations

    $(".animate-feature").waypoint(function (direction) {
        $(".animate-feature").addClass("animate__animated animate__fadeIn")
    },{
        offset:"50%"
    })

    $(".animate-img").waypoint(function (direction) {
        $(".app-screen").addClass("animate__animated animate__bounceInUp")
    },{
        offset:"50%"
    })

    $(".animate-priceBox").waypoint(function (direction) {
        $(".animate-priceBox").addClass("animate__animated animate__headShake")
    },{
        offset:"50%"
    })

    $(".animated-cities").waypoint(function (direction) {
        $(".animated-cities").addClass("animate__animated animate__fadeIn")
    },{
        offset:"50%"
    })

    /***********************************************/
    // mobile nav bar

    $(".mobile-nav-icon").click(function(){
        var mobIcon = $(this);
        var navList = $("body .nav-bar li")

        if(mobIcon.attr("name") === "menu"){
            mobIcon.attr("name",'close')
            navList.css("display", "block")
        } else if (mobIcon.attr("name") === 'close'){
            mobIcon.attr("name",'menu')
            navList.css("display", "none")

        }
    })

})
