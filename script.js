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
});/* ================== Lightbox + Pinch Zoom + Pan ================== */

let scale = 1;
let startDistance = 0;

let posX = 0;
let posY = 0;
let startX = 0;
let startY = 0;
let isDragging = false;

const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

/* فتح الصورة */
function openLightbox(img) {
  scale = 1;
  posX = 0;
  posY = 0;
  
  lightImg.src = img.src;
  lightImg.style.transform = `translate(0px, 0px) scale(1)`;
  lightbox.style.display = "flex";
}

/* إغلاق */
function closeLightbox() {
  lightbox.style.display = "none";
}

/* ===== Pinch Zoom ===== */
lightbox.addEventListener("touchstart", function(e) {
  if (e.touches.length === 2) {
    startDistance = getDistance(e.touches[0], e.touches[1]);
  }
  
  if (e.touches.length === 1 && scale > 1) {
    isDragging = true;
    startX = e.touches[0].pageX - posX;
    startY = e.touches[0].pageY - posY;
  }
});

lightbox.addEventListener("touchmove", function(e) {
  if (e.touches.length === 2) {
    e.preventDefault();
    
    const newDistance = getDistance(e.touches[0], e.touches[1]);
    const diff = newDistance - startDistance;
    
    scale += diff * 0.002;
    if (scale < 1) scale = 1;
    if (scale > 4) scale = 4;
    
    applyTransform();
    startDistance = newDistance;
  }
  
  if (e.touches.length === 1 && isDragging && scale > 1) {
    e.preventDefault();
    posX = e.touches[0].pageX - startX;
    posY = e.touches[0].pageY - startY;
    applyTransform();
  }
});

lightbox.addEventListener("touchend", function() {
  isDragging = false;
});

/* حساب المسافة بين إصبعين */
function getDistance(t1, t2) {
  const dx = t1.pageX - t2.pageX;
  const dy = t1.pageY - t2.pageY;
  return Math.sqrt(dx * dx + dy * dy);
}

/* تطبيق التحويل */
function applyTransform() {
  lightImg.style.transform =
    `translate(${posX}px, ${posY}px) scale(${scale})`;
}function openWhatsApp(event) {
  event.stopPropagation(); // يمنع فتح القسم
  window.open("https://wa.me/9647509332387", "_blank");
}
