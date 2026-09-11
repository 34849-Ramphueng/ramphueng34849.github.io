// ===== เมนูมือถือ (เปิด/ปิด) =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.navbar__links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// ปิดเมนูมือถือเมื่อกดลิงก์ใดลิงก์หนึ่ง (จะพาไปหน้าใหม่ตามปกติ)
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// หมายเหตุ: แต่ละหัวข้อตอนนี้เป็นไฟล์ .html แยกกันจริง (index.html, foreword.html, ...)
// เมนูที่ตรงกับหน้าปัจจุบันจะถูกไฮไลต์ไว้แล้วโดยตรงในโค้ด HTML ของแต่ละไฟล์ (class="active")
// จึงไม่จำเป็นต้องมีสคริปต์ตรวจจับหน้าปัจจุบันเพิ่มเติม
