jQuery(document).on('ready', function ($) {
    "use strict";

   




    /*------------------------------
        VIDEO POPUP
    --------------------------------*/
    var $videoModal = $(".video-area-popup");
    $videoModal.modalVideo({
        channel: 'youtube'
    });



 
    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
    var $testmonialCarousel = $('.testmonial-slider');
    $testmonialCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        center: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


});
