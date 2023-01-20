import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};


const makeGalleryMarkup = array => array.map(({original,preview,description}) => `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`).join('');

let largeImg;
refs.gallery.innerHTML = makeGalleryMarkup(galleryItems);
refs.gallery.addEventListener('click', clickOnLargeImg);
window.addEventListener('keydown', closeLargeImg);


function clickOnLargeImg(event) {
    event.preventDefault();
    largeImg = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
largeImg.show();
}

function closeLargeImg(event) {
    if (event.code === "Escape") {
        largeImg.close();
    }
}

