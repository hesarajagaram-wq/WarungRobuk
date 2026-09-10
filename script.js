// ============ KONFIGURASI ADMIN ============
const WHATSAPP_NUMBER = "6285960426687";
const EMAIL = "warungrobux@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/WarungRobuxGG/";


const LEGAL_CONTENT = {
  privacy: {
    title: "Kebijakan Privasi",
    html: `
      <p>WarungRobux menghargai privasi setiap pelanggan. Data yang diberikan saat checkout digunakan untuk memproses pesanan dan membantu pelayanan pelanggan.</p>
      <h4>Data yang dikumpulkan</h4>
      <ul>
        <li>Username Roblox untuk kebutuhan pemrosesan produk.</li>
        <li>Catatan pesanan yang kamu isi secara sukarela.</li>
        <li>Detail komunikasi pesanan yang kamu sampaikan melalui WhatsApp admin.</li>
      </ul>
      <h4>Penggunaan data</h4>
      <p>Data digunakan hanya untuk keperluan pemesanan, komunikasi dengan admin, pengecekan transaksi, dan dukungan pelanggan. WarungRobux tidak meminta password akun Roblox melalui website ini.</p>
      <h4>Keamanan</h4>
      <p>Jangan pernah mengirimkan password atau kode keamanan akun melalui chat. Jika ada permintaan data sensitif yang mencurigakan, hubungi admin resmi WarungRobux.</p>
    `
  },
  terms: {
    title: "Syarat & Ketentuan",
    html: `
      <p>Dengan menggunakan WarungRobux dan melakukan pemesanan, pelanggan dianggap telah membaca dan menyetujui syarat berikut.</p>
      <h4>Pesanan</h4>
      <ul>
        <li>Pelanggan wajib memberikan data pesanan yang benar dan dapat dihubungi.</li>
        <li>Pesanan mulai diproses setelah pembayaran dikonfirmasi oleh admin.</li>
        <li>Waktu proses dapat berbeda berdasarkan jenis produk, antrian, dan kondisi layanan.</li>
      </ul>
      <h4>Gamepass dan Joki</h4>
      <p>Untuk Gamepass, pelanggan wajib memberikan tautan atau detail yang benar. Untuk layanan Joki, detail yang diperlukan harus disepakati terlebih dahulu dengan admin. Pelanggan bertanggung jawab atas kebenaran informasi yang diberikan.</p>
      <h4>Pembayaran</h4>
      <p>Metode dan instruksi pembayaran diberikan oleh admin melalui WhatsApp. Jangan melakukan pembayaran ke nomor atau rekening yang tidak dikonfirmasi oleh admin.</p>
    `
  },
  refund: {
    title: "Kebijakan Refund",
    html: `
      <p>Refund dapat diajukan apabila pesanan tidak dapat diproses karena kesalahan dari pihak WarungRobux, setelah dilakukan pemeriksaan oleh admin.</p>
      <h4>Kondisi yang dapat dipertimbangkan</h4>
      <ul>
        <li>Produk tidak dapat dikirim atau layanan tidak dapat dilakukan karena kendala dari pihak toko.</li>
        <li>Terjadi pembayaran ganda dan kelebihan pembayaran dapat diverifikasi.</li>
        <li>Kasus lain akan diperiksa berdasarkan bukti transaksi dan kondisi pesanan.</li>
      </ul>
      <h4>Kondisi yang tidak otomatis mendapatkan refund</h4>
      <p>Kesalahan username, tautan Gamepass, atau detail lain yang diberikan pelanggan dapat memengaruhi kelayakan refund. Pesanan yang sudah berhasil diproses umumnya tidak dapat dibatalkan.</p>
      <h4>Cara mengajukan</h4>
      <p>Hubungi admin melalui WhatsApp dengan menyertakan kode transaksi, bukti pembayaran, dan penjelasan masalah. Keputusan refund dilakukan setelah verifikasi.</p>
    `
  }
};

