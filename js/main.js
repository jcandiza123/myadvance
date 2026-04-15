// =========================================
// 1. GSAP Typing Animation (Hero Section)
// =========================================
// We check if the elements exist first so it doesn't cause errors on pages without them
const cursor = document.getElementById("cursor");
const animatedText = document.getElementById("animated-text");

if (cursor && animatedText) {
  gsap.registerPlugin(TextPlugin);
  const words = ["deals.", "funds.", "risk."];
  
  gsap.to("#cursor", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "power2.inOut" });
  
  let tlMaster = gsap.timeline({ repeat: -1 });
  words.forEach((word) => {
    let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
    tlText.to("#animated-text", { duration: 0.7, text: word, ease: "none" });
    tlMaster.add(tlText);
  });
}

// =========================================
// 2. High-Performance Scroll Reveal 
// =========================================
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    // Add the 'active' class to fade the text in
    entry.target.classList.add('active');
    
    // Stop observing once it has been revealed
    observer.unobserve(entry.target);
  });
}, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));


// =========================================
// 3. Dropdown Logic
// =========================================
window.toggleDropdown = function(id) {
  const el = document.getElementById(id);
  const arrow = document.getElementById('login-arrow');
  
  if (el.classList.contains('invisible')) {
    el.classList.remove('invisible', 'opacity-0', 'translate-y-4');
    el.classList.add('visible', 'opacity-100', 'translate-y-0');
    if(arrow) arrow.style.transform = 'rotate(180deg)';
  } else {
    el.classList.add('invisible', 'opacity-0', 'translate-y-4');
    el.classList.remove('visible', 'opacity-100', 'translate-y-0');
    if(arrow) arrow.style.transform = 'rotate(0deg)';
  }
}

// Close Dropdown when clicking anywhere else on the page
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('desktop-login-dropdown');
  if (dropdown) {
    const button = dropdown.previousElementSibling;
    const arrow = document.getElementById('login-arrow');
    
    if (!dropdown.contains(e.target) && !button.contains(e.target)) {
      dropdown.classList.add('invisible', 'opacity-0', 'translate-y-4');
      dropdown.classList.remove('visible', 'opacity-100', 'translate-y-0');
      if(arrow) arrow.style.transform = 'rotate(0deg)';
    }
  }
});


// =========================================
// 4. Mobile Menu Logic
// =========================================
window.toggleMobileMenu = function() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}


// =========================================
// 5. Modal Logic (Book a Demo)
// =========================================
const modal = document.getElementById('demoModal');
const modalContent = document.getElementById('modalContent');

window.openModal = function() {
  if (modal && modalContent) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevents background scrolling
    
    setTimeout(() => {
      modalContent.classList.remove('scale-95', 'opacity-0');
      modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
  }
}

window.closeModal = function() {
  if (modal && modalContent) {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }, 400); // Matches the CSS transition duration
  }
}

// Close modal when pressing the Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    window.closeModal();
  }
});
