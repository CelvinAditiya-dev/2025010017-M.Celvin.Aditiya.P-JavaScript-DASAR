// Praktikum JavaScript Dasar — contoh dan latihan sesuai Modul Praktikum 07

// Praktik 1–2: console.log dan komentar
console.log("Nama saya Celvin");
console.log("Saya sedang belajar JavaScript");
console.log(2026);
// Komentar satu baris tidak dijalankan sebagai instruksi.
/*
Komentar beberapa baris juga tidak dijalankan.
*/

const rupiah = (angka) => "Rp" + Number(angka).toLocaleString("id-ID");

document.getElementById("tampilConsole").addEventListener("click", () => {
  console.log("Halo, JavaScript!");
  console.log("Instruksi ini dijalankan");
  console.log("Program berlanjut");
  document.getElementById("consoleStatus").textContent =
    "Pesan sudah dikirim ke Console. Buka Developer Tools → Console untuk melihatnya.";
});

// Praktik 3–4: variabel dan tipe data
document.getElementById("ujiVariabel").addEventListener("click", () => {
  const namaProduk = "Sendok Kayu";
  const hargaProduk = 15000;
  let stok = 24;
  const tersedia = true;
  stok = 20;

  const pelanggan = "Dewi";
  const totalBelanja = 87500;
  const member = false;
  const catatan = null;
  let nomorTelepon;

  const teks = [
    `Produk: ${namaProduk}`,
    `Harga: ${rupiah(hargaProduk)}`,
    `Stok terbaru: ${stok}`,
    `Tersedia: ${tersedia}`,
    "",
    `Tipe pelanggan: ${typeof pelanggan}`,
    `Tipe totalBelanja: ${typeof totalBelanja}`,
    `Tipe member: ${typeof member}`,
    `Tipe catatan (null): ${typeof catatan} (perilaku historis JavaScript)`,
    `Tipe nomorTelepon: ${typeof nomorTelepon} (nilainya undefined)`
  ].join("\n");
  document.getElementById("hasilVariabel").textContent = teks;
  console.log(teks);
});

// Praktik 5–6: subtotal, diskon 10% minimal Rp100.000, dan validasi prompt-style
document.getElementById("formBelanja").addEventListener("submit", (event) => {
  event.preventDefault();
  const nama = document.getElementById("namaPelanggan").value.trim();
  const hargaInput = document.getElementById("hargaDasar").value;
  const jumlahInput = document.getElementById("jumlahDasar").value;
  const harga = Number(hargaInput);
  const jumlah = Number(jumlahInput);
  const hasil = document.getElementById("hasilBelanja");

  if (!nama || hargaInput === "" || jumlahInput === "") {
    hasil.textContent = "Data masukan belum valid. Semua kolom wajib diisi.";
    return;
  }
  if (!Number.isFinite(harga) || !Number.isFinite(jumlah) || harga < 0 || jumlah < 0) {
    hasil.textContent = "Data masukan belum valid. Harga dan jumlah tidak boleh negatif.";
    return;
  }
  const subtotal = harga * jumlah;
  const diskon = subtotal >= 100000 ? subtotal * 0.10 : 0;
  hasil.textContent = `Pelanggan: ${nama} | Subtotal: ${rupiah(subtotal)} | Diskon: ${rupiah(diskon)} | Total: ${rupiah(subtotal - diskon)}`;
});

// Praktik 7: status kelulusan
document.getElementById("cekNilai").addEventListener("click", () => {
  const input = document.getElementById("nilai").value;
  const nilai = Number(input);
  const hasil = document.getElementById("hasilNilai");
  if (input === "" || !Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
    hasil.textContent = "Nilai tidak valid. Masukkan angka antara 0 sampai 100.";
  } else if (nilai >= 60) {
    hasil.textContent = "Lulus";
  } else {
    hasil.textContent = "Belum lulus";
  }
});

// Praktik 8: aturan diskon toko online
document.getElementById("cekDiskonMember").addEventListener("click", () => {
  const input = document.getElementById("subtotalDiskon").value;
  const subtotal = Number(input);
  const member = document.getElementById("statusMember").value === "true";
  const hasil = document.getElementById("hasilDiskonMember");
  if (input === "" || !Number.isFinite(subtotal) || subtotal < 0) {
    hasil.textContent = "Masukkan subtotal yang valid.";
    return;
  }
  let persentaseDiskon = 0;
  if (subtotal >= 200000) persentaseDiskon = 0.10;
  else if (member && subtotal >= 100000) persentaseDiskon = 0.05;
  const diskon = subtotal * persentaseDiskon;
  hasil.textContent = `Subtotal: ${rupiah(subtotal)} | Diskon: ${rupiah(diskon)} | Total akhir: ${rupiah(subtotal - diskon)}`;
});

