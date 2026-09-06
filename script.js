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

// ===== ไฮไลต์เมนูตามหัวข้อที่กำลังมองเห็น (scroll-spy) =====
const sections = document.querySelectorAll('.section[id]');
const navItems = document.querySelectorAll('.navbar__links a[data-nav]');

const setActive = (id) => {
  navItems.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
);

sections.forEach((section) => observer.observe(section));
