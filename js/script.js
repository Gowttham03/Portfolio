
/* MOBILE NAVIGATION */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    const isOpen = navbar.classList.contains('active');

    menuIcon.setAttribute(
        'name',
        isOpen ? 'close-outline' : 'menu-outline'
    );
});

/* CLOSE MOBILE MENU WHEN LINK IS CLICKED */

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.setAttribute('name', 'menu-outline');
    });
});

/* ACTIVE NAVIGATION LINK ON SCROLL */

const sections = document.querySelectorAll('section');

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

    /* STICKY HEADER */

    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollPosition > 100);
}

window.addEventListener('scroll', updateNavigation);

/* SCROLL REVEAL */

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

/* TYPED TEXT ANIMATION */

if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: ['Data Analyst', 'Business Analyst'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}
