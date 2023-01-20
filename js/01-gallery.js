import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};

function makeGalleryMarkup (array) {
    let output = ``;

    for( let i = 0; i < array.length; i += 1) {
        output += `<div class="gallery__item"><a class="gallery__link" href="${array[i].original}"><img class="gallery__image" src="${array[i].preview}" data-source="${array[i].original}" alt="${array[i].description}"/></a></div>`;
    }
    return output;
}

let largeImg;
refs.gallery.innerHTML = makeGalleryMarkup(galleryItems);
refs.gallery.addEventListener('click', clickOnLargeImg);
window.addEventListener('keydown', closeLargeImg);


function clickOnLargeImg(event) {
    event.preventDefault();
    let {target: {src,dataset:{source}}} = event;
    src = source; // не дуже розумію 5 завдання - "Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям." Замінив ось так
    largeImg = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
`);
largeImg.show();
}

function closeLargeImg(event) {
    if (event.code === "Escape") {
        largeImg.close();
    }
}

