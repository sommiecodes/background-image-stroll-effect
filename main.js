const bgImageEL = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEL.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEL.style.backgroundSize = 160 -window.pageYOffset / 12 + "%"
}
