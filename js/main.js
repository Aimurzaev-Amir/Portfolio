// mobile devices animation turn off
if (document.documentElement.clientWidth < 768) {
  var skillCard = document.querySelectorAll(".skill-card");
  for (var i = 0; i <= skillCard.length; i++) {
    skillCard[i].removeAttribute("data-aos-delay");
  }
}

// Setting the viewport height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
// on viewport height change
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

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

// Modal Gallery
var modal = document.getElementById("myModal");
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var slideIndex = 0;
function changeSlideIndex(x) {
  slideIndex = x;
  showModal(slideIndex);
}
function getPhoto() {
  modalImg.src = img[slideIndex].src;
  captionText.innerHTML = img[slideIndex].alt;
}
function showModal(slideIndex) {
  modal.style.display = "block";
  getPhoto();
}
//prev-next photo buttons
var nextPhoto = document.getElementById("nextPhoto");
var prevPhoto = document.getElementById("prevPhoto");
nextPhoto.addEventListener("click", nextPhotofunc);
prevPhoto.addEventListener("click", prevPhotofunc);

function nextPhotofunc() {
  slideIndex += 1;
  if (slideIndex > img.length - 1) {
    slideIndex = 0;
  }
  getPhoto();
}
function prevPhotofunc() {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = img.length - 1;
  }
  getPhoto();
}

// close modal gallery
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
