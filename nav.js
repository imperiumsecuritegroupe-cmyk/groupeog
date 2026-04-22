document.addEventListener('DOMContentLoaded', () => {
  const navHTML = `
  <nav id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <img src="logo.png" alt="Groupe OG" class="nav-logo-img">
      </a>
      <ul class="nav-menu">
        <li class="nav-item"><a href="index.html" class="nav-link">Accueil</a></li>

        <li class="nav-item nav-item-mega">
          <a href="btp.html" class="nav-link" data-toggle="dropdown">BTP <span class="arrow">▾</span></a>
          <div class="dropdown btp-dd">
            <a href="gros-oeuvres.html"><span class="dd-icon">🏛️</span> Gros Œuvres &amp; Maçonnerie</a>
            <a href="seconds-oeuvres.html"><span class="dd-icon">🔨</span> Seconds Œuvres &amp; Finitions</a>
            <a href="plomberie-chauffage.html"><span class="dd-icon">🔧</span> Plomberie &amp; CVC</a>
            <a href="electricite.html"><span class="dd-icon">⚡</span> Électricité &amp; GTB</a>
            <a href="photovoltaique.html"><span class="dd-icon">☀️</span> Énergie Solaire</a>
          </div>
        </li>

        <li class="nav-item nav-item-mega">
          <a href="proprete.html" class="nav-link" data-toggle="dropdown">Propreté <span class="arrow">▾</span></a>
          <div class="dropdown prop-dd">
            <a href="nettoyage.html"><span class="dd-icon">🧹</span> Nettoyage &amp; Hygiène</a>
            <a href="espaces-verts.html"><span class="dd-icon">🌿</span> Espaces Verts</a>
          </div>
        </li>

        <li class="nav-item nav-item-mega">
          <a href="immobilier.html" class="nav-link" data-toggle="dropdown">Immobilier <span class="arrow">▾</span></a>
          <div class="dropdown immo-dd">
            <a href="immobilier.html"><span class="dd-icon">🏢</span> Gestion Immobilière</a>
            <a href="services-generaux.html"><span class="dd-icon">🗂️</span> Services Généraux</a>
            <a href="securite-surete.html"><span class="dd-icon">🛡️</span> Sécurité &amp; Sûreté</a>
          </div>
        </li>

        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
      <a href="contact.html" class="btn btn-orange nav-cta">Devis gratuit</a>
      <div class="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  /* Active link */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    const href = l.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      l.classList.add('active');
    }
  });

  /* Hamburger */
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
    document.querySelectorAll('.nav-link:not([data-toggle])').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });

    /* Mobile dropdown toggle */
    document.querySelectorAll('[data-toggle="dropdown"]').forEach(btn => {
      btn.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const dd = btn.closest('.nav-item').querySelector('.dropdown');
          const isOpen = dd.style.display === 'flex';
          dd.style.display = isOpen ? '' : 'flex';
          dd.style.flexDirection = 'column';
        }
      });
    });
  }
});
