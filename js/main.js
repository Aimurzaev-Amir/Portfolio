// // toggle for adaptive mobile devices
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });


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
  


// Share article buttons
Share = {
  me : function(el){
      Share.popup(el.href);
      return false;
  },

  popup: function(url) {
      window.open(url,'','toolbar=0,status=0,width=626,height=436');
  }
};

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

  