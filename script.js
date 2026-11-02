// data produk
const products = [
    {
        id: 'GARNIER',
        name: 'GARNIER',
        variants: [
            { name: 'Sakura White', price: 35.000, desc: 'Membantu mencerahkan wajah dan membuat kulit tampak lebih segar.', image: 'garnier 1.jpg' },
            { name: 'Brightening', price: 33.000, desc: 'Membantu membersihkan wajah dan membuat kulit tampak lebih cerah.', image: 'Garnier 2.jpg' },
            { name: 'Pure Active', price: 33.000, desc: 'Membantu membersihkan minyak berlebih dan merawat kulit berjerawat.', image: 'Garnier 3.jpg' }
        ]
    },

    {
        id: 'emina',
        name: 'emina',
        variants: [
            { name: 'Stawberry Cheesecake', price: 30.000, desc: 'Membersihkan wajah dengan aroma manis strawberry dan memberikan kesegaran.', image: 'emina 1.jpg' },
            { name: 'Matcha Latte', price: 30.000, desc: 'Membersihkan wajah dan memberikan sensasi segar dengan aroma matcha.', image: 'emina 2.jpg' }
        ]
    },

    {
        id: 'Hada Labo',
        name: 'Hada Labo',
        variants: [
            { name: 'Ultimate Moisturizing', price: 28.000, desc: 'Membersihkan wajah sekaligus membantu menjaga kelembapan kulit.', image: 'hadalabo 1.jpg' },
            { name: 'Goku Jyun', price: 31.000, desc: 'Membantu menjaga hidrasi kulit agar terasa lembap dan halus.', image: 'hadalabo 2.jpg' },
            { name: 'Shiro Jyun', price: 25.000, desc: 'Membantu mencerahkan kulit dan menjaga kelembapannya.', image: 'hadalabo 3.jpg' }
        ]
    },

    {
        id: 'Fair&Lovely',
        name: 'Fair&Lovely',
        variants: [
            { name: 'Brightening', price: 29.000, desc: 'Membantu membersihkan wajah dan membuat kulit tampak lebih cerah.', image: 'fair&lovely 1.jpg' },
            { name: 'Vitamin C', price: 29.000, desc: 'Membantu merawat kulit agar tampak lebih cerah dan segar.', image: 'fair&lovely 2.jpg' }
        ]
    },

    {
        id: 'SCŌRA',
        name: 'SCŌRA',
        variants: [
            { name: 'D-Panthenol', price: 34.000, desc: 'Membantu menjaga kelembapan dan merawat skin barrier.', image: 'scora-1.jpg' },
            { name: 'Salicylice Acid', price: 35.000, desc: 'Membantu membersihkan pori-pori dan merawat kulit berjerawat.', image: 'scora-2.jpg' },
            { name: 'Phytobright', price: 36.000, desc: 'Membantu mencerahkan dan merawat kulit kusam.', image: 'scora-3.jpg' }
        ]
    },

    {
        id: 'Gla͜d2Glow',
        name: 'Gla͜d2Glow',
        variants: [
            { name: 'Acne Gel', price: 28.000, desc: 'Membantu membersihkan minyak berlebih dan merawat kulit berjerawat.', image: 'g2g 1.jpg' },
            { name: ' Low PH Gentle', price: 28.000, desc: 'Membersihkan wajah dengan lembut dan membantu menjaga keseimbangan pH kulit.', image: 'g2g 2.jpg' },
            { name: 'Milk', price: 35.000, desc: 'Membersihkan wajah sekaligus membantu menjaga kelembutan kulit.', image: 'g2g 3.jpg' }
        ]
    },

    {
        id: 'Wardãh',
        name: 'Wardãh',
        variants: [
            { name: 'Bright+Oil Control', price: 28.000, desc: 'Membantu mencerahkan wajah dan mengontrol minyak berlebih.', image: 'wardah-1.jpg' },
            { name: 'Hydrating', price: 28.000, desc: 'Membersihkan wajah sekaligus menjaga kelembapan kulit.', image: 'wardah 2.jpg' },
            { name: 'Cooling Bright', price: 28.000, desc: 'Membersihkan wajah, memberikan sensasi dingin, dan membantu kulit tampak cerah.', image: 'wardah-3.jpg' }
        ]
    },

    {
        id: 'SKINTIFIC',
        name: 'SKINTIFIC',
        variants: [
            { name: '5X Ceramide', price: 51.000, desc: 'Membantu menjaga dan memperkuat skin barrier serta kelembapan kulit.', image: 'skintific-1.jpg' },
            { name: 'Niacinamide', price: 51.000, desc: 'Membantu mencerahkan kulit dan merawat tampilan warna kulit tidak merata.', image: 'skintific-2.jpg' }
        ]
    },

    {
        id: 'Kahf',
        name: 'Kahf',
        variants: [
            { name: 'Energizing and Brightening', price: 38.000, desc: 'Membersihkan wajah dan membantu membuat kulit tampak lebih segar dan cerah.', image: 'kahf-1.jpg' },
            { name: 'Brightening and Energizing', price: 38.000, desc: 'Membantu membersihkan wajah agar terasa segar dan tampak lebih cerah.', image: 'kahf-2.jpg' },
            { name: 'Brightening and Dark Spot', price: 38.000, desc: 'Membantu merawat kulit kusam dan menyamarkan tampilan noda hitam.', image: 'kahf-3.jpg' }
        ]
    }
];

