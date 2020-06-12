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
