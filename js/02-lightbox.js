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

// const onPictureClick = (event) => {
//   event.preventDefault();

//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const lightBox = basicLightbox.create(`
//       <img src=${event.target.dataset.source} width="800" height="600">
//       `);
//   lightBox.show();

//   document.addEventListener("keydown", onEscapeClose);

//   function onEscapeClose(e) {
//     const visible = document.querySelector(".basicLightbox--visible");
//     if (visible && e.key === "Escape") {
//       lightBox.close();
//     }
//   }
// };
// myGallery.addEventListener("click", onPictureClick);

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  // do something…
});
