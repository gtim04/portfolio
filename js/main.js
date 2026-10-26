/* Portfolio — Interactive behaviour */

/* Initialize scroll-reveal animations (AOS) */
document.addEventListener('DOMContentLoaded', () => {
	AOS.init({
		duration: 800,
		once: true,
		offset: 80,
		easing: 'ease-out-cubic',
	});

	/* Navbar glass effect on scroll */
	const navbar = document.getElementById('navbar');
	const toggleNavbar = () => {
		if (window.scrollY > 40) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	};
	window.addEventListener('scroll', toggleNavbar, { passive: true });
	toggleNavbar();

	/* Mobile menu toggle */
	const toggleBtn = document.getElementById('navToggle');
	const navLinks = document.getElementById('navLinks');

	toggleBtn.addEventListener('click', () => {
		const isOpen = navLinks.classList.toggle('open');
		toggleBtn.setAttribute('aria-expanded', isOpen);
	});

	/* Close mobile menu when clicking a link */
	navLinks.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('open');
			toggleBtn.setAttribute('aria-expanded', 'false');
		});
	});

	/* Contact form — backend not connected yet (Formspree deferred).
	   Prevents navigation, shows a temporary "coming soon" message. */
	const form = document.getElementById('contactForm');
	const btn = document.getElementById('submitBtn');
	const status = document.getElementById('formStatus');

	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const originalText = btn.textContent;
			btn.disabled = true;
			btn.textContent = 'Sending…';
			status.textContent = '';

			setTimeout(() => {
				status.textContent = 'Thanks for reaching out! The contact form is not connected to an inbox yet — please email me directly at gerald.timtiman@gmail.com for now.';
				status.style.color = '#94a3b8';
				btn.disabled = false;
				btn.textContent = originalText;
				form.reset();
			}, 900);
		});
	}
});
