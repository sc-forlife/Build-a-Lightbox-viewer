const galleryContainer = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryContainer.addEventListener("click", (e) => {
  lightbox.style.display = "flex";
  console.log(e.target.currentSrc);
  lightboxImage.attributes.src.value = e.target.currentSrc;
  console.log();
});

lightbox.addEventListener("click", (e) => {
  if (e.target.id !== "lightbox-image") {
    lightbox.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  lightboxImage.attributes.src.value = "-thumbnail";
  lightbox.style.display = "none";
});
