const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click" , () => {
 menu.classList.toggle("menu-active");   
});

window.onscroll = () => {
    menu.classList.remove("menu-active");
};

const btnfilter = document.querySelectorAll(".produk-box ul li");
const produkitems = document.querySelectorAll(".produk-list .tambah");

btnfilter.forEach(button => {
  button.onclick = () => {
    btnfilter.forEach(btn => btn.className = "");
    button.className = "active";

    const kategori = button.textContent.toLowerCase();

    produkitems.forEach(item => {
      const itemKategori = (item.getAttribute("data-filter") || "").toLowerCase();

      if (kategori === "all produk" || itemKategori === kategori) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };
});
    



document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const produkItems = document.querySelectorAll(".produk-list .tambah");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const searchValue = this.value.toLowerCase();

      produkItems.forEach(item => {
        const namaProduk = item.textContent.toLowerCase();
        if (namaProduk.includes(searchValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formPemesanan");
  const output = document.getElementById("outputPesanan");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const produk = document.getElementById("produk").value;
    const jumlah = document.getElementById("jumlah").value;
    const metode = document.getElementById("metode").value;

    output.innerHTML = `
      Terima kasih <strong>${nama}</strong>, pesanan untuk 
      <strong>${jumlah}</strong> x <strong>${produk}</strong> dengan pembayaran 
      <strong>${metode}</strong> telah dicatat.
    `;

    form.reset();
  });
});

const metodeSelect = document.getElementById("metode");
const rekeningInfo = document.getElementById("rekeningInfo");
const ewalletInfo = document.getElementById("ewalletInfo");

metodeSelect.addEventListener("change", function () {
  const selected = this.value;

  // Tampilkan sesuai metode pembayaran
  if (selected === "Transfer Bank") {
    rekeningInfo.style.display = "block";
    ewalletInfo.style.display = "none";
  } else if (selected === "E-Wallet") {
    rekeningInfo.style.display = "none";
    ewalletInfo.style.display = "block";
  } else {
    rekeningInfo.style.display = "none";
    ewalletInfo.style.display = "none";
  }
});

function pesanProduk(namaProduk, hargaProduk, idJumlahInput) {
  const jumlah = parseInt(document.getElementById(idJumlahInput).value) || 1;
  document.getElementById("produk").value = namaProduk;
  document.getElementById("harga").value = hargaProduk;
  document.getElementById("jumlah").value = jumlah;
  document.getElementById("total").value = "Rp " + (hargaProduk * jumlah);
}

// Contoh penanganan submit
document.getElementById("formPemesanan").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesanan berhasil dikirim!");
  this.reset();
});

