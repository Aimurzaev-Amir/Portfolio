//Scroll animation on the main page
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

// Setting the viewport height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
// on viewport height change
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});


if (document.documentElement.clientWidth < 768) {
  var skillCard = document.querySelectorAll(".skill-card");
  for (var i = 0; i <= skillCard.length; i++) {
    skillCard[i].removeAttribute("data-aos-delay");
  }
}

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

