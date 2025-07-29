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
// Room Gallery Slideshow Modal
const roomGallery = document.getElementById("roomGallery");
const galleryImage = document.getElementById("galleryImage");

let currentIndex = 0;
let currentImages = [];

const roomImages = {
  deluxe: [
    "images/room1.jpg",
    "images/room1-2.jpg",
    "images/room1-3.jpg",
    "images/room1-4.jpg"
  ],
  executive: [
    "images/room2.jpg",
    "images/room2-2.jpg",
    "images/room2-3.jpg"
  ],
  suite: [
    "images/room3.jpg",
    "images/room3-2.jpg",
    "images/room3-3.jpg",
    "images/room3-4.jpg"
  ]
};

function openRoomGallery(room) {
  currentImages = roomImages[room];
  currentIndex = 0;
  galleryImage.src = currentImages[currentIndex];
  roomGallery.style.display = "flex";
}

function closeRoomGallery() {
  roomGallery.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  galleryImage.src = currentImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  galleryImage.src = currentImages[currentIndex];
}
// Scroll Animation for Room Cards
const roomCards = document.querySelectorAll('.room-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

roomCards.forEach(card => observer.observe(card));
// Booking Modal Logic
const bookingModal = document.getElementById("bookingModal");
const roomTypeInput = document.getElementById("roomTypeInput");

document.querySelectorAll(".book-now-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const roomName = btn.closest(".room-card").querySelector("h3").innerText;
    roomTypeInput.value = roomName;
    bookingModal.style.display = "flex";
  });
});

function closeBookingModal() {
  bookingModal.style.display = "none";
}