// ============ DATA PRODUK (mudah diedit) ============
const PRODUCTS = [
  { id: "rbx-80",    kategori: "robux",    nama: "80 Robux",     harga: 15000,  hargaCoret: 18000, gambar: "assets/robux.jpeg",    badge: "",       populer: true,  terlaris: false },
  { id: "rbx-400",   kategori: "robux",    nama: "400 Robux",    harga: 68000,  hargaCoret: 75000, gambar: "assets/robux.jpeg",    badge: "Hemat",  populer: true,  terlaris: true  },
  { id: "rbx-800",   kategori: "robux",    nama: "800 Robux",    harga: 130000, hargaCoret: 145000,gambar: "assets/robux.jpeg",    badge: "Populer",populer: true,  terlaris: true  },
  { id: "rbx-1700",  kategori: "robux",    nama: "1.700 Robux",  harga: 265000, hargaCoret: 290000,gambar: "assets/robux.jpeg",    badge: "",       populer: true,  terlaris: false },
  { id: "rbx-4500",  kategori: "robux",    nama: "4.500 Robux",  harga: 650000, hargaCoret: 700000,gambar: "assets/robux.jpeg",    badge: "Hemat",  populer: true,  terlaris: true  },
  { id: "rbx-10000", kategori: "robux",    nama: "10.000 Robux", harga: 1350000,hargaCoret: 1450000,gambar: "assets/robux.jpeg",   badge: "",       populer: true,  terlaris: false },
  { id: "gp-basic",  kategori: "gamepass", nama: "Gamepass Custom (≤50rb)",  harga: 55000,  hargaCoret: 0, gambar: "assets/gp1.jpeg", badge: "",        populer: true, terlaris: false },
  { id: "gp-mid",    kategori: "gamepass", nama: "Gamepass Custom (≤150rb)", harga: 155000, hargaCoret: 0, gambar: "assets/gp2.jpeg", badge: "Populer", populer: true, terlaris: true  },
  { id: "gp-big",    kategori: "gamepass", nama: "Gamepass Custom (≤500rb)", harga: 495000, hargaCoret: 0, gambar: "assets/gp3.jpeg", badge: "",        populer: true, terlaris: false  },
  { id: "joki-level","kategori": "joki",   nama: "Joki Level 1-50",  harga: 45000, hargaCoret: 55000, gambar: "assets/1-MAX.jpeg", badge: "Best",    populer: true, terlaris: true  },
  { id: "joki-badge","kategori": "joki",   nama: "Joki Item Limited", harga: 60000, hargaCoret: 0, gambar: "assets/limited.jpeg", badge: "",        populer: true, terlaris: false },
  { id: "joki-event","kategori": "joki",   nama: "Joki Event Terbatas", harga: 75000, hargaCoret: 85000, gambar: "assets/event.jpeg", badge: "Baru",   populer: true, terlaris: false },
  { id: "item-limited","kategori": "item", nama: "Item Limited Avatar", harga: 250000, hargaCoret: 0, gambar: "assets/avatar.jpeg", badge: "Langka", populer: true, terlaris: true },
];

// ============ DATA TESTIMONI (mudah diedit) ============
const TESTIMONIALS = [
  { nama: "Dimas A.",  produk: "800 Robux",        rating: 5, komentar: "Prosesnya cepat banget, kurang dari 10 menit Robux udah masuk. Recommended!" },
  { nama: "Sarah K.",  produk: "Joki Level 1-50",   rating: 5, komentar: "Admin ramah dan responsif, jokinya juga rapi. Puas banget belanja di sini." },
  { nama: "Bagus P.",  produk: "Gamepass Custom",   rating: 4, komentar: "Harga bersaing dan pembayaran gampang lewat WhatsApp. Bakal order lagi." },
  { nama: "Rina W.",   produk: "4.500 Robux",       rating: 5, komentar: "Sudah langganan dari lama, selalu aman dan tanpa perlu kasih password akun." },
  { nama: "Fajar T.",  produk: "400 Robux",         rating: 5, komentar: "Top up malam-malam pun tetap diproses cepat. Mantap pelayanannya." },
  { nama: "Nadia S.",  produk: "Joki Event Terbatas", rating: 4, komentar: "Komunikasi lancar, hasil sesuai request. Terima kasih WarungRobux!" },
];

