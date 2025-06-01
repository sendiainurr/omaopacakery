const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("../data/produk.json")
  .then(response => response.json())
  .then(data => {
    const produk = data.find(item => item.id === id);
    if (produk) {
      document.getElementById("detail-nama").textContent = produk.nama;
      document.getElementById("detail-gambar").src = "../" + produk.gambar;
      document.getElementById("detail-gambar").alt = produk.nama;
      document.getElementById("detail-deskripsi").textContent = produk.deskripsi;
      document.getElementById("detail-harga").textContent = `Rp. ${produk.harga.toLocaleString("id-ID")}`;

      const marketplaceContainer = document.getElementById("marketplace-links");
      produk.marketplace.forEach(market => {
        const icon = document.createElement("img");
        icon.className = "h-8 w-8";

        switch (market) {
          case "whatsapp":
            icon.src = "../Assets/icon/footer 1.png";
            icon.alt = "WhatsApp";
            break;
          case "shopee":
            icon.src = "../Assets/icon/footer 5.png";
            icon.alt = "Shopee";
            break;
          case "tokopedia":
            icon.src = "../Assets/icon/footer 6.png";
            icon.alt = "Tokopedia";
            break;
        }

        marketplaceContainer.appendChild(icon);
      });

    } else {
      console.error("Produk tidak ditemukan");
    }
  })
  .catch(error => console.error("Gagal fetch data:", error));
