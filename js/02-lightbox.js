import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const makeGalleryHtmlMarkup = (imgs) => {
    return imgs.map(({preview, original, description}) => {
        return `
                  <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                  </a>
               `
    }).join("");
}

const insertMarkup = (ref, markupStr) => {
    ref.innerHTML = markupStr;
}

insertMarkup(galleryRef, makeGalleryHtmlMarkup(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});