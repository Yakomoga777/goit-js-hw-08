import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

//*1.1 Знаходжу елемент галареї
const galleryEl = document.querySelector('.gallery');

//* 1.3 Створюю функцію, яка створює шаблон
function createsMarkup(array) {
  return array
    .map(element => {
      return `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', createsMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});