// ============ DATA FAQ (mudah diedit) ============
const FAQS = [
  { q: "Bagaimana cara membeli Robux?", a: "Pilih produk Robux sesuai nominal yang diinginkan pada bagian Produk, klik Tambah ke Keranjang, buka keranjang, lalu lanjutkan checkout." },
  { q: "Berapa lama proses pesanan?", a: "Rata-rata pesanan diproses dalam 5-15 menit setelah pembayaran dikonfirmasi oleh admin, tergantung jenis produk dan antrian." },
  { q: "Bagaimana cara membeli Gamepass?", a: "Pilih kategori Gamepass, pilih paket sesuai harga Gamepass tujuan, lalu isi tautan/detail Gamepass pada kolom catatan saat checkout." },
  { q: "Bagaimana cara order Joki?", a: "Pilih layanan Joki yang diinginkan, tambahkan ke keranjang, lalu koordinasikan jadwal joki bersama admin via WhatsApp setelah checkout." },
  { q: "Bagaimana cara pembayaran?", a: "Setelah checkout, kamu akan diarahkan ke WhatsApp admin dengan rincian pesanan dan kode transaksi otomatis. Admin akan memberikan instruksi metode pembayaran yang tersedia." },
  { q: "Bagaimana cara cek transaksi?", a: "Gunakan form Cek Transaksi dengan memasukkan Kode Transaksi (mis. WR-2026-0001) atau Username Roblox untuk melihat status pesanan kamu." },
];

// ============ STATE ============
let currentFilter = "semua";
let currentSearch = "";
let cart = []; // { id, qty }
let orderHistory = []; // { code, items:[{nama,qty,harga}], username, note, total, status, date }
let orderCounter = 0;
let loggedInUser = null;

// ============ HELPERS ============
function formatRupiah(num){
  return "Rp" + num.toLocaleString("id-ID");
}

function buildWhatsAppLink(number, message){
  const cleaned = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

function showToast(msg){
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2600);
}

function findProduct(id){
  return PRODUCTS.find(p => p.id === id);
}

function generateTransactionCode(){
  orderCounter += 1;
  const year = new Date().getFullYear();
  return `WR-${year}-${String(orderCounter).padStart(4, "0")}`;
}

// ============ RENDER: PRODUCT CARD ============
function renderProductCard(p, variant){
  const badgeHtml = p.badge
    ? `<span class="product-badge ${variant === 'terlaris' ? 'best' : ''}">${p.badge}</span>`
    : (variant === "terlaris" ? `<span class="product-badge best">Best Seller</span>` : "");

  const hargaCoretHtml = p.hargaCoret ? `<small>${formatRupiah(p.hargaCoret)}</small>` : "";

  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.kategori = p.kategori;
  card.innerHTML = `
    <div class="product-thumb">
      <img src="${p.gambar}" alt="${p.nama}" loading="lazy">
      ${badgeHtml}
    </div>
    <div class="product-body">
      <span class="product-cat">${p.kategori}</span>
      <h3 class="product-name">${p.nama}</h3>
      <div class="product-price">${hargaCoretHtml}${formatRupiah(p.harga)}</div>
      <button class="product-buy" data-id="${p.id}" type="button">+ Tambah Keranjang</button>
    </div>
  `;
  return card;
}

// ============ RENDER: PRODUK POPULER (dengan filter+search) ============
function renderPopulerGrid(){
  const grid = document.getElementById("productGridPopuler");
  const emptyState = document.getElementById("emptyStatePopuler");
  grid.innerHTML = "";

  let list = PRODUCTS.filter(p => p.populer);
  if (currentFilter !== "semua") list = list.filter(p => p.kategori === currentFilter);
  if (currentSearch.trim()){
    const q = currentSearch.trim().toLowerCase();
    list = list.filter(p => p.nama.toLowerCase().includes(q) || p.kategori.toLowerCase().includes(q));
  }

  if (list.length === 0){
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    list.forEach(p => grid.appendChild(renderProductCard(p, "populer")));
  }
}

