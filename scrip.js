document.getElementById("ctaBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("features").offsetTop,
    behavior: "smooth"
  });
});



  // Simulasi pengiriman
  setTimeout(() => {
    statusMsg.textContent = "Pesan berhasil dikirim! Terima kasih 😊";
    statusMsg.style.color = "green";
    document.getElementById("contactForm").reset();
  }, 1000);
});
