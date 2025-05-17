let Admin = "6288216796297";
function SendPertanyaanAdmin(Nadmin, Pesan) {
  const encodeUrl = encodeURIComponent(Pesan);
  const whatsappUrl = `https://wa.me/${Nadmin}?text=${encodeUrl}`;
  window.open(whatsappUrl, "_blank"); // di tab baru
}

function waktu() {
  const jam = new Date().getHours();
  if (jam >= 4 && jam < 10) return "Selamat pagi";
  if (jam >= 10 && jam < 15) return "Selamat siang";
  if (jam >= 15 && jam < 18) return "Selamat sore";
  return "Selamat malam";
}

document.getElementById("waBackEnd").addEventListener("click", function () {
  const nomorAdmin = Admin;
  const penentuan = waktu();
  const PesanDefault =
    `${penentuan} kak, saya tertarik dengan layanan *Pembuatan Website* dan *Landing Page*. Bisa Infokan lebih lanjut?`;
  SendPertanyaanAdmin(nomorAdmin, PesanDefault);
});

document.getElementById("servisLaptop").addEventListener("click", function () {
  const nomorAdmin = Admin;
  const penentuan = waktu();
  const PesanDefault = `${penentuan} kak,  saya ingin menanyakan perihal layanan servis elektronik. Saat ini saya memiliki perangkat yang mengalami kerusakan, dan saya ingin mengetahui apakah Bapak/Ibu menyediakan layanan perbaikan untuk jenis perangkat tersebut. Terima kasih.`;
  SendPertanyaanAdmin(nomorAdmin, PesanDefault);
});

document.getElementById('DesainUiUx').addEventListener('click', function() {
    const nomorAdmin = Admin;
    const penentuan = waktu();
    const PesanDefault = `${penentuan} kak, saya tertarik dengan layanan pembuatan desain seperti logo, MMT, atau kebutuhan visual lainnya untuk keperluan bisnis saya. Mohon informasi lebih lanjut mengenai layanan, harga, dan waktu pengerjaannya. Terima kasih.`;
    SendPertanyaanAdmin(nomorAdmin, PesanDefault);
})