// Praktik 9: ongkos kirim
document.getElementById("cekOngkir").addEventListener("click", () => {
  const input = document.getElementById("totalOngkir").value;
  const totalBelanja = Number(input);
  const layanan = document.getElementById("layanan").value;
  const hasil = document.getElementById("hasilOngkir");
  if (input === "" || !Number.isFinite(totalBelanja) || totalBelanja < 0) {
    hasil.textContent = "Masukkan total belanja yang valid.";
    return;
  }
  let ongkir;
  if (layanan === "reguler") ongkir = totalBelanja >= 150000 ? 0 : 10000;
  else if (layanan === "ekspres") ongkir = 20000;
  else ongkir = null;

  if (ongkir === null) hasil.textContent = "Layanan tidak tersedia.";
  else hasil.textContent = `Ongkir: ${rupiah(ongkir)} | Total pembayaran: ${rupiah(totalBelanja + ongkir)}`;
});

// Praktik 10: perulangan for, nomor genap, dan operator sisa bagi (%)
document.getElementById("jalankanLoop").addEventListener("click", () => {
  const semuaNomor = [];
  const nomorGenap = [];
  for (let nomor = 1; nomor <= 10; nomor++) {
    semuaNomor.push(nomor);
    if (nomor % 2 === 0) nomorGenap.push(nomor);
  }
  document.getElementById("hasilLoop").textContent =
    `Nomor 1–10: ${semuaNomor.join(", ")}\nNomor genap: ${nomorGenap.join(", ")}\nOperator % menghasilkan sisa pembagian; nomor % 2 === 0 berarti nomor genap.`;
});

// Praktik 11–12: array harga dan pencarian produk di bawah Rp30.000
document.getElementById("olahArray").addEventListener("click", () => {
  const namaProduk = ["Sendok Kayu", "Spatula", "Talenan", "Centong"];
  const hargaProduk = [15000, 35000, 50000, 18000];
  let total = 0;
  for (let i = 0; i < hargaProduk.length; i++) total += hargaProduk[i];
  const murah = [];
  for (let i = 0; i < namaProduk.length; i++) {
    if (hargaProduk[i] < 30000) murah.push(`${namaProduk[i]} — ${rupiah(hargaProduk[i])}`);
  }
  document.getElementById("hasilArray").textContent =
    `Daftar harga: ${hargaProduk.map(rupiah).join(", ")}\nTotal daftar harga: ${rupiah(total)}\nProduk di bawah Rp30.000:\n- ${murah.join("\n- ")}`;
});

// Praktik 13–14: fungsi reusable dan kategori pelanggan
function hitungSubtotal(harga, jumlah) { return harga * jumlah; }
function hitungDiskon(subtotal) { return subtotal >= 100000 ? subtotal * 0.10 : 0; }
function hitungTotal(subtotal, diskon) { return subtotal - diskon; }
function tentukanKategori(totalBelanja) {
  if (totalBelanja >= 300000) return "Platinum";
  if (totalBelanja >= 150000) return "Gold";
  if (totalBelanja >= 50000) return "Silver";
  return "Reguler";
}
document.getElementById("ujiFungsi").addEventListener("click", () => {
  const subtotal = hitungSubtotal(35000, 4);
  const diskon = hitungDiskon(subtotal);
  const contohKategori = [45000, 80000, 200000, 350000]
    .map((nilai) => `${rupiah(nilai)} → ${tentukanKategori(nilai)}`);
  document.getElementById("hasilFungsi").textContent =
    `Subtotal: ${rupiah(subtotal)}\nDiskon: ${rupiah(diskon)}\nTotal: ${rupiah(hitungTotal(subtotal, diskon))}\n\nKategori pelanggan:\n${contohKategori.join("\n")}`;
});

// Praktik 15: DOM, event click, dan reset
document.getElementById("ubahDom").addEventListener("click", () => {
  document.getElementById("judulDom").textContent = "Katalog Produk";
  document.getElementById("pesanDom").textContent = "Teks berhasil diubah.";
});
document.getElementById("resetDom").addEventListener("click", () => {
  document.getElementById("judulDom").textContent = "Judul Awal";
  document.getElementById("pesanDom").textContent = "Belum ada tindakan.";
});

