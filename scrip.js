// 🔹 Tombol scroll ke bagian fitur
document.getElementById("ctaBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("features").offsetTop,
    behavior: "smooth"
  });
});

// 🔹 Kirim Form ke Netlify dengan aman
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const statusMsg = document.getElementById("statusMsg");

  if (!name || !email || !message) {
    statusMsg.textContent = "Harap isi semua kolom.";
    statusMsg.style.color = "red";
    return;
  }

  // 📨 Kirim ke Netlify dalam format yang dikenali
  const formData = new FormData(this);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
    statusMsg.textContent = "✅ Pesan berhasil dikirim! Terima kasih 😊";
    statusMsg.style.color = "green";
    this.reset();
  })
  .catch((error) => {
    console.error("Gagal mengirim:", error);
    statusMsg.textContent = "❌ Terjadi kesalahan. Coba lagi nanti.";
    statusMsg.style.color = "red";
  });
});
