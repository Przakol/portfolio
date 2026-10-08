// menu.js – wspólny skrypt menu bocznego (przycisk ☰ i rozwijana „galeria") dla wszystkich podstron.
// Po każdej zmianie tego pliku zwiększ numerek w <script src="menu.js?v=2">
// (i w <link href="style.css?v=2">) na stronach, żeby Safari pobrało nową wersję.
(function () {
  var button  = document.querySelector('.menu-button');
  var sidebar = document.querySelector('.sidebar');
  var gallery = document.querySelector('.galeria');   // napis „galeria" / „galerie"
  if (!button || !sidebar) return;

  var galleryItem = gallery ? gallery.parentNode : null;   // <li class="menu-item">

  function setGallery(open) {
    if (!galleryItem) return;
    if (open) galleryItem.classList.add('open');
    else galleryItem.classList.remove('open');
  }

  // ☰ – otwiera / zamyka menu i od razu rozwija / zwija galerię
  button.addEventListener('click', function () {
    // toggle() zwraca true, gdy menu właśnie się otworzyło
    // (w starej wersji brakowało tej zmiennej – skrypt wywalał się na `isActive`)
    var isActive = sidebar.classList.toggle('active');

    if (!isActive) {
      sidebar.classList.add('no-hover');
      setTimeout(function () { sidebar.classList.remove('no-hover'); }, 300);
    }

    setGallery(isActive);   // usuń tę linię, jeśli ☰ ma tylko otwierać menu, bez rozwijania galerii
  });

  // dotknięcie / kliknięcie „galeria" – rozwija lub zwija listę lat
  if (gallery) {
    gallery.addEventListener('click', function () {
      setGallery(!galleryItem.classList.contains('open'));
    });
  }
})();
