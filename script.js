const btnMenu = document.getElementById('menuMobile');
const navMobile = document.getElementById('navMobile');

if(btnMenu){
  btnMenu.addEventListener('click', () => {
    navMobile.classList.toggle('show');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('iphoneLightbox');
  const lightboxImage = document.getElementById('iphoneLightboxImg');
  const lightboxCaption = document.getElementById('iphoneLightboxCaption');
  const closeLightbox = document.querySelector('.lightbox-cerrar');

  document.querySelectorAll('.iphone-foto, .interior-zoom').forEach((button) => {
    button.addEventListener('click', () => {
      lightboxImage.src = button.dataset.image;
      lightboxImage.alt = button.dataset.caption;
      lightboxCaption.textContent = button.dataset.caption;
      lightbox.showModal();
    });
  });

  closeLightbox?.addEventListener('click', () => lightbox.close());
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  const fotoCard = document.querySelector('.foto-card');
  if(fotoCard){
    // Detecta automáticamente si la página usa tonos dorados, azules o violetas según el CSS
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primario') || 'rgba(255,215,0,0.6)';
    setInterval(() => {
      fotoCard.style.boxShadow = `0 0 50px ${primaryColor.trim()}`;
      setTimeout(() => {
        fotoCard.style.boxShadow = `0 0 35px ${primaryColor.trim()}`;
      }, 600);
    }, 3000);
  }
});
