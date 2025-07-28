// Popup Fullscreen Image
const popup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImage');
const galleryImages = document.querySelectorAll('.popup-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    popup.style.display = 'flex';
  });
});

function closeImage() {
  popup.style.display = 'none';
}
