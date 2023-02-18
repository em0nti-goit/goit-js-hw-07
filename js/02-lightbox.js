import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

//EventListeners
galleryRef.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(e) {
    if (!e.target.classList.contains('gallery__image')) return;
    e.preventDefault();
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}

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

// console.log(galleryItems);
