document.getElementById("ctaBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("features").offsetTop,
    behavior: "smooth"
  });
});

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

  // Simulasi pengiriman
  setTimeout(() => {
    statusMsg.textContent = "Pesan berhasil dikirim! Terima kasih 😊";
    statusMsg.style.color = "green";
    document.getElementById("contactForm").reset();
  }, 1000);
});
