import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    gallery: document.querySelector('.gallery'),
};

function makeGalleryMarkup (array) {
    let output = ``;

    for( let i = 0; i < array.length; i += 1) {
        output += `<a class="gallery__item" href="${array[i].original}"><img class="gallery__image" src="${array[i].preview}"  alt="${array[i].description}"/></a>`;
    }
    return output;
}

refs.gallery.innerHTML = makeGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250, 
});


