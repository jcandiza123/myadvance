// GLOBAL FUNCTIONS (For HTML onclick events)
// ==========================================
window.toggleDropdown = function(id) {
  const el = document.getElementById(id);
  const arrow = document.getElementById('login-arrow');
  if (el) {
    if (el.classList.contains('invisible')) {
      el.classList.remove('invisible', 'opacity-0', 'translate-y-2', 'translate-y-4');
      el.classList.add('visible', 'opacity-100', 'translate-y-0');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    } else {
      el.classList.add('invisible', 'opacity-0', 'translate-y-2', 'translate-y-4');
      el.classList.remove('visible', 'opacity-100', 'translate-y-0');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    }
  }
};

window.toggleMobileMenu = function() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
};

window.openModal = function() {
  const modal = document.getElementById('demoModal');
  const modalContent = document.getElementById('modalContent');
  if (modal && modalContent) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; 
    setTimeout(() => {
      modalContent.classList.remove('scale-95', 'opacity-0');
      modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
  }
};

window.closeModal = function() {
  const modal = document.getElementById('demoModal');
  const modalContent = document.getElementById('modalContent');
  if (modal && modalContent) {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }, 300); 
  }
};

window.switchTab = function(tabId, btnElement) {
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-theme-primary', 'text-white', 'shadow-corporate-badge');
    btn.classList.add('bg-white', 'text-theme-dark', 'hover:bg-gray-100', 'shadow-sm', 'border', 'border-gray-100');
    const arrow = btn.querySelector('.tab-arrow');
    if(arrow) {
      arrow.classList.remove('opacity-100');
      arrow.classList.add('opacity-0');
    }
  });
  
  const targetTab = document.getElementById(tabId);
  if(targetTab) targetTab.classList.add('active');
  
  if(btnElement) {
    btnElement.classList.remove('bg-white', 'text-theme-dark', 'hover:bg-gray-100', 'shadow-sm', 'border', 'border-gray-100');
    btnElement.classList.add('bg-theme-primary', 'text-white', 'shadow-corporate-badge');
    const btnArrow = btnElement.querySelector('.tab-arrow');
    if(btnArrow) {
      btnArrow.classList.remove('opacity-0');
      btnArrow.classList.add('opacity-100');
    }
  }
};

// ==========================================
// SCOPED EVENT LISTENERS & ANIMATIONS
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  
  const cursor = document.getElementById("cursor");
  const animatedText = document.getElementById("animated-text");

  if (cursor && animatedText && typeof gsap !== 'undefined') {
    if(typeof TextPlugin !== 'undefined') gsap.registerPlugin(TextPlugin);
    const words = ["deals.", "funds.", "risk."];
    gsap.to("#cursor", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "power2.inOut" });
    
    let tlMaster = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
      tlText.to("#animated-text", { duration: 0.7, text: word, ease: "none" });
      tlMaster.add(tlText);
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      });
    }, revealOptions);
    revealElements.forEach(el => revealObserver.observe(el));
  }

  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('desktop-login-dropdown');
    if (dropdown) {
      const button = dropdown.previousElementSibling;
      const arrow = document.getElementById('login-arrow');
      if (!dropdown.contains(e.target) && button && !button.contains(e.target)) {
        dropdown.classList.add('invisible', 'opacity-0', 'translate-y-4', 'translate-y-2');
        dropdown.classList.remove('visible', 'opacity-100', 'translate-y-0');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('demoModal');
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      window.closeModal();
    }
  });

  const slider = document.getElementById('merchant-slider');
  const countDisplay = document.getElementById('merchant-count');
  const revenueDisplay = document.getElementById('revenue-output');

  if(slider && countDisplay && revenueDisplay) {
    slider.addEventListener('input', function() {
      const merchants = parseInt(this.value);
      countDisplay.textContent = merchants === 5000 ? '5,000+' : merchants.toLocaleString();
      const annualRevenue = merchants * 10 * 12;
      revenueDisplay.textContent = '$' + annualRevenue.toLocaleString();
    });
  }
});
