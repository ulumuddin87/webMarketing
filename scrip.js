// 🔹 Tombol scroll ke bagian fitur
document.getElementById("ctaBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("features").offsetTop,
    behavior: "smooth"
  });
});

// 🔹 Kirim Form ke Netlify dengan aman
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const statusMsg = document.getElementById("statusMsg");
  const formData = new FormData(form);

  // Validasi input
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    statusMsg.textContent = "⚠️ Harap isi semua kolom terlebih dahulu.";
    statusMsg.style.color = "red";
    return;
  }

  // 🔸 Konversi ke format application/x-www-form-urlencoded
  const encoded = new URLSearchParams(formData).toString();

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encoded
    });

    if (response.ok) {
      statusMsg.textContent = "✅ Pesan berhasil dikirim! Terima kasih 😊";
      statusMsg.style.color = "green";
      form.reset();
    } else {
      throw new Error(`Gagal (${response.status})`);
    }
  } catch (error) {
    console.error("❌ Error saat mengirim:", error);
    statusMsg.textContent = "❌ Terjadi kesalahan, silakan coba lagi nanti.";
    statusMsg.style.color = "red";
  }
});
