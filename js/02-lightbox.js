import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    gallery: document.querySelector('.gallery'),
};

const makeGalleryMarkup = array => array.map(({original,preview,description}) => `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join('');


refs.gallery.innerHTML = makeGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250, 
});


