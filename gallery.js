let currentIndex = 0;
let images = [];

// Zbierz wszystkie zdjęcia z galerii
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  images = Array.from(galleryItems).map(img => img.src);
}

function openModal(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  
  currentIndex = images.indexOf(src);
  modal.classList.add('active');
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

function changeImage(direction) {
  currentIndex += direction;
  
  // Zapętlenie galerii
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  
  const modalImg = document.getElementById('modalImg');
  modalImg.src = images[currentIndex];
}

// Obsługa klawiszy
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('modal');
  if (!modal.classList.contains('active')) return;
  
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    changeImage(-1);
  } else if (e.key === 'ArrowRight') {
    changeImage(1);
  }
});

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', initGallery);