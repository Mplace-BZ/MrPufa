// === PRODUCT DATA (z BaseLinker CSV) ===
const products = {
    '40x40': {
        price: 129, label: 'Pufa Kostka 40×40 cm', skuPrefix: 'PM2-4040-POS',
        colors: {
            BUT: { name: 'Butelkowa zieleń', img: 'https://upload.cdn.baselinker.com/products/5066973/7feecb02bb23c165162a5b9e753a5abe.png' },
            SZA: { name: 'Szary',            img: 'https://upload.cdn.baselinker.com/products/5066973/c8707953fc6e20759159590abf43b13d.png' },
            BEZ: { name: 'Beżowy',           img: 'https://upload.cdn.baselinker.com/products/5066973/a309954ac89bcadb076153ec9081fdf4.png' },
            MUS: { name: 'Musztardowy',      img: 'https://upload.cdn.baselinker.com/products/5066973/1b60208cf4f828b841008b95e424bfc7.png' },
            GRA: { name: 'Granatowy',        img: 'https://upload.cdn.baselinker.com/products/5066973/6d0da8d5471c09fe672fe3c79f3a4284.png' },
            GRF: { name: 'Grafit',           img: 'https://upload.cdn.baselinker.com/products/5066973/b66d8282c9ba2d66b75e6884c9102a12.png' },
            KOB: { name: 'Kobaltowy',        img: 'https://upload.cdn.baselinker.com/products/5066973/1647455ff7d2f21ea70c43a2f3173365.png' },
            CZA: { name: 'Czarny',           img: 'https://upload.cdn.baselinker.com/products/5066973/93549efb62686392a7035f048b5d3887.png' },
        }
    },
    '60x40': {
        price: 179, label: 'Pufa Ławka 60×40 cm', skuPrefix: 'PM2-6040-POS',
        colors: {
            BUT: { name: 'Butelkowa zieleń', img: 'https://upload.cdn.baselinker.com/products/5066973/bd4c43ea9dd8ac1742fbc505580df9a2.png' },
            SZA: { name: 'Szary',            img: 'https://upload.cdn.baselinker.com/products/5066973/9829bf22eb63cc5c496047b3911f89f9.png' },
            BEZ: { name: 'Beżowy',           img: 'https://upload.cdn.baselinker.com/products/5066973/eefd9d6970a3c4562cee5a0080f63c8e.png' },
            MUS: { name: 'Musztardowy',      img: 'https://upload.cdn.baselinker.com/products/5066973/87568d9c61ee182c83b90f4a94a35bfb.png' },
            GRA: { name: 'Granatowy',        img: 'https://upload.cdn.baselinker.com/products/5066973/5d59e2e67c5f7d76e9b38201525c5a54.png' },
            GRF: { name: 'Grafit',           img: 'https://upload.cdn.baselinker.com/products/5066973/d56ac7a946541ca762558463553e3b40.png' },
            KOB: { name: 'Kobaltowy',        img: 'https://upload.cdn.baselinker.com/products/5066973/d27509d256eee51453c37c296b1a392b.png' },
            CZA: { name: 'Czarny',           img: 'https://upload.cdn.baselinker.com/products/5066973/ea9c056b742b087fa1fbbcf4f91afe54.png' },
        }
    },
    '80x40': {
        price: 239, label: 'Pufa Ławka 80×40 cm', skuPrefix: 'PM2-8040-POS',
        colors: {
            BUT: { name: 'Butelkowa zieleń', img: 'https://upload.cdn.baselinker.com/products/5066973/5289599b8f356177823b0dd29bc7137c.png' },
            SZA: { name: 'Szary',            img: 'https://upload.cdn.baselinker.com/products/5066973/c6c99052e757a54165984ba3a53f5c39.png' },
            BEZ: { name: 'Beżowy',           img: 'https://upload.cdn.baselinker.com/products/5066973/c2a8b241696b29c3ff209c134a7de3a3.png' },
            MUS: { name: 'Musztardowy',      img: 'https://upload.cdn.baselinker.com/products/5066973/63bc78c086352ea1513b854eb835023a.png' },
            GRA: { name: 'Granatowy',        img: 'https://upload.cdn.baselinker.com/products/5066973/d8376a8e2a727f332a043193c9bb02fc.png' },
            GRF: { name: 'Grafit',           img: 'https://upload.cdn.baselinker.com/products/5066973/b5e40d5c3f30d154c20566b92d07e284.png' },
            KOB: { name: 'Kobaltowy',        img: 'https://upload.cdn.baselinker.com/products/5066973/2a533622d24467275a5f8dd17ec128cd.png' },
            CZA: { name: 'Czarny',           img: 'https://upload.cdn.baselinker.com/products/5066973/323a68ab3095a2e193b1b0028ebb3f74.png' },
        }
    }
};

let currentSize  = '40x40';
let currentColor = 'BUT';

