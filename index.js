let produk = [
  { 
    nama: "Kaos Polos", 
    harga: 50000, 
    deskripsi: "Kaos nyaman dipakai.", 
    kategori: "Fashion",
    gambar: "https://via.placeholder.com/300x200?text=Kaos+Polos"
  },
  { 
    nama: "Celana Jeans", 
    harga: 120000, 
    deskripsi: "Celana jeans pria.", 
    kategori: "Fashion",
    gambar: "https://via.placeholder.com/300x200?text=Celana+Jeans"
  },
  { 
    nama: "Headphone", 
    harga: 250000, 
    deskripsi: "Suara jernih.", 
    kategori: "Elektronik",
    gambar: "https://via.placeholder.com/300x200?text=Headphone"
  },
  { 
    nama: "Smartphone", 
    harga: 2500000, 
    deskripsi: "Kamera 48MP.", 
    kategori: "Elektronik",
    gambar: "https://via.placeholder.com/300x200?text=Smartphone"
  }
];

// Tampilkan semua produk pertama kali
tampilkanProduk("all");

// Fungsi tampilkan produk
function tampilkanProduk(kategori) {
  let container = document.getElementById("produk-container");
  container.innerHTML = ""; // hapus isi sebelumnya

  // 3. Looping produk
  for (let i = 0; i < produk.length; i++) {
    let item = produk[i];

    // 4. Filter kategori
    if (kategori === "all" || item.kategori === kategori) {
      container.innerHTML += `
        <div class="bg-white shadow-md rounded-lg p-4 hover:scale-105 transform transition duration-300">
          <img src="${item.gambar}" alt="${item.nama}" class="w-full h-40 object-cover rounded-md mb-3">
          <h3 class="text-lg font-semibold text-gray-800">${item.nama}</h3>
          <p class="text-gray-600 text-sm">${item.deskripsi}</p>
          <p class="text-green-600 font-bold mt-2">Harga: Rp ${item.harga.toLocaleString()}</p>
        </div>
      `;
    }
  }
}