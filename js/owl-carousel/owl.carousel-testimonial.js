// <!-- owl-carousel java script for Testimonial-->
    
        $('.client-says').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        var owl = $('.client-says');
        owl.owlCarousel();
        // Go to the next item
        $('.customnextbtn').on(function() {
                owl.trigger('next.owl.carousel');
            })
            // Go to the previous item
        $('.customprevbtn').on(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
        })




        
        // <!-- owl-carousel java script for Testimonial-->
    
        $('.exhibitions').owlCarousel({
            loop: true,
            margin: 100,
            autoplay: true,
            nav: false,
            dots: true,
            responsive: {
                320: {
                    items: 1
                },
                576: {
                    items: 1                    
                },
                768: {
                    items: 2,
                    margin: 40
                },
                992: {
                    items: 2,
                    margin: 60
                },
                1199: {
                    items: 3,
                    margin: 60
                }
            }
        })

        var owl = $('.exhibitions');
        owl.owlCarousel();
        // Go to the next item
        $('.customnextbtn').on(function() {
                owl.trigger('next.owl.carousel');
            })
            // Go to the previous item
        $('.customprevbtn').on(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
        })

        
        // <!-- owl-carousel java script for index_6 EXP-->
    
        $('.past-exp-card').owlCarousel({
            loop: true,
            margin: 100,
            autoplay: true,
            nav: false,
            dots: true,
            responsive: {
                320: {
                    items: 1
                },
                576: {
                    items: 1                    
                },
                768: {
                    items: 1,
                    margin: 40
                },
                992: {
                    items: 1,
                    margin: 60
                },
                1199: {
                    items: 2,
                    margin: 60
                }
            }
        })

       