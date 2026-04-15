const galleryContainer = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");

galleryContainer.addEventListener("click", (e) => {
  lightbox.style.display = "block";
  lightboxImage.attributes.src = `${e.target.currentSrc}`;
  console.log(lightboxImage.attributes.src);
});
