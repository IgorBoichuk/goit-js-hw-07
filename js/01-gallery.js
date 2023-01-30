import { galleryItems } from "./gallery-items.js";
// Change code below this line

const myGallery = document.querySelector(".gallery");
myGallery.addEventListener("click", onPictureClick);

function greateMyGallery() {
  for (const item of galleryItems) {
    // const createDiv = document.createElement("div");
    // createDiv.classList = "gallery__item";

    // const createLink = document.createElement("a");
    // createLink.classList = "gallery__link";
    // createLink.setAttribute("href", item.preview);

    // const createImg = document.createElement("img");
    // createImg.classList = "gallery__image";
    // createImg.setAttribute("src", item.preview);
    // createImg.setAttribute("alt", item.description);

    // createDiv.append(createLink);
    // createLink.append(createImg);
    // myGallery.append(createDiv);

    let imgArray = [];
    const createItem = `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`;
    imgArray.push(createItem);
    const joinArray = imgArray.join("");
    myGallery.insertAdjacentHTML("afterbegin", joinArray);
  }
}
greateMyGallery();

function onPictureClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const lightBox = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
    `);
  lightBox.show();
  document.addEventListener("keydown", onEscapeClose);

  function onEscapeClose(e) {
    const visible = document.querySelector(".basicLightbox--visible");
    if (visible && e.key === "Escape") {
      lightBox.close();
    }
  }
}
