function openModal(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  modal.classList.add('active');
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});