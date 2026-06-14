const mainImgs = document.querySelectorAll(
  ".left-column .main-img-wrapper .main-image",
);
const thumbnails = document.querySelectorAll(".left-column .group .thumbnails");

const lightboxImgs = document.querySelectorAll(
  ".lightbox .main-img-wrapper .main-image",
);
const lightboxThumbnails = document.querySelectorAll(
  ".lightbox .group .thumbnails",
);
const closeLightbox = document.getElementById("lightbox-close-icon");
const lightbox = document.getElementById("lightbox");
const prevIcon = document.getElementById("lightbox-prev-icon");
const nextIcon = document.getElementById("lightbox-next-icon");
let currentIndex = 0;

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

function changeImage(mainImgs, index, thumbnails) {
  mainImgs.forEach((img) => {
    img.classList.remove("active");
  });
  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  mainImgs[index].classList.add("active");
  thumbnails[index].classList.add("active");

  currentIndex = index;
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    changeImage(mainImgs, index, thumbnails);
  });
});

lightboxThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    changeImage(lightboxImgs, index, lightboxThumbnails);
  });
});

mainImgs.forEach((mainImg, index) => {
  mainImg.addEventListener("click", () => {
    lightbox.classList.add("active");
    changeImage(lightboxImgs, index, lightboxThumbnails);
  });
});

prevIcon.addEventListener("click", () => {
  if (currentIndex <= 0) {
    changeImage(lightboxImgs, mainImgs.length - 1, lightboxThumbnails);
  } else {
    changeImage(lightboxImgs, currentIndex - 1, lightboxThumbnails);
  }
});

nextIcon.addEventListener("click", () => {
  if (currentIndex >= mainImgs.length - 1) {
    changeImage(lightboxImgs, 0, lightboxThumbnails);
  } else {
    changeImage(lightboxImgs, currentIndex + 1, lightboxThumbnails);
  }
});
