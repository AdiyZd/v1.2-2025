function sendtele() {
  document
    .querySelector("form")
    .addEventListener("submit", function (kirimPesan) {
      kirimPesan.preventDefault();

      const nama = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const pesan = document.getElementById("message").value.trim();

      // Validasi input kosong
      if (!nama || !email || !subject || !pesan) {
        Swal.fire({
          title: "Input Belum Lengkap / Kosong!",
          text: "Harap isi dan lengkapi semua kolom!",
          icon: "warning",
          showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`,
          },
          hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`,
          },
        });
        return;
      }

      // Pesan Telegram
      const isiPesanUser =
        `📥 *New Message from Website*\n` +
        `👤 *Name:* ${nama}\n` +
        `📧 *Email:* ${email}\n` +
        `📝 *Subject:* ${subject}\n` +
        `💬 *Message:* ${pesan}`;

      const ApiToken = "7586706467:AAEORPG4OlBogMnbehrUmht9l8wlxgslKwo";
      const IdBoot = "7355777672";
      const UrlBotNya = `https://api.telegram.org/bot${ApiToken}/sendMessage`;

      fetch(UrlBotNya, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: IdBoot,
          text: isiPesanUser,
          parse_mode: "Markdown",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            Swal.fire({
              title: "Pesan Terkirim!",
              text: "Pesan berhasil dikirim ke Telegram.",
              icon: "success",
              showClass: {
                popup: ` animate__animated animate__fadeInUp animate__faster `,
              },
              hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
              },
            });
            document.querySelector("form").reset(); // Kosongkan form
          } else {
            Swal.fire({
              title: "Gagal Mengirim!",
              text: `Error: ${data.description}`,
              icon: "error",
              showClass: {
                popup: `animate__animated animate__fadeInUp animate__faster`,
              },
              hideClass: {
                popup: `animate__animated animate__fadeOutDown animate__faster`,
              },
            });
          }
        })
        .catch((err) => {
          console.warn("Error:", err);
          Swal.fire({
            title: "Terjadi Kesalahan!",
            text: `Gagal mengirim pesan. Cek koneksi atau token.`,
            icon: "error",
            showClass: {
              popup: `animate__animated animate__fadeInUp animate__faster`,
            },
            hideClass: {
              popup: `animate__animated animate__fadeOutDown animate__faster`,
            },
          });
        });
    });
}

sendtele();
