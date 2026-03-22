// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (navLink) {
        navLink.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .department-card, .visual-card, .stat-item');
animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    company: document.getElementById('company').value,
    message: document.getElementById('message').value
  };
  
  // Show success message
  alert('感谢您的留言！我们会尽快与您联系。\n\nThank you for your message! We will contact you soon.');
  
  // Reset form
  contactForm.reset();
  
  // In production, you would send this data to a backend service
  console.log('Form submitted:', formData);
});

// ===== Parallax Effect for Hero Background =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroBackground && scrolled < window.innerHeight) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ===== Stats Counter Animation =====
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target === Infinity ? '∞' : Math.ceil(target);
      clearInterval(timer);
    } else {
      element.textContent = Math.ceil(current);
    }
  }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = stat.textContent === '∞' ? Infinity : parseInt(stat.textContent);
        if (target !== Infinity) {
          stat.textContent = '0';
          animateCounter(stat, target);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ===== Dynamic Year in Footer =====
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
  footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
}

// ===== Preload Images =====
window.addEventListener('load', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });
});

// ===== Console Easter Egg =====
console.log('%c🦐 RainBox Digital Technology', 'color: #2196F3; font-size: 24px; font-weight: bold;');
console.log('%c科技养虾，用心养人', 'color: #FF9800; font-size: 16px;');
console.log('%cWe are hiring! Contact us at contact@rainbox.tech', 'color: #666; font-size: 12px;');