// ============ RENDER: PRODUK TERLARIS ============
function renderTerlarisGrid(){
  const grid = document.getElementById("productGridTerlaris");
  grid.innerHTML = "";
  PRODUCTS.filter(p => p.terlaris).forEach(p => grid.appendChild(renderProductCard(p, "terlaris")));
}

// ============ RENDER: TESTIMONI ============
function renderTestimonials(){
  const grid = document.getElementById("testiGrid");
  grid.innerHTML = "";
  TESTIMONIALS.forEach(t => {
    const initial = t.nama.trim().charAt(0).toUpperCase();
    const stars = "★".repeat(t.rating) + "☆".repeat(5 - t.rating);
    const card = document.createElement("div");
    card.className = "testi-card";
    card.innerHTML = `
      <div class="testi-head">
        <div class="testi-avatar">${initial}</div>
        <div>
          <div class="testi-name">${t.nama}</div>
          <div class="testi-product">${t.produk}</div>
        </div>
      </div>
      <div class="testi-rating">${stars}</div>
      <p class="testi-comment">"${t.komentar}"</p>
    `;
    grid.appendChild(card);
  });
}

// ============ RENDER: FAQ ACCORDION ============
function renderFaq(){
  const list = document.getElementById("faqList");
  list.innerHTML = "";
  FAQS.forEach((f) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.innerHTML = `
      <button class="faq-q" type="button" aria-expanded="false">
        <span>${f.q}</span>
        <span class="plus">+</span>
      </button>
      <div class="faq-a">${f.a}</div>
    `;
    const btn = item.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      list.querySelectorAll(".faq-item").forEach(el => {
        el.classList.remove("open");
        el.querySelector(".faq-a").style.maxHeight = null;
        el.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen){
        item.classList.add("open");
        const answer = item.querySelector(".faq-a");
        answer.style.maxHeight = answer.scrollHeight + 20 + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
    list.appendChild(item);
  });
}

// ============ NAVBAR: sticky active link on scroll ============
function setupScrollSpy(){
  const sections = document.querySelectorAll("main section[id], .hero[id]");
  const links = document.querySelectorAll(".nav-menu > a.nav-link");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.getAttribute("id");
        links.forEach(l => {
          l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
  sections.forEach(s => observer.observe(s));
}

// ============ MOBILE MENU ============
function setupMobileMenu(){
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  function closeMenu(){
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
    overlay.classList.remove("open");
  }
  function toggleMenu(){
    const willOpen = !mobileMenu.classList.contains("open");
    hamburger.classList.toggle("active", willOpen);
    hamburger.setAttribute("aria-expanded", String(willOpen));
    mobileMenu.classList.toggle("open", willOpen);
    overlay.classList.toggle("open", willOpen);
  }
  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll(".nav-link:not(.mobile-submenu-toggle), .mobile-sub-link, .btn").forEach(a => {
    a.addEventListener("click", closeMenu);
  });

  window.__closeMobileMenu = closeMenu;
}

// ============ NAV DROPDOWN (desktop "Produk") ============
function setupNavDropdown(){
  const dropdown = document.querySelector(".nav-dropdown");
  const toggle = document.getElementById("produkDropdownToggle");
  if (!dropdown || !toggle) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = !dropdown.classList.contains("open");
    dropdown.classList.toggle("open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)){
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  dropdown.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ============ MOBILE SUBMENU (accordion "Produk") ============
function setupMobileSubmenu(){
  const submenu = document.querySelector(".mobile-submenu");
  const toggle = document.getElementById("mobileProdukToggle");
  if (!submenu || !toggle) return;

  toggle.addEventListener("click", () => {
    const willOpen = !submenu.classList.contains("open");
    submenu.classList.toggle("open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });
}

// ============ SEARCH BAR (navbar) ============
function setupNavSearch(){
  const toggle = document.getElementById("searchToggle");
  const bar = document.getElementById("searchBar");
  const input = document.getElementById("navSearchInput");
  const closeBtn = document.getElementById("searchClose");

  toggle.addEventListener("click", () => {
    bar.classList.toggle("open");
    if (bar.classList.contains("open")) setTimeout(() => input.focus(), 200);
  });
  closeBtn.addEventListener("click", () => bar.classList.remove("open"));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
      currentSearch = input.value;
      currentFilter = "semua";
      document.querySelectorAll("#filterChips .chip").forEach(c => c.classList.toggle("active", c.dataset.filter === "semua"));
      document.getElementById("filterSearchInput").value = input.value;
      renderPopulerGrid();
      bar.classList.remove("open");
      document.getElementById("produk-populer").scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ============ FILTER + SEARCH (produk populer) ============
function setupFilters(){
  const chips = document.querySelectorAll("#filterChips .chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.dataset.filter;
      renderPopulerGrid();
    });
  });

  const searchInput = document.getElementById("filterSearchInput");
  searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value;
    renderPopulerGrid();
  });
}

function applyCategoryFilter(kategori){
  currentFilter = kategori;
  currentSearch = "";
  const search = document.getElementById("filterSearchInput");
  if (search) search.value = "";
  document.querySelectorAll("#filterChips .chip").forEach(c => {
    c.classList.toggle("active", c.dataset.filter === kategori);
  });
  renderPopulerGrid();
  document.getElementById("produk-populer").scrollIntoView({ behavior: "smooth" });
}

// ============ KATEGORI CARD & DROPDOWN LINKS -> auto filter & scroll ============
function setupCategoryLinks(){
  const map = { "kategori-robux": "robux", "kategori-gamepass": "gamepass", "kategori-joki": "joki", "kategori-item": "item" };
  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("click", (e) => {
      e.preventDefault();
      applyCategoryFilter(map[id]);
    });
  });

  document.querySelectorAll("[data-category-link]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      applyCategoryFilter(el.dataset.categoryLink);
      if (typeof window.__closeMobileMenu === "function") window.__closeMobileMenu();
    });
  });
}

