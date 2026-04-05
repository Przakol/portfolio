let currentIndex = 0;
let images = [];

function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  images = Array.from(galleryItems).map(img => img.src);
}

function openModal(src) {
  console.log('src z HTML:', src);
  console.log('images:', images);
  console.log('findIndex:', images.findIndex(imgSrc => imgSrc.endsWith(src)));
  
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  
  currentIndex = images.findIndex(imgSrc => imgSrc.endsWith(src));
  modal.classList.add('active');
  modalImg.src = images[currentIndex];
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

function changeImage(direction) {
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  
  const modalImg = document.getElementById('modalImg');
  modalImg.src = images[currentIndex];
}

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

document.addEventListener('DOMContentLoaded', initGallery);