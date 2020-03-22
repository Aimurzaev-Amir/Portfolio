var $guestSlider = $(".articles-cards, .work-cards");
 
$(window).resize(function() {
  showPartnerSlider();
});
 
function showPartnerSlider() {
  if ($guestSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia("(max-width: 900px)").matches) {
      initialGuestSlider();
    } else {
      destroyGuestSlider();
    }
  }
}
showPartnerSlider();
 
function initialGuestSlider() {
  $guestSlider.addClass("owl-carousel").owlCarousel({
    loop:true,
    dots: true,
    center:true,
    autoWidth: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000
  });
}
 
function destroyGuestSlider() {
  $guestSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}

$(".works").owlCarousel({
  loop: true,
  dots: true,
  autoplay: true,
  items: 1,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp'
});

(function() {
    
  function controls() {
    $(this).addClass('selected').siblings('button').removeClass('selected');
    $('.slideDiv').animate({
      top: -$('.container').height() * $(this).index()
    }, 450);
  }
  
  /***Event Listeners***/
  const runCode = () => {
    const button = document.querySelectorAll('.button');
    if ( button ) {
      for ( var i = 0; i < button.length; i++ ) {
        button[i].addEventListener('click', controls, false);
      }
    }
  }
  
  runCode();
  
})();