// produk yang dipilih
let currentProduct = null;
let selectedVariant = null;

// animasi ketik
const textToType = 'Selamat Datang di Fresh Face';
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        document.getElementById('typingText').innerHTML = 
            textToType.substring(0, charIndex + 1) + '<span class="cursor"></span>';
        charIndex++;
        setTimeout(typeText, 150);
    } else {
        document.getElementById('typingText').innerHTML = textToType;
    }
}

// menyembunyikan layar pembuka dan menampilkan produk
function enterSite() {
    document.getElementById('introScreen').classList.add('hidden');
    document.getElementById('mainFooter').style.display = 'block';
    renderProducts('all'); // langsung tampilkan semua logo
}

// membuat kartu produk dan menampilkannya di halaman
function renderProducts(filter) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    grid.classList.toggle('single-product', filter !== 'all');
    
    const filtered = filter === 'all' ? products : products.filter(p => p.id === filter);
    
    filtered.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = product.id;
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="product-info">
                <button class="product-name" type="button" aria-label="Pilih varian ${product.name}" onclick="openVariants('${product.id}')">${product.name}</button>
                <p style="color: #4B1F72; font-size: 0.9rem;">Klik untuk pilih varian</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

//Menyaring produk berdasarkan kategori yang dipilih
function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts(category);
}

// menampilkan popup pilihan varian saat foto diklik
function openVariants(productId) {
    currentProduct = products.find(p => p.id === productId);
    document.getElementById('variantTitle').textContent = `Pilih Varian ${currentProduct.name}`;
    
    const grid = document.getElementById('variantsGrid');
    grid.innerHTML = '';
    
    currentProduct.variants.forEach((v, idx) => {
        const item = document.createElement('div');
        item.className = 'variant-item';
        item.innerHTML = `
            <img class="variant-img" src="${v.image}" alt="${v.name}">
            <p>${v.name}</p>
        `;
        item.onclick = () => openDetail(idx);
        grid.appendChild(item);
    });
    
    document.getElementById('variantModal').classList.add('show');
}

//buka detail prpduk 
function openDetail(variantIndex) {
    closeModal('variantModal');
    selectedVariant = currentProduct.variants[variantIndex];
    
    document.getElementById('detailImg').src = selectedVariant.image;
    document.getElementById('detailImg').alt = selectedVariant.name;
    document.getElementById('detailName').textContent = `${currentProduct.name}`;
    document.getElementById('detailVarian').textContent = `— ${selectedVariant.name} —`;
    document.getElementById('detailDesc').textContent = selectedVariant.desc;
    document.getElementById('detailPrice').textContent = `Rp ${selectedVariant.price.toLocaleString('id-ID')}`;
    document.getElementById('detailModal').classList.add('show');
}

// menutup jendela yang muncul
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');

    if (modalId === 'detailModal') {
        document.getElementById('variantModal').classList.add('show');
    }
}

// menutup popup saat mengklik area luar kotak
window.onclick = function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
}

// menjalankan fungsi ketikan teks saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    typeText();
});