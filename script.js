function openSection(id) {
  document.getElementById("sectionsCards").style.display = "none";
  
  document.querySelectorAll(".work-section").forEach(sec => {
    sec.style.display = "none";
  });
  
  document.getElementById(id).style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Lightbox */
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* لغتين */
let lang = "ar";
document.getElementById("langBtn").onclick = () => {
  lang = lang === "ar" ? "en" : "ar";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.getElementById("langBtn").innerText = lang === "ar" ? "EN" : "AR";
  
  document.querySelectorAll("[data-ar]").forEach(el => {
    el.innerText = el.dataset[lang];
  });
};function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.body.classList.remove("lightbox-open");
}// سنة تلقائية + توافق مع تغيير اللغة
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});