// Product list based on the images provided
const products = [
  { name: "Blush & Bloom Bouquet", image: "blush-bloom-bouquet.jpg", desc: "Delicate pastel crochet flowers, perfect as a forever gift." },
  { name: "BT21 Amigurumi Set", image: "bt21-set.jpg", desc: "Adorable BT21 inspired plush set + Whalien 52 keychain." },
  { name: "Cat Keychain", image: "cat-keychain.jpg", desc: "Tiny crochet cat charm, lightweight and cute." },
  { name: "Chopper Keychain", image: "chopper-keychain.jpg", desc: "Mini Tony Tony Chopper keychain — anime lover's dream." },
  { name: "Coquette Bow Keychain", image: "coquette-bow-keychain.jpg", desc: "Feminine bow keychain, sweet and aesthetic." },
  { name: "Crochet Flowers", image: "crochet-flowers.jpg", desc: "Assorted crochet blooms, lovely for decoration or gifts." },
  { name: "Gesang Tulip Flower Bouquet", image: "gesang-tulip-flower.jpg", desc: "Elegant tulip bouquet, handcrafted petal by petal." },
  { name: "Hair Bandana", image: "hair-bandana.jpg", desc: "Crochet bandana — boho chic and breathable." },
  { name: "Mesh Tote Bag", image: "mesh-tote-bag.jpg", desc: "Stylish mesh tote, perfect for beach or market." },
  { name: "Mini Flower Pot Coaster", image: "mini-flower-pot.jpg", desc: "Adorable coaster set shaped like mini flower pots." },
  { name: "Rose Bouquet", image: "rose-bouquet.jpg", desc: "Classic red/pink rose bouquet, timeless and romantic." },
  { name: "Shark Keychain", image: "shark-keychain.jpg", desc: "Mini shark plush keychain — fierce but cute!" },
  { name: "Summer Sunshine Mesh Tote", image: "summer-sunshine-tote-bag.jpg", desc: "Bright yellow mesh tote for sunny days." },
  { name: "Tulip Flowers Bouquet", image: "tulip-flower.jpg", desc: "Charming tulip bouquet with love details." },
  { name: "Tulip Keychain", image: "tulip-keychain.jpg", desc: "Mini tulip keychain, keeps flowers with you always." }
];

// Render product gallery
function renderProductGallery() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const imageHtml = `<img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'product-icon-fallback\\'><i class=\\'fas fa-feather-alt\\'></i></div>';">`;
    
    card.innerHTML = `
      ${imageHtml}
      <h3>${product.name}</h3>
      <div class="product-desc">${product.desc}</div>
      <div class="inquiry-tag"><i class="fab fa-facebook-messenger"></i> DM to order</div>
    `;
    
    card.addEventListener('click', () => {
      openModal(product.name, product.desc, product.image);
    });
    
    grid.appendChild(card);
  });
}

// Modal functions
function openModal(name, desc, imgSrc) {
  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  
  if (modalImg && modalTitle && modalDesc) {
    modalImg.src = imgSrc;
    modalImg.alt = name;
    modalTitle.innerText = name;
    modalDesc.innerText = desc;
    modal.style.display = 'flex';
  }
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.style.display = 'none';
}

// Mobile menu toggle
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('active'));
  }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const navLinks = document.getElementById('navLinks');
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  renderProductGallery();
  initMobileMenu();
  initSmoothScroll();
  
  // Modal close event listeners
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalClose = document.getElementById('modalClose');
  
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('productModal');
    if (e.target === modal) closeModal();
  });
  
  console.log("🧶 Anne-Made crochet shop — DM Robeanne Pagotan on FB to order!");
});