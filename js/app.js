/**
 * Tutedude Platform Interactive Script
 * Handles global theming, sticky navbars, modal previews, mobile drawers, filtering, and refund simulation
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initStickyNavbar();
  initStickyBottomBar();
  initModals();
  initMobileDrawer();
});

/* ==========================================================================
   Theme Management (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('td_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggleLabels(savedTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleTheme();
    });
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('td_theme', newTheme);
  updateThemeToggleLabels(newTheme);
}

function updateThemeToggleLabels(theme) {
  const icons = document.querySelectorAll('.theme-toggle-icon');
  const labels = document.querySelectorAll('.theme-toggle-text');
  icons.forEach(icon => {
    icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  });
  labels.forEach(label => {
    label.textContent = theme === 'dark' ? 'Light' : 'Dark';
  });
}

/* ==========================================================================
   Sticky Navbar Transition
   ========================================================================== */
function initStickyNavbar() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   Sticky Bottom Enrollment CTA Bar
   ========================================================================== */
function initStickyBottomBar() {
  const stickyBar = document.querySelector('.sticky-bottom-enrollment');
  const heroCard = document.querySelector('.enrollment-floating-card') || document.querySelector('.hero-section');
  if (!stickyBar || !heroCard) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(heroCard);
}

/* ==========================================================================
   Mobile Navigation Drawer & Mobile Demo FAB
   ========================================================================== */
function initMobileDrawer() {
  // Close drawer when clicking any nav link inside it
  document.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleMobileDemo() {
  const sheet = document.getElementById('mobileDemoSheet');
  const backdrop = document.getElementById('mobileDemoBackdrop');
  if (!sheet) return;

  const isOpen = sheet.classList.contains('open');
  if (isOpen) {
    closeMobileDemo();
  } else {
    sheet.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileDemo() {
  const sheet = document.getElementById('mobileDemoSheet');
  const backdrop = document.getElementById('mobileDemoBackdrop');
  if (sheet) sheet.classList.remove('open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Modals & Video Player Simulation
   ========================================================================== */
function initModals() {
  // Close modal on backdrop click or close button
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('.modal-close-btn')) {
        closeAllModals();
      }
    });
  });

  // ESC key closes modals & drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeMobileMenu();
      closeMobileDemo();
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

/* Preview Video Simulator */
function openVideoPreview(title, lessonNum) {
  const modal = document.getElementById('videoPreviewModal');
  if (!modal) return;
  const titleEl = modal.querySelector('.video-modal-title');
  const subEl = modal.querySelector('.video-modal-sub');
  if (titleEl) titleEl.textContent = title || "Course Lesson Preview";
  if (subEl) subEl.textContent = `Lesson #${lessonNum || 1} • Interactive Preview • Tutedude HD Streaming`;
  openModal('videoPreviewModal');
}

/* ==========================================================================
   Toast Notification Generator
   ========================================================================== */
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = `
      position: fixed;
      top: 16px;
      right: 16px;
      left: 16px;
      max-width: 400px;
      margin: 0 auto;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bg = type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#2563eb';
  toast.style.cssText = `
    background: ${bg};
    color: #ffffff;
    padding: 12px 18px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideUp 0.3s ease;
    pointer-events: auto;
  `;
  const icon = type === 'success' ? 'check_circle' : 'info';
  toast.innerHTML = `<span class="material-symbols-outlined" style="font-size:20px;">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
