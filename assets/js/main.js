document.addEventListener('DOMContentLoaded', function() {
  // --- Navigation Active State ---
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navigation-list a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    // Check for exact match or if we're on the homepage
    if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
      link.classList.add('active');
    }
  });

  // --- Mobile Navigation Toggle ---
  const navbarToggle = document.querySelector('.navbar-toggle');
  const mainNav = document.querySelector('.navigation-list');
  
  if (navbarToggle && mainNav) {
    navbarToggle.addEventListener('click', function() {
      // Toggle a class on the navigation list
      mainNav.classList.toggle('mobile-active');
      
      // Optionally toggle a class on the button itself for styling (e.g. hamburger to X)
      navbarToggle.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      document.body.classList.toggle('no-scroll');
    });
  }

  // --- Fade-in Animations on Scroll (Intersection Observer) ---
  const fadeInElements = document.querySelectorAll('.fade-in-up');
  
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeInElements.forEach(el => {
    observer.observe(el);
  });
});
