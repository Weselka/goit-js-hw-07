import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let items = galleryItems;

const galleryTemplate = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const refs = {
  containerGalleryItems: document.querySelector('.gallery'),
};

const render = () => {
  const imgEl = items.map(galleryTemplate).join('');
  refs.containerGalleryItems.insertAdjacentHTML('beforeend', imgEl);
};

render();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
