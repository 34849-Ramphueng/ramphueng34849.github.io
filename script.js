// ===== เมนูมือถือ (เปิด/ปิด) =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.navbar__links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// ปิดเมนูมือถือเมื่อกดลิงก์ใดลิงก์หนึ่ง
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== ระบบสลับหน้าทีละหัวข้อ (เปลี่ยนได้เฉพาะกดเมนูเท่านั้น) =====
const sections = document.querySelectorAll('.section[id]');
const navItems = document.querySelectorAll('.navbar__links a[data-nav]');

const setActive = (id) => {
  // สลับหัวข้อที่แสดงผล
  sections.forEach((section) => {
    section.classList.toggle('active-section', section.id === id);
  });
  // สลับสถานะไฮไลต์เมนู
  navItems.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
  // เลื่อนเนื้อหาภายในหัวข้อนั้นกลับไปบนสุดทุกครั้งที่สลับ
  const activeSection = document.getElementById(id);
  if (activeSection) activeSection.scrollTop = 0;
};

navItems.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    setActive(targetId);
    history.replaceState(null, '', `#${targetId}`);
  });
});

// ปุ่มลูกศรเลื่อนลงในหน้าแรก ก็ให้ทำงานเหมือนกดเมนู "คำนำ"
const heroScroll = document.querySelector('.hero__scroll');
if (heroScroll) {
  heroScroll.addEventListener('click', (event) => {
    event.preventDefault();
    setActive('foreword');
    history.replaceState(null, '', '#foreword');
  });
}

// เปิดหัวข้อเริ่มต้น: ใช้ตาม URL hash ถ้ามี ไม่งั้นเริ่มที่หน้าแรก
const initialId = (location.hash && document.getElementById(location.hash.slice(1)))
  ? location.hash.slice(1)
  : 'home';
setActive(initialId);
