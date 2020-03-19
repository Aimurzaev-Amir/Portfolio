// toggle for adaptive mobile devices
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


// typing animation function on the main page
$('document').ready(function(){
    var typed = new Typed ('#typed',{
        stringsElement: '#typed-strings',
        loop: true,
        backSpeed: 40,
        typeSpeed: 40
    })
});

// Scroll animation on the main page
$(function() {
    $("#scroll-indicator").click(function() {
      $("html, body").animate({
        scrollTop: $("#intro").offset().top - 50
      },
      'slow'
      );
    });
  });
  
  // Swiper slider on the Portfolio page
  var swiper = new Swiper('.swiper-container', {
    paginationClickable: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 100,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
  });

  
  