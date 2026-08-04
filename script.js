// Product Data - BOTH original and new images combined
const productData = [
  // ===== ORIGINAL PRODUCTS (from the first version) =====
  { name: "Blush & Bloom Bouquet", image: "blush-bloom-bouquet.jpg", desc: "Delicate pastel crochet flowers, perfect as a forever gift.", category: "bouquet" },
  { name: "BT21 Amigurumi Set", image: "bt21-set.jpg", desc: "Adorable BT21 inspired plush set + Whalien 52 keychain.", category: "keychain" },
  { name: "Cat Keychain", image: "cat-keychain.jpg", desc: "Tiny crochet cat charm, lightweight and cute.", category: "keychain" },
  { name: "Chopper Keychain", image: "chopper-keychain.jpg", desc: "Mini Tony Tony Chopper keychain — anime lover's dream.", category: "keychain" },
  { name: "Coquette Bow Keychain", image: "coquette-bow-keychain.jpg", desc: "Feminine bow keychain, sweet and aesthetic.", category: "keychain" },
  { name: "Crochet Flowers", image: "crochet-flowers.jpg", desc: "Assorted crochet blooms, lovely for decoration or gifts.", category: "bouquet" },
  { name: "Gesang Tulip Flower Bouquet", image: "gesang-tulip-flower.jpg", desc: "Elegant tulip bouquet, handcrafted petal by petal.", category: "bouquet" },
  { name: "Hair Bandana", image: "hair-bandana.jpg", desc: "Crochet bandana — boho chic and breathable.", category: "wearable" },
  { name: "Mesh Tote Bag", image: "mesh-tote-bag.jpg", desc: "Stylish mesh tote, perfect for beach or market.", category: "wearable" },
  { name: "Mini Flower Pot Coaster", image: "mini-flower-pot.jpg", desc: "Adorable coaster set shaped like mini flower pots.", category: "bouquet" },
  { name: "Rose Bouquet", image: "rose-bouquet.jpg", desc: "Classic red/pink rose bouquet, timeless and romantic.", category: "bouquet" },
  { name: "Shark Keychain", image: "shark-keychain.jpg", desc: "Mini shark plush keychain — fierce but cute!", category: "keychain" },
  { name: "Summer Sunshine Mesh Tote", image: "summer-sunshine-tote-bag.jpg", desc: "Bright yellow mesh tote for sunny days.", category: "wearable" },
  { name: "Tulip Flowers Bouquet", image: "tulip-flower.jpg", desc: "Charming tulip bouquet with love details.", category: "bouquet" },
  { name: "Tulip Keychain", image: "tulip-keychain.jpg", desc: "Mini tulip keychain, keeps flowers with you always.", category: "keychain" },

  // ===== NEW PRODUCTS (from the new images) =====
  // Wearables
  { name: "Crochet Headband", image: "CROCHET HEADBAND.png", desc: "Soft and stylish crochet headband, perfect for any outfit.", category: "wearable" },
  { name: "Bucket Hat", image: "BUCKET HAT CROCHET.png", desc: "Chunky crochet bucket hat — trendy and handcrafted.", category: "wearable" },
  { name: "Bunny Hat", image: "BUNNY HAT CROCHET.png", desc: "Adorable bunny ear hat, cute and cozy for all ages.", category: "wearable" },
  { name: "Crochet Cat Collar", image: "CROCHET CAT COLLAR.png", desc: "Handmade crochet collar for your feline friend.", category: "wearable" },
  { name: "Pouch", image: "POUCH CROCHET.png", desc: "Crochet pouch — perfect for small treasures or gifts.", category: "wearable" },
  { name: "Water Bottle Holder", image: "WATER BOTTLE HOLDER CROCHET.png", desc: "Eco-friendly crochet water bottle holder, carry in style.", category: "wearable" },
  
  // Bouquets
  { name: "Sunflower Bouquet", image: "SUNFLOWER BOUQUET.png", desc: "Bright sunflower bouquet, handmade with love.", category: "bouquet" },
  { name: "Flower Pot", image: "FLOWER POT.png", desc: "Mini crochet flower pot — everlasting bloom.", category: "bouquet" },
  
  // Keychains
  { name: "Teddy & My Melody Keychain", image: "TEDDY AND MY MELODY KEYCHAIN.png", desc: "Cute teddy and My Melody duo keychain.", category: "keychain" },
  { name: "Bunny Keychain", image: "BUNNY KEYCHAIN.png", desc: "Fluffy bunny keychain, soft and adorable.", category: "keychain" },
  { name: "Siamese Keychain", image: "SIAMESE KEYCHAINS.png", desc: "Siamese cat keychain — purrfect for cat lovers.", category: "keychain" },
  { name: "Initial Keychain", image: "INITIAL KEYCHAINS.png", desc: "Personalized initial keychain, great for gifting.", category: "keychain" },
  { name: "Bow Keychain", image: "BOW KEYCHAINS.png", desc: "Elegant bow keychain with a delicate touch.", category: "keychain" },
  { name: "Sharks Keychain", image: "SHARKS KEYCHAIN.png", desc: "Mini shark keychain — fierce but cute!", category: "keychain" },
  { name: "Sunflower Keychain", image: "SUNFLOWER KEYCHAIN.png", desc: "Mini sunflower keychain, brings sunshine everywhere.", category: "keychain" },
  { name: "Macaron Keychain", image: "MACARON KEYCHAIN.png", desc: "Sweet macaron keychain, colorful and cute.", category: "keychain" },
  { name: "Nong Nao Doll Keychain", image: "NONG NAO DOLL KEYCHAIN.png", desc: "Nong Nao doll keychain, super soft and huggable.", category: "keychain" },
  { name: "Polar Bear Keychain", image: "POLAR BEAR KEYCHAIN.png", desc: "Fluffy polar bear keychain, icy cute.", category: "keychain" },
  { name: "Latte Keychain", image: "LATTE KEYCHAIN.png", desc: "Latte art keychain — 'A whole latte love' for your best teacher.", category: "keychain" },
  { name: "Rafayel Keychain", image: "RAFAYEL KEYCHAIN.png", desc: "Rafayel inspired keychain, mystical and charming.", category: "keychain" },
  
  // SPECIAL: CARDIGAN (highlighted as special work)
  { name: "Cardigan", image: "Cardigan.png", desc: "Hand-crocheted cardigan — a special work of art. Cozy, soft, and uniquely made.", category: "special" }
];