function getProduct() { return products[currentSize]; }
function getColorData() { return products[currentSize].colors[currentColor]; }

function updateUI() {
    const p = getProduct();
    const c = getColorData();
    const sku = `${p.skuPrefix}-${currentColor}`;

    // Prices
    ['configPrice', 'btnPrice', 'submitPrice'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = `${p.price} zł`;
    });

    // SKU + color name
    const skuEl = document.getElementById('configSku');
    if (skuEl) skuEl.textContent = sku;
    const colorNameEl = document.getElementById('selectedColorName');
    if (colorNameEl) colorNameEl.textContent = c.name;

    // Configurator product image (fade)
    const configImg = document.getElementById('configProductImg');
    if (configImg) {
        configImg.style.opacity = '0';
        setTimeout(() => { configImg.src = c.img; configImg.style.opacity = '1'; }, 200);
    }

    // Order section
    const orderImg = document.getElementById('orderProductImg');
    if (orderImg) orderImg.src = c.img;
    const orderName = document.getElementById('orderProductName');
    if (orderName) orderName.innerHTML = `<strong>${p.label}</strong>`;
    const orderColor = document.getElementById('orderProductColor');
    if (orderColor) orderColor.textContent = `Kolor: ${c.name}`;
    const orderPrice = document.getElementById('orderProductPrice');
    if (orderPrice) orderPrice.textContent = `${p.price} zł`;

    // Hidden form fields
    const formProduct = document.getElementById('formProduct');
    if (formProduct) formProduct.value = `${p.label} – ${c.name} – ${p.price} zł`;
    const formSku = document.getElementById('formSku');
    if (formSku) formSku.value = sku;
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSize = btn.dataset.size;
    // Reset to first available color if current not available
    if (!products[currentSize].colors[currentColor]) {
        currentColor = 'BUT';
        document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        document.querySelector('.swatch[data-color="BUT"]')?.classList.add('active');
    }
    updateUI();
}

function selectColor(btn) {
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    currentColor = btn.dataset.color;
    // Also update gallery main image
    const main = document.getElementById('galleryMain');
    if (main) {
        main.style.opacity = '0';
        setTimeout(() => { main.src = getColorData().img; main.style.opacity = '1'; }, 200);
        document.querySelectorAll('.gallery__thumb').forEach(t => t.classList.remove('active'));
    }
    updateUI();
}

function syncOrderSection() {
    setTimeout(() => {
        document.getElementById('zamow')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
}

// === GALLERY ===
const galleryImages = [
    'https://upload.cdn.baselinker.com/products/5066973/7feecb02bb23c165162a5b9e753a5abe.png',
    'https://upload.cdn.baselinker.com/products/5066973/2c2a8157ad0c33082d06bd96d1c5ad8b.png',
    'https://upload.cdn.baselinker.com/products/5066973/1fa4c8f0bab573f4a0290e137cee4be3.png',
    'https://upload.cdn.baselinker.com/products/5066973/c8707953fc6e20759159590abf43b13d.png',
    'https://upload.cdn.baselinker.com/products/5066973/1b60208cf4f828b841008b95e424bfc7.png',
    'https://upload.cdn.baselinker.com/products/5066973/a309954ac89bcadb076153ec9081fdf4.png',
];
let galleryIndex = 0;

function setGalleryIndex(idx) {
    galleryIndex = (idx + galleryImages.length) % galleryImages.length;
    const main = document.getElementById('galleryMain');
    if (!main) return;
    main.style.opacity = '0';
    setTimeout(() => { main.src = galleryImages[galleryIndex]; main.style.opacity = '1'; }, 180);
    document.querySelectorAll('.gallery__thumb').forEach((t, i) => t.classList.toggle('active', i === galleryIndex));
}

document.addEventListener('DOMContentLoaded', () => {
    // Gallery thumbs
    document.querySelectorAll('.gallery__thumb').forEach((thumb, i) => {
        thumb.addEventListener('click', () => setGalleryIndex(i));
    });
    document.getElementById('galleryNext')?.addEventListener('click', () => setGalleryIndex(galleryIndex + 1));
    document.getElementById('galleryPrev')?.addEventListener('click', () => setGalleryIndex(galleryIndex - 1));

    // Header scroll
    window.addEventListener('scroll', () => {
        document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Mobile nav
    document.getElementById('navToggle')?.addEventListener('click', () => {
        document.getElementById('nav')?.classList.toggle('open');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav a').forEach(a => {
        a.addEventListener('click', () => document.getElementById('nav')?.classList.remove('open'));
    });

    // Form submit
    document.getElementById('orderForm')?.addEventListener('submit', (e) => {
        const btn = document.getElementById('submitBtn');
        if (btn) { btn.textContent = '⏳ Wysyłam zamówienie...'; btn.disabled = true; }
    });

    // Init
    updateUI();
});

// === FAQ ===
function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('open'));

    if (!isOpen) {
        answer.classList.add('open');
        icon.classList.add('open');
    }
}
