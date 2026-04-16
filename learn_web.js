const galleryContainer = document.querySelector(".gallery");
const galleryImages = document.getElementsByClassName("gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

//full sized images
const fullSizedImg = {
  stonehenge: "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg",
  storm: "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg",
  trees: "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg",
};

for (const item of galleryImages) {
  item.addEventListener("click", () => {
    //using target src to extract key for fullSizedImg
    const imageURL = item.attributes.src.value;

    if (imageURL.includes("stonehenge-thumbnail.jpg")) {
      lightboxImage.attributes.src.value = fullSizedImg[`stonehenge`];
    } else if (imageURL.includes("storm-thumbnail.jpg")) {
      lightboxImage.attributes.src.value = fullSizedImg[`storm`];
    } else if (imageURL.includes("trees-thumbnail.jpg")) {
      lightboxImage.attributes.src.value = fullSizedImg[`trees`];
    }

    lightbox.style.display = "flex";
  });
}

lightbox.addEventListener("click", (e) => {
  if (e.target.id !== "lightbox-image") {
    lightbox.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  lightboxImage.attributes.src.value = "-thumbnail";
  lightbox.style.display = "none";
});