// Render products
function renderProducts() {
  const container = document.getElementById('productsContainer');
  if (!container) return;
  
  const categories = {
    wearable: { label: '👗 Wearables', items: [] },
    bouquet: { label: '💐 Bouquets', items: [] },
    keychain: { label: '🔑 Keychains', items: [] },
    special: { label: '⭐ Special Work', items: [] }
  };
  
  productData.forEach(p => {
    if (p.category === 'special') categories.special.items.push(p);
    else if (p.category === 'wearable') categories.wearable.items.push(p);
    else if (p.category === 'bouquet') categories.bouquet.items.push(p);
    else if (p.category === 'keychain') categories.keychain.items.push(p);
  });
  
  let html = '';
  
  // Special category (Cardigan) - displayed first
  if (categories.special.items.length > 0) {
    html += `<div class="category-header"><h3>${categories.special.label}</h3><div class="category-line"></div></div>`;
    html += `<div class="collection-grid">`;
    categories.special.items.forEach(p => {
      html += createProductCard(p, true);
    });
    html += `</div>`;
  }
  
  // Wearables
  if (categories.wearable.items.length > 0) {
    html += `<div class="category-header"><h3>${categories.wearable.label}</h3><div class="category-line"></div></div>`;
    html += `<div class="collection-grid">`;
    categories.wearable.items.forEach(p => {
      html += createProductCard(p, false);
    });
    html += `</div>`;
  }
  
  // Bouquets
  if (categories.bouquet.items.length > 0) {
    html += `<div class="category-header"><h3>${categories.bouquet.label}</h3><div class="category-line"></div></div>`;
    html += `<div class="collection-grid">`;
    categories.bouquet.items.forEach(p => {
      html += createProductCard(p, false);
    });
    html += `</div>`;
  }
  
  // Keychains
  if (categories.keychain.items.length > 0) {
    html += `<div class="category-header"><h3>${categories.keychain.label}</h3><div class="category-line"></div></div>`;
    html += `<div class="collection-grid">`;
    categories.keychain.items.forEach(p => {
      html += createProductCard(p, false);
    });
    html += `</div>`;
  }
  
  container.innerHTML = html;
  
  // Attach click events to product cards
  document.querySelectorAll('.product-card').forEach((card) => {
    const name = card.dataset.name || 'Product';
    const desc = card.dataset.desc || 'Handcrafted with love';
    const img = card.dataset.img || '';
    card.addEventListener('click', () => {
      openModal(name, desc, img);
    });
  });
}

// Helper to create product card HTML
function createProductCard(product, isSpecial) {
  const specialClass = isSpecial ? 'special-card' : '';
  const imgSrc = product.image || '';
  const name = product.name || 'Crochet Item';
  const desc = product.desc || 'Handcrafted with love';
  
  const imageHtml = imgSrc ? 
    `<img class="product-image" src="${imgSrc}" alt="${name}" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'product-icon-fallback\\'><i class=\\'fas fa-feather-alt\\'></i></div>';">` :
    `<div class="product-icon-fallback"><i class="fas fa-feather-alt"></i></div>`;
  
  return `
    <div class="product-card ${specialClass}" data-name="${name}" data-desc="${desc}" data-img="${imgSrc}">
      ${imageHtml}
      <h3>${name}</h3>
      <div class="product-desc">${desc}</div>
      <div class="inquiry-tag"><i class="fab fa-facebook-messenger"></i> DM to order</div>
    </div>
  `;
}

// Modal functions
function openModal(name, desc, imgSrc) {
  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  
  if (modalImg && modalTitle && modalDesc) {
    modalImg.src = imgSrc || '';
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

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
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
