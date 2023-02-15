import { galleryItems } from './gallery-items.js';
// Change code below this line

//links to the DOM elements
const galleryRef = document.querySelector('.gallery');

//EventListeners
galleryRef.addEventListener('click', onGalleryImgClick);

function handleEscKeyPress(e, basicLightboxInstance) {
    console.log(e); //for testing purpose
    if (e.code === 'Escape') {
        basicLightboxInstance.close();
        window.removeEventListener('keydown',onKeydownHandler);
        console.log("window.removeEventListener"); //for testing
    }
}

function onKeydownHandler(basicLightboxInstance) {
    return function (e) {
        handleEscKeyPress(e, basicLightboxInstance);
    }
}

//Events Handlers
function onGalleryImgClick(e) {
    if (!e.target.classList.contains('gallery__image')) return;
    e.preventDefault();
    const url = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${url}">`);
    instance.show();
    window.addEventListener('keydown', onKeydownHandler(instance));
}

//Markup gallery
const makeGalleryHtmlMarkup = (imgs) => {
    return imgs.map(({preview, original, description}) => {
            return `
                <div class="gallery__item">
                  <a class="gallery__link" href="${original}">
                    <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                    />
                  </a>
                </div>`
                }).join("");
}

const insertMarkup = (ref, markupStr) => {
    ref.innerHTML = markupStr;
}

insertMarkup(galleryRef, makeGalleryHtmlMarkup(galleryItems));

// console.log(makeGalleryHtmlMarkup(galleryItems));  //testing loging
