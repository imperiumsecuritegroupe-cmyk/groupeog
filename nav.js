document.addEventListener('DOMContentLoaded', () => {
  const navHTML = `
  <nav id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <div class="logo-icon">🏢</div>
        GROUPE<span>OG</span>
      </a>
      <ul class="nav-menu">
        <li class="nav-item"><a href="index.html" class="nav-link">Accueil</a></li>
        <li class="nav-item nav-item-mega">
          <a href="#" class="nav-link" data-toggle="dropdown">FM Externalisé <span class="arrow">▾</span></a>
          <div class="dropdown">
            <a href="immobilier.html"><span class="dd-icon">🏙️</span> Gestion Immobilière</a>
            <a href="services-generaux.html"><span class="dd-icon">🗂️</span> Services Généraux</a>
            <a href="securite-surete.html"><span class="dd-icon">🛡️</span> Sécurité & Sûreté</a>
            <a href="espaces-verts.html"><span class="dd-icon">🌿</span> Espaces Verts</a>
          </div>
        </li>
        <li class="nav-item nav-item-mega">
          <a href="#" class="nav-link" data-toggle="dropdown">Maintenance Technique <span class="arrow">▾</span></a>
          <div class="dropdown">
            <a href="gros-oeuvres.html"><span class="dd-icon">🏛️</span> Gros Œuvres & Maçonnerie</a>
            <a href="seconds-oeuvres.html"><span class="dd-icon">🔨</span> Seconds Œuvres & Finitions</a>
            <a href="plomberie-chauffage.html"><span class="dd-icon">🔧</span> Plomberie & CVC</a>
            <a href="electricite.html"><span class="dd-icon">⚡</span> Électricité & GTB</a>
            <a href="photovoltaique.html"><span class="dd-icon">☀️</span> Énergie Solaire</a>
            <a href="nettoyage.html"><span class="dd-icon">🧹</span> Propreté & Nettoyage</a>
          </div>
        </li>
        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
      <a href="contact.html" class="btn btn-primary nav-cta">Audit gratuit</a>
      <div class="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href') === currentPage) l.classList.add('active');
  });
});
