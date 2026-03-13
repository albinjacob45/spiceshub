/* nav-footer.js – injects shared nav, footer, floating WA button */

(function () {
  /* ---- Determine active page ---- */
  const page = location.pathname.split('/').pop() || 'index.html';

  /* ---- NAV HTML ---- */
  const navHTML = `
  <nav id="mainNav">
    <a href="index.html" class="nav-logo" style="display:flex;align-items:center;gap:0;text-decoration:none;background:rgba(255,255,255,0.97);border:2px solid var(--gold);padding:0;height:58px;overflow:hidden;flex-shrink:0;">
      <!-- Logo badge icon -->
      <div style="height:58px;width:58px;flex-shrink:0;background:#fff;display:flex;align-items:center;justify-content:center;border-right:1px solid var(--cream-dark);padding:4px;">
        <img src="images/logo.jpeg" alt="SpicesHub Logo" style="height:100%;width:100%;object-fit:contain;">
      </div>
      <!-- Brand name text -->
      <div style="padding:0 14px;display:flex;flex-direction:column;justify-content:center;background:#fff;">
        <span style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:700;color:var(--green-deep);letter-spacing:1px;line-height:1.1;">SpicesHub</span>
        <span style="font-family:'Jost',sans-serif;font-size:0.58rem;font-weight:600;color:var(--gold);letter-spacing:2px;text-transform:uppercase;">A Unit of MJ Spices</span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html"     class="${page==='index.html'?'active':''}">Home</a></li>
      <li><a href="cardamom.html"  class="${page==='cardamom.html'?'active':''}">Cardamom</a></li>
      <li><a href="pepper.html"    class="${page==='pepper.html'?'active':''}">Pepper</a></li>
      <li><a href="coffee.html"    class="${page==='coffee.html'?'active':''}">Coffee</a></li>
      <li><a href="order.html"     class="${page==='order.html'?'active':''}">Order</a></li>
      <li><a href="contact.html"   class="${page==='contact.html'?'active':''}">Contact</a></li>
      <li><a href="about_us.html"  class="${page==='about_us.html'?'active':''}">About Us</a></li>
    </ul>
    <button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html"    onclick="closeMobileMenu()">Home</a>
    <a href="cardamom.html" onclick="closeMobileMenu()">Cardamom</a>
    <a href="pepper.html"   onclick="closeMobileMenu()">Pepper</a>
    <a href="coffee.html"   onclick="closeMobileMenu()">Coffee</a>
    <a href="order.html"    onclick="closeMobileMenu()">Order</a>
    <a href="contact.html"  onclick="closeMobileMenu()">Contact</a>
    <a href="about_us.html" onclick="closeMobileMenu()">About Us</a>
  </div>`;

  /* ---- FOOTER HTML ---- */
  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" style="display:inline-flex;align-items:center;gap:0;text-decoration:none;background:rgba(255,255,255,0.97);border:2px solid var(--gold);height:70px;overflow:hidden;margin-bottom:1.2rem;">
          <div style="height:70px;width:70px;flex-shrink:0;background:#fff;display:flex;align-items:center;justify-content:center;border-right:1px solid var(--cream-dark);padding:5px;">
            <img src="images/logo.jpeg" alt="SpicesHub Logo" style="height:100%;width:100%;object-fit:contain;">
          </div>
          <div style="padding:0 16px;display:flex;flex-direction:column;justify-content:center;">
            <span style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:700;color:var(--green-deep);letter-spacing:1px;line-height:1.1;">SpicesHub</span>
            <span style="font-family:'Jost',sans-serif;font-size:0.6rem;font-weight:600;color:var(--gold);letter-spacing:2px;text-transform:uppercase;">A Unit of MJ Spices</span>
          </div>
        </a>
        <p>Premium export-quality spices sourced directly from the verdant farms of Kerala, India. A Unit of MJ Spices.</p>
        <div class="social-links">
          <a href="https://instagram.com/myspiceshub" class="social-link" target="_blank" aria-label="Instagram">📷</a>
          <a href="#" class="social-link" aria-label="Facebook">📘</a>
          <a href="https://wa.me/917907167648" class="social-link" target="_blank" aria-label="WhatsApp">💬</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about_us.html">About Us</a></li>
          <li><a href="order.html">Place Order</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="cardamom.html">Green Cardamom</a></li>
          <li><a href="pepper.html">Black Pepper</a></li>
          <li><a href="coffee.html">Coffee Beans</a></li>
          <li><a href="order.html">Bulk Orders</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+917907167648">+91 7907167648</a></li>
          <li><a href="tel:+919495121533">+91 9495121533</a></li>
          <li><a href="mailto:mjspiceshub@gmail.com">mjspiceshub@gmail.com</a></li>
          <li><a href="https://wa.me/917907167648" target="_blank">WhatsApp Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 SpicesHub – A Unit of MJ Spices. All rights reserved.</p>
      <p>Cardamom Supplier · Black Pepper Exporter · Coffee Bean Supplier · Kerala, India</p>
    </div>
  </footer>

  <!-- Floating WhatsApp -->
  <a href="https://wa.me/917907167648?text=Hello%20SpicesHub%2C%20I%20would%20like%20to%20enquire%20about%20your%20spices."
     class="float-wa" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    💬
    <span class="float-wa-tip">Chat on WhatsApp</span>
  </a>`;

  /* ---- Inject ---- */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---- Reveal on scroll ---- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* ---- Mobile menu helpers ---- */
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const btn   = document.querySelector('.hamburger');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});
