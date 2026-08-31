const links = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('section[id]');

const setActive = (id) => {
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));