// ============ CART ============
function addToCart(id){
  const existing = cart.find(c => c.id === id);
  if (existing){
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  updateCartBadge();
  renderCart();
  const product = findProduct(id);
  showToast(`${product ? product.nama : "Produk"} ditambahkan ke keranjang`);
}

function removeFromCart(id){
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
}

function changeCartQty(id, delta){
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){
    removeFromCart(id);
    return;
  }
  updateCartBadge();
  renderCart();
}

function getCartCount(){
  return cart.reduce((sum, c) => sum + c.qty, 0);
}

function getCartTotal(){
  return cart.reduce((sum, c) => {
    const p = findProduct(c.id);
    return sum + (p ? p.harga * c.qty : 0);
  }, 0);
}

function updateCartBadge(){
  const badge = document.getElementById("cartBadge");
  const count = getCartCount();
  badge.textContent = count;
  badge.hidden = count === 0;
}

function renderCart(){
  const list = document.getElementById("cartList");
  const emptyState = document.getElementById("cartEmptyState");
  const summary = document.getElementById("cartSummary");
  list.innerHTML = "";

  if (cart.length === 0){
    emptyState.hidden = false;
    summary.hidden = true;
    return;
  }
  emptyState.hidden = true;
  summary.hidden = false;

  cart.forEach(c => {
    const p = findProduct(c.id);
    if (!p) return;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-thumb"><img src="${p.gambar}" alt="${p.nama}"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.nama}</div>
        <div class="cart-item-price">${formatRupiah(p.harga)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" type="button" data-action="dec" data-id="${p.id}">−</button>
        <span>${c.qty}</span>
        <button class="qty-btn" type="button" data-action="inc" data-id="${p.id}">+</button>
      </div>
      <button class="cart-item-remove" type="button" data-action="remove" data-id="${p.id}">Hapus</button>
    `;
    list.appendChild(row);
  });

  document.getElementById("cartTotal").textContent = formatRupiah(getCartTotal());
}

function openCart(){
  renderCart();
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartOverlay").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCart(){
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartOverlay").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupCart(){
  document.getElementById("cartToggle").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", (e) => {
    if (e.target.id === "cartOverlay") closeCart();
  });

  document.getElementById("cartList").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if (action === "inc") changeCartQty(id, 1);
    if (action === "dec") changeCartQty(id, -1);
    if (action === "remove") removeFromCart(id);
  });

  document.body.addEventListener("click", (e) => {
    const buyBtn = e.target.closest(".product-buy");
    if (buyBtn) addToCart(buyBtn.dataset.id);
  });

  document.getElementById("cartCheckoutBtn").addEventListener("click", () => {
    if (cart.length === 0) return;
    closeCart();
    openCheckout();
  });
}

// ============ CHECKOUT MODAL ============
function renderCheckoutOrderSummary(){
  const box = document.getElementById("checkoutOrderSummary");
  box.innerHTML = cart.map(c => {
    const p = findProduct(c.id);
    if (!p) return "";
    return `
      <div class="checkout-order-item">
        <span>${p.nama}<small>${c.qty} x ${formatRupiah(p.harga)}</small></span>
        <span>${formatRupiah(p.harga * c.qty)}</span>
      </div>
    `;
  }).join("");
  document.getElementById("sumTotal").textContent = formatRupiah(getCartTotal());
}

function openCheckout(){
  if (cart.length === 0){
    showToast("Keranjang masih kosong. Pilih produk terlebih dahulu.");
    return;
  }
  document.getElementById("ckUsername").value = "";
  document.getElementById("ckNote").value = "";
  renderCheckoutOrderSummary();
  document.getElementById("checkoutOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckout(){
  document.getElementById("checkoutOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function setupCheckoutModal(){
  document.getElementById("checkoutClose").addEventListener("click", closeCheckout);
  document.getElementById("checkoutOverlay").addEventListener("click", (e) => {
    if (e.target.id === "checkoutOverlay") closeCheckout();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      closeCheckout();
      closeCart();
      closeLegalModal();
      closeLoginModal();
    }
  });

  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (cart.length === 0){
      showToast("Keranjang masih kosong.");
      return;
    }
    const username = document.getElementById("ckUsername").value.trim();
    const note = document.getElementById("ckNote").value.trim() || "-";

    if (!username){
      showToast("Isi username Roblox terlebih dahulu.");
      return;
    }

    const items = cart.map(c => {
      const p = findProduct(c.id);
      return { nama: p.nama, qty: c.qty, harga: p.harga };
    });
    const total = getCartTotal();
    const code = generateTransactionCode();

    const itemLines = items.map(it => `- ${it.nama} x${it.qty} (${formatRupiah(it.harga * it.qty)})`).join("\n");

    const message =
`Halo Admin WarungRobux, saya ingin order:

Kode Transaksi: ${code}
${itemLines}

Total: ${formatRupiah(total)}

Username Roblox: ${username}
Catatan: ${note}

Mohon info langkah pembayaran selanjutnya. Terima kasih!`;

    orderHistory.push({
      code,
      items,
      username,
      note,
      total,
      status: "Menunggu Konfirmasi Pembayaran",
      date: new Date()
    });

    const link = buildWhatsAppLink(WHATSAPP_NUMBER, message);
    window.open(link, "_blank", "noopener");

    cart = [];
    updateCartBadge();
    renderCart();
    closeCheckout();
    showToast(`Pesanan dibuat! Kode transaksi: ${code}`);
  });
}

// ============ CEK TRANSAKSI (simulasi front-end) ============
function setupCekTransaksi(){
  document.getElementById("cekForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.getElementById("cekInput").value.trim().toLowerCase();
    const resultBox = document.getElementById("cekResult");
    if (!query){
      return;
    }

    const found = orderHistory.find(o =>
      o.code.toLowerCase() === query || o.username.toLowerCase() === query
    );

    if (found){
      const itemLines = found.items.map(it => `${it.nama} x${it.qty}`).join(", ");
      resultBox.innerHTML = `
        <div class="cek-status-row"><span>Kode Transaksi</span><strong>${found.code}</strong></div>
        <div class="cek-status-row"><span>Produk</span><span>${itemLines}</span></div>
        <div class="cek-status-row"><span>Total</span><span>${formatRupiah(found.total)}</span></div>
        <div class="cek-status-row"><span>Status</span><strong>${found.status}</strong></div>
      `;
    } else {
      resultBox.innerHTML = `
        <p style="margin:0;">Transaksi dengan kode/username <strong>"${document.getElementById("cekInput").value.trim()}"</strong> tidak ditemukan di sesi ini. Jika kamu baru saja checkout di perangkat/sesi lain, silakan hubungi admin melalui WhatsApp untuk pengecekan manual.</p>
      `;
    }
    resultBox.hidden = false;
  });
}

// ============ LEGAL MODAL ============
function openLegalModal(key){
  const data = LEGAL_CONTENT[key];
  if (!data) return;
  document.getElementById("legalTitle").textContent = data.title;
  document.getElementById("legalContent").innerHTML = data.html;
  document.getElementById("legalOverlay").classList.add("open");
  document.getElementById("legalOverlay").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLegalModal(){
  document.getElementById("legalOverlay").classList.remove("open");
  document.getElementById("legalOverlay").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupLegalModal(){
  document.querySelectorAll(".footer-legal-link").forEach(btn => {
    btn.addEventListener("click", () => openLegalModal(btn.dataset.legal));
  });
  document.getElementById("legalClose").addEventListener("click", closeLegalModal);
  document.getElementById("legalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "legalOverlay") closeLegalModal();
  });
}

// ============ LOGIN (front-end saja, belum ada backend) ============
function openLoginModal(){
  document.getElementById("loginOverlay").classList.add("open");
  document.getElementById("loginOverlay").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLoginModal(){
  document.getElementById("loginOverlay").classList.remove("open");
  document.getElementById("loginOverlay").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setLoggedInUI(email){
  const shortName = email.split("@")[0];
  document.querySelectorAll("#loginBtn, #mobileLoginBtn").forEach(btn => {
    btn.textContent = shortName.length > 12 ? shortName.slice(0, 12) + "…" : shortName;
  });
}

function setupLogin(){
  document.getElementById("loginBtn").addEventListener("click", () => {
    if (loggedInUser){
      showToast(`Masuk sebagai ${loggedInUser}`);
      return;
    }
    openLoginModal();
  });
  document.getElementById("mobileLoginBtn").addEventListener("click", () => {
    if (typeof window.__closeMobileMenu === "function") window.__closeMobileMenu();
    if (loggedInUser){
      showToast(`Masuk sebagai ${loggedInUser}`);
      return;
    }
    openLoginModal();
  });
  document.getElementById("loginClose").addEventListener("click", closeLoginModal);
  document.getElementById("loginOverlay").addEventListener("click", (e) => {
    if (e.target.id === "loginOverlay") closeLoginModal();
  });

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    if (!email || password.length < 6){
      showToast("Lengkapi email dan kata sandi (min. 6 karakter).");
      return;
    }
    loggedInUser = email;
    setLoggedInUI(email);
    closeLoginModal();
    showToast(`Berhasil masuk sebagai ${email}`);
    e.target.reset();
  });
}

// ============ KONTAK / WA ADMIN BUTTON ============
function setupContactButton(){
  const btn = document.getElementById("chatAdminBtn");
  if (!btn) return;
  btn.href = buildWhatsAppLink(WHATSAPP_NUMBER, "Halo Admin WarungRobux, saya ingin bertanya seputar produk/pesanan.");
}

// ============ INIT ============
document.addEventListener("DOMContentLoaded", () => {
  renderPopulerGrid();
  renderTerlarisGrid();
  renderTestimonials();
  renderFaq();

  setupScrollSpy();
  setupMobileMenu();
  setupNavDropdown();
  setupMobileSubmenu();
  setupNavSearch();
  setupFilters();
  setupCategoryLinks();
  setupCart();
  setupCheckoutModal();
  setupCekTransaksi();
  setupLegalModal();
  setupLogin();
  setupContactButton();

  updateCartBadge();
});
