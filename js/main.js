const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.site-nav ul');
const scrollTopBtn = document.querySelector('.scroll-top');
const smoothButtons = document.querySelectorAll('[data-scrollto]');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navList.setAttribute('aria-expanded', String(!expanded));
    });

    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navList.setAttribute('aria-expanded', 'false');
        });
    });
}

const toggleScrollTopVisibility = () => {
    if (window.scrollY > 360) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (scrollTopBtn) {
    window.addEventListener('scroll', toggleScrollTopVisibility);
    toggleScrollTopVisibility();
}

smoothButtons.forEach(button => {
    const targetSelector = button.getAttribute('data-scrollto');
    if (!targetSelector) return;

    button.addEventListener('click', () => {
        const target = document.querySelector(targetSelector);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