// Praktik 16: kalkulator total dengan validasi
document.getElementById("hitungLangsung").addEventListener("click", () => {
  const hargaInput = document.getElementById("hargaLangsung").value;
  const jumlahInput = document.getElementById("jumlahLangsung").value;
  const harga = Number(hargaInput);
  const jumlah = Number(jumlahInput);
  const hasil = document.getElementById("hasilLangsung");
  if (hargaInput === "" || jumlahInput === "" || !Number.isFinite(harga) ||
      !Number.isFinite(jumlah) || harga < 0 || jumlah < 0) {
    hasil.textContent = "Masukkan data yang valid. Harga dan jumlah tidak boleh kosong atau negatif.";
    return;
  }
  hasil.textContent = `Total: ${rupiah(harga * jumlah)}`;
});

// Praktik 17: validasi nama dan email
document.getElementById("kirimValidasi").addEventListener("click", () => {
  const nama = document.getElementById("namaValidasi").value.trim();
  const email = document.getElementById("emailValidasi").value.trim();
  const hasil = document.getElementById("hasilValidasi");
  if (nama === "" || email === "") {
    hasil.textContent = "Nama dan email wajib diisi.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    hasil.textContent = "Format email belum valid.";
    return;
  }
  hasil.textContent = `Terima kasih, ${nama}. Data berhasil diperiksa.`;
});

// Mini-proyek: kalkulator belanja sesuai ketentuan modul
document.getElementById("formMini").addEventListener("submit", (event) => {
  event.preventDefault();
  const nama = document.getElementById("namaProduk").value.trim();
  const hargaInput = document.getElementById("hargaMini").value;
  const jumlahInput = document.getElementById("jumlahMini").value;
  const harga = Number(hargaInput);
  const jumlah = Number(jumlahInput);
  const hasil = document.getElementById("hasilMini");

  if (nama === "" || hargaInput === "" || jumlahInput === "") {
    hasil.textContent = "Semua kolom wajib diisi.";
    return;
  }
  if (!Number.isFinite(harga) || !Number.isFinite(jumlah) || harga < 0 || jumlah < 1) {
    hasil.textContent = "Harga atau jumlah tidak valid. Harga tidak boleh negatif dan jumlah minimal 1.";
    return;
  }
  const subtotal = hitungSubtotal(harga, jumlah);
  const diskon = hitungDiskon(subtotal);
  const total = hitungTotal(subtotal, diskon);
  hasil.textContent = `Produk: ${nama}\nSubtotal: ${rupiah(subtotal)}\nDiskon: ${rupiah(diskon)}\nTotal pembayaran: ${rupiah(total)}`;
});

// Tantangan B: minimal lima produk, termurah, termahal, dan rata-rata
document.getElementById("tantanganProduk").addEventListener("click", () => {
  const produk = [
    { nama: "Buku Tulis", harga: 5000 },
    { nama: "Pulpen", harga: 3000 },
    { nama: "Penggaris", harga: 7000 },
    { nama: "Tas", harga: 85000 },
    { nama: "Tempat Pensil", harga: 15000 }
  ];
  const total = produk.reduce((jumlah, item) => jumlah + item.harga, 0);
  const termurah = produk.reduce((a, b) => a.harga < b.harga ? a : b);
  const termahal = produk.reduce((a, b) => a.harga > b.harga ? a : b);
  const rataRata = total / produk.length;
  const daftar = produk.map((item, i) => `${i + 1}. ${item.nama} — ${rupiah(item.harga)}`).join("\n");
  document.getElementById("hasilTantanganProduk").textContent =
    `${daftar}\n\nProduk termurah: ${termurah.nama} (${rupiah(termurah.harga)})\nProduk termahal: ${termahal.nama} (${rupiah(termahal.harga)})\nTotal harga: ${rupiah(total)}\nRata-rata harga: ${rupiah(rataRata)}`;
});

// Tantangan C: formulir pemesanan dengan validasi dan reset
document.getElementById("formPemesanan").addEventListener("submit", (event) => {
  event.preventDefault();
  const nama = document.getElementById("namaPembeli").value.trim();
  const produk = document.getElementById("produkPesanan").value.trim();
  const jumlahInput = document.getElementById("jumlahPesanan").value;
  const jumlah = Number(jumlahInput);
  const hasil = document.getElementById("hasilPemesanan");
  if (nama === "" || produk === "" || jumlahInput === "") {
    hasil.textContent = "Nama pembeli, produk, dan jumlah wajib diisi.";
    return;
  }
  if (!Number.isFinite(jumlah) || jumlah <= 0 || !Number.isInteger(jumlah)) {
    hasil.textContent = "Jumlah harus berupa bilangan bulat lebih besar dari nol.";
    return;
  }
  hasil.textContent = `Ringkasan pesanan: ${nama} memesan ${produk} sebanyak ${jumlah} unit.`;
});
document.getElementById("formPemesanan").addEventListener("reset", () => {
  document.getElementById("hasilPemesanan").textContent = "Isi semua kolom untuk membuat ringkasan.";
});
