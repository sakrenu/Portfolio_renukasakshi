/* ══════════════════════════════════════════════
   AOS — scroll animations
══════════════════════════════════════════════ */
AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
});

/* ══════════════════════════════════════════════
   Navbar: glassmorphism shadow + active section
══════════════════════════════════════════════ */
const mainNav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    mainNav.classList.toggle('scrolled', window.scrollY > 20);
});

// Highlight active nav link via IntersectionObserver
const sections  = document.querySelectorAll('section[id], footer');
const navLinks  = document.querySelectorAll('#mainNav .nav-link');

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === `#${entry.target.id}`
                    );
                });
            }
        });
    },
    { rootMargin: '-36% 0px -56% 0px' }
);

sections.forEach((s) => sectionObserver.observe(s));

/* ══════════════════════════════════════════════
   Back to Top
══════════════════════════════════════════════ */
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 360);
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ══════════════════════════════════════════════
   Contact Form — Formspree AJAX
   Replace YOUR_FORM_ID in index.html with your
   actual Formspree form ID from formspree.io
══════════════════════════════════════════════ */
const contactForm = document.getElementById('contact-form');
const formStatus  = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = 'Sending… <i class="fas fa-spinner fa-spin"></i>';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
        const res = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { Accept: 'application/json' },
        });

        if (res.ok) {
            formStatus.textContent = "Thanks! I'll get back to you soon.";
            formStatus.classList.add('success');
            contactForm.reset();
        } else {
            const json = await res.json().catch(() => ({}));
            const msg  = json.errors
                ? json.errors.map((err) => err.message).join(', ')
                : 'Something went wrong. Please try again.';
            formStatus.textContent = msg;
            formStatus.classList.add('error');
        }
    } catch {
        formStatus.textContent = 'Network error — please check your connection.';
        formStatus.classList.add('error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    }
});
