/**
 * Tutedude Platform Interactive Script
 * Handles global theming, sticky navbars, modal previews, filtering, and refund simulation
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initStickyNavbar();
  initStickyBottomBar();
  initModals();
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
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('td_theme', newTheme);
      updateThemeToggleLabels(newTheme);
    });
  });
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
      // If hero card is visible, hide bottom sticky bar. If user scrolls past it, show it.
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

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
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
      top: 60px;
      right: 24px;
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
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideInRight 0.3s ease;
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
