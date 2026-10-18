
/* ================= MOBILE NAVIGATION ================= */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

function closeMenu() {
    navbar.classList.remove('active');
    menuIcon.setAttribute('name', 'menu-outline');
}

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    const isOpen = navbar.classList.contains('active');

    menuIcon.setAttribute(
        'name',
        isOpen ? 'close-outline' : 'menu-outline'
    );
});

/* CLOSE MENU AFTER CLICKING A NAVIGATION LINK */

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* ================= MOBILE PROJECT TAP ================= */

const projectCards = document.querySelectorAll('.projects-box');

projectCards.forEach(card => {
    card.addEventListener('click', function(event) {

        // Only apply tap behaviour on touch/mobile devices
        if (window.matchMedia('(hover: none)').matches) {

            // Close other project cards
            projectCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('project-active');
                }
            });

            // Toggle selected project
            card.classList.toggle('project-active');

            // Prevent GitHub link clicks from toggling the card
            if (event.target.closest('a')) {
                card.classList.add('project-active');
            }
        }
    });
});

/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll('section');
const header = document.querySelector('.header');

function updateNavigation() {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            navLinks.forEach(link => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    header.classList.toggle('sticky', scrollPosition > 100);
}

window.addEventListener('scroll', updateNavigation);

/* ================= SCROLL REVEAL ================= */

if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        reset: false,
        distance: '80px',
        duration: 1800,
        delay: 150
    });

    ScrollReveal().reveal('.home-content, .heading', {
        origin: 'top'
    });

    ScrollReveal().reveal(
        '.home-img, .skills-container, .projects-box, .contact form',
        { origin: 'bottom' }
    );

    ScrollReveal().reveal('.home-content h1, .about-img', {
        origin: 'left'
    });

    ScrollReveal().reveal('.home-content p, .about-content', {
        origin: 'right'
    });
}

/* ================= TYPED TEXT ANIMATION ================= */

if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: ['Data Analyst', 'Business Analyst'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}
