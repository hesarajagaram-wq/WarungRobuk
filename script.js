// ============ KONFIGURASI ADMIN ============
const WHATSAPP_NUMBER = "6285960426687";
const EMAIL = "warungrobux@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/WarungRobuxGG/";
const PANDUAN_URL = "#panduan";


const LEGAL_CONTENT = {
  privacy: {
    title: "Kebijakan Privasi",
    html: `
      <p>WarungRobux menghargai privasi setiap pelanggan. Data yang diberikan saat checkout digunakan untuk memproses pesanan dan membantu pelayanan pelanggan.</p>
      <h4>Data yang dikumpulkan</h4>
      <ul>
        <li>Username Roblox dan User ID untuk kebutuhan pemrosesan produk.</li>
        <li>Nomor WhatsApp untuk komunikasi pesanan dan konfirmasi pembayaran.</li>
        <li>Catatan pesanan yang kamu isi secara sukarela.</li>
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
      <p>Kesalahan username, User ID, tautan Gamepass, atau detail lain yang diberikan pelanggan dapat memengaruhi kelayakan refund. Pesanan yang sudah berhasil diproses umumnya tidak dapat dibatalkan.</p>
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
  { q: "Bagaimana cara membeli Robux?", a: "Pilih produk Robux sesuai nominal yang diinginkan pada bagian Produk, klik Beli Sekarang, isi data pesanan, lalu selesaikan pembayaran melalui WhatsApp admin." },
  { q: "Berapa lama proses pesanan?", a: "Rata-rata pesanan diproses dalam 5-15 menit setelah pembayaran dikonfirmasi oleh admin, tergantung jenis produk dan antrian." },
  { q: "Bagaimana cara membeli Gamepass?", a: "Pilih kategori Gamepass, pilih paket sesuai harga Gamepass tujuan, lalu isi tautan/detail Gamepass pada kolom catatan saat checkout." },
  { q: "Bagaimana cara order Joki?", a: "Pilih layanan Joki yang diinginkan, isi username dan detail akun pada form checkout, lalu koordinasikan jadwal joki bersama admin via WhatsApp." },
  { q: "Bagaimana cara pembayaran?", a: "Setelah checkout, kamu akan diarahkan ke WhatsApp admin dengan rincian pesanan otomatis. Admin akan memberikan instruksi metode pembayaran yang tersedia." },
  { q: "Bagaimana cara cek transaksi?", a: "Gunakan form Cek Transaksi dengan memasukkan Kode Transaksi atau Username Roblox untuk melihat status pesanan kamu." },
];

// ============ STATE ============
let cartCount = 0;
let currentFilter = "semua";
let currentSearch = "";

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
      <button class="product-buy" data-id="${p.id}">Beli Sekarang</button>
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
  FAQS.forEach((f, i) => {
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
      // tutup semua
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
  const links = document.querySelectorAll(".nav-menu .nav-link");
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
  mobileMenu.querySelectorAll(".nav-link, .btn").forEach(a => a.addEventListener("click", closeMenu));
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

// ============ KATEGORI CARD -> auto filter & scroll ============
function setupCategoryLinks(){
  const map = { "kategori-robux": "robux", "kategori-gamepass": "gamepass", "kategori-joki": "joki", "kategori-item": "item" };
  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const kategori = map[id];
      currentFilter = kategori;
      currentSearch = "";
      const search = document.getElementById("filterSearchInput");
      if (search) search.value = "";
      document.querySelectorAll("#filterChips .chip").forEach(c => {
        c.classList.toggle("active", c.dataset.filter === kategori);
      });
      renderPopulerGrid();
      document.getElementById("produk-populer").scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ============ CHECKOUT MODAL ============
let activeProduct = null;

function populateProductSelect(){
  const select = document.getElementById("ckProduct");
  select.innerHTML = PRODUCTS.map(p => `<option value="${p.id}">${p.nama} — ${formatRupiah(p.harga)}</option>`).join("");
}

function openCheckout(productId){
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  activeProduct = product;
  document.getElementById("ckProduct").value = product.id;
  document.getElementById("ckQty").value = 1;
  document.getElementById("ckVariasi").value = "Standar";
  document.getElementById("ckUsername").value = "";
  document.getElementById("ckUserId").value = "";
  document.getElementById("ckPhone").value = "";
  document.getElementById("ckNote").value = "";
  updateSummary();
  document.getElementById("checkoutOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckout(){
  document.getElementById("checkoutOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function updateSummary(){
  const productId = document.getElementById("ckProduct").value;
  const product = PRODUCTS.find(p => p.id === productId);
  const qty = Math.max(1, parseInt(document.getElementById("ckQty").value) || 1);
  if (!product) return;
  document.getElementById("sumHarga").textContent = formatRupiah(product.harga);
  document.getElementById("sumJumlah").textContent = qty;
  document.getElementById("sumTotal").textContent = formatRupiah(product.harga * qty);
}

function setupCheckoutModal(){
  populateProductSelect();

  document.body.addEventListener("click", (e) => {
    const buyBtn = e.target.closest(".product-buy");
    if (buyBtn){
      openCheckout(buyBtn.dataset.id);
    }
  });

  document.getElementById("checkoutClose").addEventListener("click", closeCheckout);
  document.getElementById("checkoutOverlay").addEventListener("click", (e) => {
    if (e.target.id === "checkoutOverlay") closeCheckout();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCheckout();
  });

  document.getElementById("ckProduct").addEventListener("change", updateSummary);
  document.getElementById("ckQty").addEventListener("input", updateSummary);

  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const product = PRODUCTS.find(p => p.id === document.getElementById("ckProduct").value);
    const qty = Math.max(1, parseInt(document.getElementById("ckQty").value) || 1);
    const variasi = document.getElementById("ckVariasi").value.trim() || "-";
    const username = document.getElementById("ckUsername").value.trim();
    const userId = document.getElementById("ckUserId").value.trim();
    const phone = document.getElementById("ckPhone").value.trim();
    const note = document.getElementById("ckNote").value.trim() || "-";
    const total = product.harga * qty;

    if (!username || !userId || !phone){
      showToast("Lengkapi data pesanan terlebih dahulu.");
      return;
    }

    const message =
`Halo Admin WarungRobux, saya ingin order:

Produk: ${product.nama}
Variasi: ${variasi}
Jumlah: ${qty}
Total: ${formatRupiah(total)}

Username Roblox: ${username}
User ID: ${userId}
No. WhatsApp: ${phone}
Catatan: ${note}

Mohon info langkah pembayaran selanjutnya. Terima kasih!`;

    const link = buildWhatsAppLink(WHATSAPP_NUMBER, message);
    window.open(link, "_blank", "noopener");

    cartCount += 1;
    const badge = document.getElementById("cartBadge");
    badge.textContent = cartCount;
    badge.hidden = false;

    showToast("Pesanan disiapkan! Selesaikan di WhatsApp.");
    closeCheckout();
  });
}

// ============ CEK TRANSAKSI (frontend mockup) ============
function setupCekTransaksi(){
  const form = document.getElementById("cekForm");
  const input = document.getElementById("cekInput");
  const result = document.getElementById("cekResult");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    result.hidden = false;
    result.innerHTML = `
      <p><strong>Kode/Username:</strong> ${query}</p>
      <p style="margin-top:8px;color:var(--silver-dim);">
        Sistem cek transaksi ini masih berupa <strong>tampilan awal (frontend)</strong> dan belum terhubung ke database pesanan.
        Untuk mengecek status transaksi yang sebenarnya, silakan hubungi admin melalui WhatsApp dengan menyertakan kode/username di atas.
      </p>
      <div style="margin-top:14px;">
        <a href="${buildWhatsAppLink(WHATSAPP_NUMBER, `Halo Admin, saya ingin cek status transaksi dengan kode/username: ${query}`)}"
           target="_blank" rel="noopener" class="btn btn-outline btn-sm">Cek via WhatsApp</a>
      </div>
    `;
  });
}

// ============ TOMBOL WHATSAPP UMUM (kontak, chat admin) ============
function setupContactButtons(){
  const chatAdminBtn = document.getElementById("chatAdminBtn");
  chatAdminBtn.href = buildWhatsAppLink(WHATSAPP_NUMBER, "Halo Admin WarungRobux, saya butuh bantuan.");

  const panduanBtn = document.getElementById("panduanBtn");
  panduanBtn.href = PANDUAN_URL;
}

// ============ LEGAL MODAL ============
function setupLegalModal(){
  const overlay = document.getElementById("legalOverlay");
  const closeBtn = document.getElementById("legalClose");
  const title = document.getElementById("legalTitle");
  const content = document.getElementById("legalContent");

  function closeLegal(){
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".footer-legal-link").forEach(btn => {
    btn.addEventListener("click", () => {
      const data = LEGAL_CONTENT[btn.dataset.legal];
      if (!data) return;
      title.textContent = data.title;
      content.innerHTML = data.html;
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    });
  });

  closeBtn.addEventListener("click", closeLegal);
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeLegal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeLegal();
  });
}

// ============ NAVBAR SHADOW ON SCROLL ============
function setupNavbarScrollState(){
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.style.boxShadow = window.scrollY > 10 ? "0 8px 24px rgba(0,0,0,.4)" : "none";
  }, { passive: true });
}

// ============ INIT ============
document.addEventListener("DOMContentLoaded", () => {
  renderPopulerGrid();
  renderTerlarisGrid();
  renderTestimonials();
  renderFaq();
  setupMobileMenu();
  setupNavSearch();
  setupFilters();
  setupCategoryLinks();
  setupCheckoutModal();
  setupCekTransaksi();
  setupContactButtons();
  setupLegalModal();
  setupScrollSpy();
  setupNavbarScrollState();
});
