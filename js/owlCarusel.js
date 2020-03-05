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
    center:true,
    autoWidth: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000
  });
}
 
function destroyGuestSlider() {
  $guestSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}