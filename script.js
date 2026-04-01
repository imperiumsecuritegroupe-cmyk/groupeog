/* ===================== NAVIGATION ===================== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

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

  document.querySelectorAll('[data-toggle="dropdown"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dd = btn.closest('.nav-item').querySelector('.dropdown');
      dd.style.opacity = dd.style.opacity === '1' ? '' : '1';
      dd.style.visibility = dd.style.visibility === 'visible' ? '' : 'visible';
    });
  });
}

/* Active nav link */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(l => {
  if (l.getAttribute('href') === currentPage) l.classList.add('active');
});

/* ===================== SCROLL TOP ===================== */
const scrollBtn = document.getElementById('scroll-top');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===================== ACCORDION ===================== */
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.accordion-header.open').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      btn.classList.add('open');
      body.classList.add('open');
    }
  });
});

/* ===================== CONTACT FORM ===================== */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.textContent = 'Message envoyé !';
    btn.disabled = true;
    btn.style.background = '#27ae60';
    setTimeout(() => {
      btn.textContent = 'Envoyer le message';
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 4000);
  });
}

/* ===================== SCROLL ANIMATIONS ===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .feature-card, .info-card, .testimonial-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});

/* ===================== COUNTER ANIMATION ===================== */
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + (el.dataset.suffix || '');
  }, 16);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
