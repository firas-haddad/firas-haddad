/* ================== الأقسام ================== */
function openSection(id) {
  const cards = document.getElementById("sectionsCards");
  const sections = document.querySelectorAll(".work-section");
  
  if (cards) cards.style.display = "none";
  sections.forEach(sec => sec.style.display = "none");
  
  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState({ section: id }, "", "#" + id);
  }
}

/* ================== WhatsApp ================== */
function openWhatsApp(event) {
  event.stopPropagation();
  window.open("https://wa.me/9647509332387", "_blank");
}

/* ================== تغيير اللغة ================== */
let currentLang = "ar";
const langBtn = document.getElementById("langBtn");

if (langBtn) {
  langBtn.onclick = () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    langBtn.textContent = currentLang === "ar" ? "EN" : "AR";
    
    document.querySelectorAll("[data-ar]").forEach(el => {
      el.textContent = el.dataset[currentLang];
    });
  };
}

/* ================== السنة ================== */
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

/* ================== Lightbox ================== */
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

function openLightbox(img) {
  lightImg.src = img.src;
  lightbox.style.display = "flex";
  history.pushState({ lightbox: true }, "", "#img");
}

function closeLightbox() {
  lightbox.style.display = "none";
}

/* ================== زر الرجوع ================== */
window.addEventListener("popstate", () => {
  if (lightbox && lightbox.style.display === "flex") {
    closeLightbox();
    return;
  }
  
  const cards = document.getElementById("sectionsCards");
  const sections = document.querySelectorAll(".work-section");
  
  if (cards) cards.style.display = "grid";
  sections.forEach(sec => sec.style.display = "none");
});