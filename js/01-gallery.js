import { galleryItems } from './gallery-items.js';
// Change code below this line

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

const onItemClick = event => {
  event.preventDefault();
  if (event.target === event.currentTarget) return;

  // console.log(event.currentTarget);
  // console.log(event.target);
  // console.log(event.target.nodeName);
  // console.log(event.target.dataset.source);

  const options = {
    onShow: () => {
      window.addEventListener('keydown', keyClose);
    },
    onClose: () => {
      window.removeEventListener('keydown', keyClose);
    },
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,
    options
  );

  // const instance = basicLightbox.create(
  //   `<div><img src="${event.target.dataset.source}"/></div>`,
  //   options
  // );

  instance.show();

  function keyClose(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
};

refs.containerGalleryItems.addEventListener('click', onItemClick);
