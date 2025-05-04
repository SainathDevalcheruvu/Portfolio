const toggle = document.getElementById('dark-mode-toggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
} else {
    toggle.textContent = '🌙';
}
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
});
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 300);
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Added functionality for resume preview toggle
const resumePreviewToggle = document.getElementById('resume-preview-toggle');
const resumePreview = document.getElementById('resume-preview');
resumePreviewToggle.addEventListener('click', () => {
    const isVisible = resumePreview.style.display === 'block';
    resumePreview.style.display = isVisible ? 'none' : 'block';
    resumePreviewToggle.textContent = isVisible ? 'Preview Resume' : 'Hide Resume';
});
