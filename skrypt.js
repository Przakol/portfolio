const sidebar = document.querySelector('.sidebar');
const sidebarButton = document.querySelector('.sidebar-button');

// Toggle sidebar na kliknięcie w przycisk
sidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});