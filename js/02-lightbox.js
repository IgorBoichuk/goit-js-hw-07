import { galleryItems } from "./gallery-items.js";
// Change code below this line

const myGallery = document.querySelector(".gallery");

const greateMyGallery = () => {
  for (const item of galleryItems) {
    let imgArray = [];
    const createItem = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`;
    imgArray.push(createItem);
    const joinArray = imgArray.join("");
    myGallery.insertAdjacentHTML("afterbegin", joinArray);
  }
};
greateMyGallery();

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
