/* Script for Portfolio Swiper slider  */

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
 
// });

// ======================================================================


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: true,
  
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


/* Script for Portfolio Swiper slider  */





// -- script for Active link

$('li a').click(function() {
  $('a').removeClass('active');
  $(this).addClass('active');
});

// -- script for Active link



/* Script starts for Navbar color change */

$(window).scroll(function(){
  $('.bg-light').toggleClass('scrolled',$(this).scrollTop()>200);
});

/* Script ends for Navbar color change */


/* Script starts for header mousemove animation */

document.addEventListener('mousemove', parallax);
    function parallax(e) {
      this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed) /50;
        const y = (window.innerHeight - e.pageY*speed) /50;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`

      })
    }
    
/* Script ends for header mousemove animation */



/* Script for Portfolio Artist Swiper slider  */

var swiper = new Swiper(".mySwiper3", {
  loop: true,
  autoplay: true,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

/* Script for Portfolio Artist Swiper slider  */
