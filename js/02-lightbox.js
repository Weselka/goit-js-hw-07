import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let items = galleryItems;

const galleryTemplate = ({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const refs = {
  containerGalleryItems: document.querySelector('.gallery'),
};

const render = () => {
  const imgEl = items.map(galleryTemplate).join('');
  refs.containerGalleryItems.insertAdjacentHTML('beforeend', imgEl);
};

render();
