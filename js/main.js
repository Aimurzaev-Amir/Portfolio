if (document.documentElement.clientWidth < 768) {
  var skillCard = document.querySelectorAll(".skill-card");
  for (var i = 0; i <= skillCard.length; i++) {
    skillCard[i].removeAttribute("data-aos-delay");
  }
}

console.log(document.documentElement.clientWidth);
// Scroll animation on the main page
$(function () {
  $("#scroll-indicator").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#intro").offset().top - 50,
      },
      "slow"
    );
  });
});

// Share article buttons
Share = {
  me: function (el) {
    Share.popup(el.href);
    return false;
  },

  popup: function (url) {
    window.open(url, "", "toolbar=0,status=0,width=626,height=436");
  },
};

// Setting the viewport height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
// on viewport height change
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// Modal Gallery
var modal = document.getElementById("myModal");
var slideIndex = 0;
function changeSlideIndex(x) {
  slideIndex = x;
  console.log(slideIndex);
  showModal(slideIndex);
}
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function showModal(slideIndex) {
  modal.style.display = "block";
  modalImg.src = img[slideIndex].src;
  captionText.innerHTML = img[slideIndex].alt;
}
// close modal gallery
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
