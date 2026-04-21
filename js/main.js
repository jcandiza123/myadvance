// ==========================================
// GLOBAL FUNCTIONS (For HTML onclick events)
// ==========================================

window.toggleDropdown = function(id) {
  const el = document.getElementById(id);
  const arrow = document.getElementById('login-arrow');
  if (el) {
    if (el.classList.contains('invisible')) {
      el.classList.remove('invisible', 'opacity-0', 'translate-y-2');
      el.classList.add('visible', 'opacity-100', 'translate-y-0');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    } else {
      el.classList.add('invisible', 'opacity-0', 'translate-y-2');
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
// Wrapping this inside DOMContentLoaded prevents "already declared" syntax errors!

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Reveal Animations (Scroll Observer)
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 2. Click outside Desktop Dropdown to close it
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('desktop-login-dropdown');
    if (dropdown) {
      const button = dropdown.previousElementSibling;
      const arrow = document.getElementById('login-arrow');
      if (!dropdown.contains(e.target) && button && !button.contains(e.target)) {
        dropdown.classList.add('invisible', 'opacity-0', 'translate-y-2');
        dropdown.classList.remove('visible', 'opacity-100', 'translate-y-0');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    }
  });

  // 3. Escape key to close the Demo Modal
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('demoModal');
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      window.closeModal();
    }
  });

  // 4. ROI Calculator Logic (Only runs if elements exist on the page)
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
