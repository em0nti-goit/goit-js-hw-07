import { galleryItems } from './gallery-items.js';
// Change code below this line

//links to the DOM elements
const galleryRef = document.querySelector('.gallery');

//EventListeners
galleryRef.addEventListener('click', onGalleryImgClick);

let instance = null;

function handleEscKeyPress(e) {
    console.log(e); //for testing purpose
    if (e.code === 'Escape') {
        instance.close();
        console.log("window.removeEventListener"); //for testing
    }
}

//Events Handlers
function onGalleryImgClick(e) {
    if (!e.target.classList.contains('gallery__image')) return;
    e.preventDefault();
    const url = e.target.dataset.source;
    instance = basicLightbox.create(`<img src="${url}">`, {
        onShow: () => {
            window.addEventListener('keydown', handleEscKeyPress);
        },
        onClose: () => {
            window.removeEventListener('keydown', handleEscKeyPress);
        }
    });
    instance.show();
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
